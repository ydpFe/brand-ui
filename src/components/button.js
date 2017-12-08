import React from 'react';
class Button extends React.Component {
  static propTypes = {
    bgColor : React.PropTypes.string,
    color : React.PropTypes.string,
    type : React.PropTypes.string,
    onClick: React.PropTypes.func,
    loading: React.PropTypes.bool,
    loadingColor: React.PropTypes.string,
    loadingSize: React.PropTypes.number,
    disabled: React.PropTypes.bool,
    radius: React.PropTypes.number,
    fontSize: React.PropTypes.number
  }
  static defaultProps = {
    bgColor: '#DA3D42',
    color: '#fff',
    type : 'default',
    loading: false,
    loadingColor: '#FFFF00',
    loadingSize: 14,
    disabled: false,
    radius: 20,
    fontSize: 16
  }
  constructor(props) {
    super(props)
    this.clickFun = this.clickFun.bind(this)
  }
  clickFun () {
    if (this.props.onClick && this.props.disabled === false) {
      this.props.onClick()
    }
  }
  render() {
    return (
      <button className={`brand-button brand-button-type-${this.props.type} ${this.props.disabled ? 'brand-button-disabled' : ''}`} onClick={this.clickFun}
        style={
          {
            backgroundColor:this.props.bgColor, 
            color:this.props.color, 
            borderRadius: this.props.radius + 'px',
            fontSize: this.props.fontSize + 'px'
          }
        }
      >
      <div className={this.props.loading ? 'brand-button-loading' : 'brand-button-loading-hidden'}
        style={
          {
            borderTopColor: this.props.loadingColor,
            borderLeftColor: this.props.loadingColor,
            borderBottomColor: this.props.loadingColor,
            height: this.props.loadingSize + 'px',
            width: this.props.loadingSize + 'px'
          }
        }
      ></div>
        {this.props.children}
      </button>
    )
  }
}
export default Button;