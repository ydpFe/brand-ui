import React from 'react';
class Loading extends React.Component {
  static propTypes = {
    type : React.PropTypes.string,
    loadingColor : React.PropTypes.string,
    loadingSize : React.PropTypes.number,
    full : React.PropTypes.bool,
    show: React.PropTypes.bool
  }
  static defaultProps = {
    type : 'rotate',
    loadingColor : '#DA3D42',
    loadingSize : 18,
    full : false,
    show: true
  }
  constructor(props) {
    super(props)
  }
  render() {
    const rotate = () => {
      return (
        <div className={this.props.type === 'rotate' ? `brand-loading-rotate` : 'brand-loading-hidden'}
          style={
            {
              borderTopColor : this.props.loadingColor, 
              borderLeftColor : this.props.loadingColor, 
              borderBottomColor : this.props.loadingColor,
              height : this.props.loadingSize,
              width : this.props.loadingSize
            }
          }
        ></div>
      )
    }
    const triple = () => {
      return (
        <div className={this.props.type === 'triple' ? `brand-loading-triple` : 'brand-loading-hidden'}>
          <div className="brand-loading-triple-bounce1" style={{
            width : this.props.loadingSize,
            height : this.props.loadingSize,
            backgroundColor : this.props.loadingColor
          }}></div>
          <div className="brand-loading-triple-bounce2" style={{
            width : this.props.loadingSize,
            height : this.props.loadingSize,
            backgroundColor : this.props.loadingColor
          }}></div>
          <div className="brand-loading-triple-bounce3" style={{
            width : this.props.loadingSize,
            height : this.props.loadingSize,
            backgroundColor : this.props.loadingColor
          }}></div>
        </div>
      )
    }
    return (
      <div className={this.props.full ? 'brand-loading brand-loading-full-screen' : 'brand-loading'} style={{
        display : this.props.show  ? '' : 'none'
      }}>
        {this.props.type === 'triple' ? triple() : rotate()}
      </div>
    )
  }
}
export default Loading;