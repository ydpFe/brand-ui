import React from 'react';
import findIndex from 'lodash.findindex';
import isEqual from 'lodash.isequal';
const getIndex = (list, item) => {
  if (list && list.length < 1) {
    return 0;
  }
  let index1 = findIndex(list, item);
  let index2 = list.indexOf(item);
  let index = Math.max(index1, index2);
  if (index < 0) {
    throw new Error('list数组中不存在defaultValue');
  }
  return index;
}

class Picker extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.startY = 0;
    this.endY   = 0;
    //当前拖动的Y坐标
    this.currentY = 0;
    this.itemHeight = 36;
    this.selectedIndex = this.getInitialIndex();
    this.state = {style: {}};
    this._defaultValue = null;
    this.isEqual = isEqual
  }
  static propTypes = {
    data: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
    selectKey: React.PropTypes.func.isRequired,
    width: React.PropTypes.string,
    height: React.PropTypes.string,
    float: React.PropTypes.string
  }
  static defaultProps = {
    width: '100%',
    height: '180px'
  }
  // 初始化获得selectedIndex
  getInitialIndex() {
    let index = getIndex(
      this.props.data.list,
      this.props.data.defaultValue
    );
    if (!this.props.data.defaultValue && this.props.data.list.length > 3) {
      index = Math.floor(this.props.data.list.length / 2);
    }
    return index;
  }

  componentWillReceiveProps(nextProps) {
    const isEqual = this.isEqual(
      nextProps.data.defaultValue,
      this._defaultValue
    );
    if (!isEqual) {
      this._defaultValue = nextProps.data.defaultValue;
      this.selectedIndex = this.getReceivePropsIndex(nextProps.data);
      if (this.selectedIndex === 0) {
        this.setState({
          style: {
            transform: `translate(0px, ${this.itemHeight * 2}px) translateZ(0px)`
          }
        })
      }
    }
  }

  getReceivePropsIndex (data) {
    if (this._defaultValue) {
      this.selectedIndex = getIndex(
        data.list,
        data.defaultValue
      );
    }
    return this.selectedIndex;
  }

  getInitialStyle () {
    this.currentY = 0;
    if (this.selectedIndex > 2) {
      this.currentY = - (this.selectedIndex - 2) * this.itemHeight;
    } else {
      this.currentY = (2 - this.selectedIndex) * this.itemHeight;
    }
    return `translate(0px, ${ this.currentY }px) translateZ(0px)`;
  }

  handleTouchStart (e) {
    e.preventDefault();
    if (this.props.data.list.length <= 1) {
      return;
    }
    this.startY = e.nativeEvent.changedTouches[0].pageY;
  }

  handleTouchEnd (e) {
    e.preventDefault();
    if (this.props.data.list.length <= 1) {
      return;
    }
    this.endY = e.nativeEvent.changedTouches[0].pageY;
    // 实际滚动距离
    let v = parseInt(this.endY - this.startY);
    let value = v % this.itemHeight;
    // 计算出每次拖动的36px整倍数
    this.currentY += (v - value);

    // 正数y最大值
    const max1 = 2 * this.itemHeight;
    // 负数y最小值
    const max2 = (this.props.data.list.length - 3) * this.itemHeight;

    if (this.currentY > max1) {
      this.currentY = max1;
    }
    else if (this.currentY > 0 && this.currentY < max1) {
      this.currentY = this.currentY;
    }
    else if (this.currentY === max1) {
      this.currentY = this.currentY;
    }
    else if (Math.abs(this.currentY) > max2) {
      this.currentY = - max2;
    }

    this.countListIndex(this.currentY);

    this.setState({
      style: {
        transform: `translate(0px, ${ this.currentY }px) translateZ(0px)`
      }
    });
  }

  handleTouchMove (e) {
    e.preventDefault();
    if (this.props.data.list.length <= 1) {
      return;
    }
    const pageY = e.nativeEvent.changedTouches[0].pageY;
    let value = parseInt(pageY - this.startY);
    const y = this.currentY + value;
    let style = `translate(0px, ${ y }px) translateZ(0px)`;
    this.setState({
      style: {
        transform: style
      }
    });
  }

  // 计算list数组索引
  countListIndex (pageY) {
    let n = pageY / this.itemHeight;
    n = n > 0 ? 2 - n : Math.abs(n) + 2;
    this.setSelectedValue(n);
  }

  // set选中值
  setSelectedValue (index) {
    const length = this.props.data.list.length;
    if (length === 0) {
      this.callback(null);
      return;
    }
    if (index < 0 || index > length -1) {
      throw new Error('滑动取值索引数值出现错误'+ index);
    }
    const value = this.props.data.list[index];
    this.selectedIndex = index;

    this.callback(value)
  }

  // 回调
  callback (value) {
    this.props.onChange(value);
  }

  getSelectedClass (index) {
    if (this.selectedIndex === index) {
      return 'ui-picker-item-selected';
    }
    return '';
  }

  componentDidMount () {
    this.setSelectedValue(this.selectedIndex);
  }

  handleWrapperStart (e) {
    e.preventDefault();
  }

  render () {
    const style = {
      transform: this.getInitialStyle()
    }
    return (
      <div className="brand-picker-wrapper"
        style={{
          width: this.props.width, 
          height: this.props.height,
          float: this.props.float
          }} 
        onTouchStart={this.handleWrapperStart.bind(this)}>
          <div className="brand-picker"
            style = {this.state.style.transform ? this.state.style : style}
            onTouchStart={this.handleTouchStart.bind(this)}
            onTouchMove={this.handleTouchMove.bind(this)}
            onTouchEnd = {this.handleTouchEnd.bind(this)}>
            {
              this.props.data.list.map((data, index) => {
                const selectKey = this.props.selectKey(data);
                return <div key={index}
                  className={ 'brand-picker-item ' + this.getSelectedClass(index)}>
                  {selectKey}
                </div>
              })
            }
          </div>
          <div className="brand-picker-center"></div>
      </div>
    )
  }
}

export default Picker;
