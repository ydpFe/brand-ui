import React from 'react';
class Slider extends React.Component {
  static propTypes = {
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    step: React.PropTypes.number,
    value: React.PropTypes.number,
    onChange: React.PropTypes.func,
    trackStyle: React.PropTypes.object,
    railStyle: React.PropTypes.object,
    handleStyle: React.PropTypes.object
  }
  static defaultProps = {
    min: 1000,
    max: 10000,
    step: 1000,
    value: 6000,
    handleStyle: {},
    trackStyle: {},
    handleStyle: {},
    onChange: function (e) {
      console.log(e)
    }
  }
  constructor(props) {
    super(props)
    this.handleTouchStart = this.handleTouchStart.bind(this)
    this.handleTouchMove = this.handleTouchMove.bind(this)
    this.state = {
      width: '0%',
      minX: '',
      maxX: '',
      slider: '',
      stepMap: []
    }
  }
  handleTouchStart (e) {
    e.preventDefault();
    let width = ((e.changedTouches[0].pageX - this.state.minX) / this.state.slider) * 100 //比例
    if (width > 100) {
      width = 100
    }
    if (width < 5) {
      width = 0
    }
    for (let i = 0; i < this.state.stepMap.length; i++) {
      if (width >= this.state.stepMap[i].min && width <= this.state.stepMap[i].max) {
        this.setState({
          width: this.state.stepMap[i].max + '%'
        })
        this.props.onChange(this.state.stepMap[i].value)
        return true
      }
    }
  }
  handleTouchMove (e) {
    e.preventDefault();
    let width = ((e.changedTouches[0].pageX - this.state.minX) / this.state.slider) * 100 //比例
    if (width > 100) {
      width = 100
    }
    if (width < 5) {
      width = 0
    }
    for (let i = 0; i < this.state.stepMap.length; i++) {
      if (width >= this.state.stepMap[i].min && width <= this.state.stepMap[i].max) {
        this.setState({
          width: this.state.stepMap[i].max + '%'
        })
        this.props.onChange(this.state.stepMap[i].value)
        return true
      }
    }
  }
  componentDidMount () {
    let width = this.props.max - this.props.min
    let value = this.props.value - this.props.min
    let slider = document.getElementById('slider').clientWidth
    let minX = (document.documentElement.clientWidth - slider) / 2
    let maxX = slider + minX
    this.setState({
      minX: minX,
      maxX: maxX,
      slider: slider,
      width: (value / width) * 100 + '%'
    }, () => {
      this.props.onChange(this.props.value)
    })
    let aa = (this.props.max - this.props.min) / this.props.step //9
    let bb = 100 / aa // 每个step占比
    let obj = []
    for (let i = 0; i <= aa; i++) {
      let num = i*this.props.step
      obj[i]={
        min : bb*(i-1) < 0 ? 0 : bb*(i-1),
        max : bb*i,
        value : this.props.min + (this.props.step * i)
      }
    }
    this.setState({
      stepMap : obj
    })
  }
  render() {
    return (
      <div className="brand-slider" 
        onTouchStart={this.handleTouchStart.bind(this)}
        onTouchMove={this.handleTouchMove.bind(this)}
        id="slider">
        <div className="brand-slider-rail" style={this.props.railStyle}></div>
        <div className="brand-slider-track" style={Object.assign({ width: this.state.width}, this.props.trackStyle)}></div>
        <div className="brand-slider-handle" style={Object.assign({ left: this.state.width}, this.props.handleStyle)}></div>
      </div>
    )
  }
}
export default Slider;