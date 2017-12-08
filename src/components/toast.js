import React from 'react';
class Toast extends React.Component {
  static propTypes = {
    show: React.PropTypes.bool,
    content: React.PropTypes.string,
    duration: React.PropTypes.number,
    onClose: React.PropTypes.func
  }
  static defaultProps = {
    content: '',
    show: false,
    duration: 1000,
    onClose: function () {
      console.log('close')
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }
  componentDidMount () {
    this.setState({
      show: this.props.show
    })
  }
  componentWillReceiveProps (props) {
    this.setState({
      show: props.show
    })
    if (props.show === false) {
      this.props.onClose()
    }
    if (props.duration !==0) {
      setTimeout( () => {
        this.setState({
          show: false
        }, () => {
          this.props.onClose()
        })
      }, props.duration);
    }
  }
  render() {
    return (
      <div className="brand-toast" style={{display: this.state.show ? 'block' : 'none'}}>{this.props.content}</div>
    )
  }
}
export default Toast;