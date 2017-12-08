import React from 'react';
class Popup extends React.Component {
  static propTypes = {
    show: React.PropTypes.bool,
    position: React.PropTypes.string,
    modal: React.PropTypes.bool,
    closeOnClickModal: React.PropTypes.bool
  }
  static defaultProps = {
    show: false,
    position: 'bottom',
    modal: true,
    closeOnClickModal: true
  }
  constructor(props) {
    super(props);
    this.setTransForm = this.setTransForm.bind(this)
    this.setNone = this.setNone.bind(this)
    this.modalClick = this.modalClick.bind(this)
    this.state = {
      show : false
    }
  }
  setTransForm () {
    let that = this
    let obj = document.getElementById(`picker${this.props.position}`).classList
    if (obj.contains(`brand-popup-${that.props.position}-transform-leave`)) {
      obj.remove(`brand-popup-${that.props.position}-transform-leave`)
    }
    if (obj.contains(`brand-popup-${that.props.position}-transform`)) {
      obj.remove(`brand-popup-${that.props.position}-transform`)
    }
    let setTime = setTimeout(function() {
      obj.add(`brand-popup-${that.props.position}-transform`)
      window.clearInterval(setTime)        
    }, 200)
  }
  setNone () {
    let that = this
    let obj = document.getElementById(`picker${this.props.position}`).classList
    if (obj.contains(`brand-popup-${that.props.position}-transform-leave`)) {
      obj.remove(`brand-popup-${that.props.position}-transform-leave`)
    }
    if (obj.contains(`brand-popup-${that.props.position}-transform`)) {
      obj.remove(`brand-popup-${that.props.position}-transform`)
    }
    let addTime = setTimeout(function() {
      obj.add(`brand-popup-${that.props.position}-transform-leave`)
      window.clearInterval(addTime)      
    }, 200)
    let noneTime = setTimeout(function() {
      that.setState({
        show: false
      })
      obj.remove(`brand-popup-${that.props.position}-transform-leave`)
      window.clearInterval(noneTime)    
    }, 300)
  }
  modalClick () {
    if (!this.props.closeOnClickModal) {
      return false
    } else {
      this.setNone()
    }
  }
  componentDidMount () {
    this.setState({
      show: this.props.show
    })
  }
  componentWillReceiveProps (props) {
    if (props.show) {
      this.setState({
        show: props.show
      })
      this.setTransForm()
    } else {
      this.setNone()
    }
  }
  render() {
    return (
      <div>
        <div id={`picker${this.props.position}`} style={{display: this.state.show ? 'block' : 'none'}} className={`brand-popup-${this.props.position}`}>
          {this.props.children}
        </div>
        <div className={this.props.modal && this.state.show ? 'brand-popup-modal' : 'none'} onClick={this.modalClick}></div> 
      </div>
    )
  }
}
export default Popup;