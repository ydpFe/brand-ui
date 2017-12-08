import React from 'react';
class Video extends React.Component {
  static propTypes = {
    src: React.PropTypes.string.isRequired,
    show: React.PropTypes.bool,
    endFunc: React.PropTypes.func,
    switch: React.PropTypes.bool,
    width: React.PropTypes.string,
    height: React.PropTypes.string,
    poster: React.PropTypes.string
  }
  static defaultProps = {
    show: true,
    switch: false,
    width: '100%',
    height: '100%',
    full: false
  }
  constructor(props) {
    super(props);
    this.state = {
      player: ''
    }
  }
  componentDidMount () {
    let that = this
    this.setState({
      player : document.getElementById('video')
    }, () => {
      this.state.player.setAttribute('webkit-playsinline', 'true');
      this.state.player.setAttribute('playsinline', 'true')
      this.state.player.setAttribute('x-webkit-airplay', 'allow')
      this.state.player.setAttribute('x5-video-player-type', 'h5')
      this.state.player.setAttribute('x5-video-player-fullscreen', 'true')
      this.state.player.setAttribute('x5-video-orientation', 'portrait')
      // 视频播放结束
      this.state.player.onended = function() {
        console.log(that.props)
        console.log(JSON.stringify(that.props.endFunc))
        console.log(JSON.stringify(that.props.endFunc()))
        that.props.endFunc();
      }
    })
  }
  componentWillReceiveProps (props) {
    if (props.switch) {
      this.state.player.play();
    } else {
      this.state.player.pause();
    }
  }
  render() {
    return (
      <video
        id="video"
        preload="auto"
        poster={this.props.poster}
        style={{
          objectFit: 'fill', 
          display: this.props.show ? 'block' : 'none',
          width: this.props.width,
          height: this.props.height,
          position: this.props.full ? 'fixed' : 'absolute',
          top: '0',
          left: '0'
        }}>
          <source src={this.props.src} type="video/mp4"/>
      </video>
    )
  }
}
export default Video;