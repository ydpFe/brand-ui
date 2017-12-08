import React from 'react';
class Tab extends React.Component {
  static propTypes = {
    data: React.PropTypes.array.isRequired,
    index: React.PropTypes.number,
    color: React.PropTypes.string,
    size: React.PropTypes.number,
    onChange: React.PropTypes.func
  }
  static defaultProps = {
    index: 0,
    color: '#E24329',
    size: 14,
    onChange: function () {}
  }
  constructor(props) {
    super(props);
    this.clickFunc = this.clickFunc.bind(this)
    this.state = {
      index: 0
    }
  }
  clickFunc (item, index) {
    this.setState({
      index: index
    }, () => {
      this.props.onChange(item, index)
    })
  }
  componentDidMount () {
    this.setState({
      index: this.props.index
    }, () => {
      this.props.onChange(this.props.data[this.props.index], this.props.index)
    })
  }
  render() {
    const children = this.props.data.map( (item, index) => {
      return (
        <div className="brand-tab-item" onClick={ () => {this.clickFunc(item, index)} } key={index} style={{color: this.state.index === index ? this.props.color : '#000', fontSize: this.props.size}}>{item.title}</div>
      )
    })
    return (
      <div className="brand-tab">
        {children}
        <div className="brand-tab-line" style={{width: (100/this.props.data.length) + '%', left:(100/this.props.data.length) * this.state.index + '%',   border: `1px ${this.props.color} solid`}}></div>
      </div>
    )
  }
}
export default Tab;