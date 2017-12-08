import React from 'react';
class Swiper extends React.Component {
  static propTypes = {
    width: React.PropTypes.string,
    height: React.PropTypes.string,
    autoSlide: React.PropTypes.bool,
    slideSpeed: React.PropTypes.number,
    dotStyle: React.PropTypes.object,
    dotActiveStyle: React.PropTypes.object
  }
  static defaultProps = {
    width: '100%',
    height: 'auto',
    autoSlide: true,
    slideSpeed: 2000,
    dotStyle: {
      border: '1px solid #fff'
    },
    dotActiveStyle: {
      border: 'none',
      background: '#fff'
    }
  }
  constructor(props) {
    super(props);
    this.autoSlideFun = this.autoSlideFun.bind(this)
    this.touchStart = this.touchStart.bind(this)
    this.touchEnd = this.touchEnd.bind(this)
    this.touchMove = this.touchMove.bind(this)
    this.slideFun = this.slideFun.bind(this)
    this.scrollFun = this.scrollFun.bind(this)
    this.autoSlideFun = this.autoSlideFun.bind(this)
    this.stopSlideFun = this.stopSlideFun.bind(this)
    this.state = {
      baseWidth: document.documentElement.clientWidth, //宽度
      startX: "",
      curX: "",
      moveX: "",
      time: 0,
      distance: 0, //移动距离
      swiper: 30, //滑动滚动触发距离
      index: 0,
      length: this.props.children.length
    }
  }
  touchStart (e) {
		this.setState({
			time: 0,
			startX: e.touches[0].pageX
		})
  }
  touchMove (e) {
		e.preventDefault()
		if(this.props.autoSlide) {
			this.stopSlideFun();
		}
		let _curX = e.touches[0].pageX
		let _moveX = _curX - this.state.startX
		let _distance = -(this.state.index * this.state.baseWidth - _moveX)

		this.setState({
			curX: _curX,
			moveX: _moveX,
			time: 0,
			distance: _distance
		})
  }
  touchEnd (e) {
		if(Math.abs(this.state.moveX) <= this.state.swiper) {
			this.slideFun('', '.5')
		} else {
			if(this.state.moveX > this.state.swiper) {
				this.slideFun('prev', '.5')
			} else if(Math.abs(this.state.moveX) > this.state.swiper) {
				this.slideFun('next', '.5')
			}
		}
		this.setState({
			moveX: 0
		})
  }
  /**
	 * index控制
	 * @param  {num} go   指定index数值
	 * @param  {num} time transition时间
	 */
	slideFun (go, time) {
		let _index = this.state.index
		if(typeof go === "number") {
			_index = go
		} else if(go == "next") {
			_index ++
		} else if(go == "prev") {
			_index --
		}

		if(_index >= this.state.length) {
      _index = 0;
    } else if(_index < 0) {
      _index = this.state.length - 1;
    }
    this.scrollFun(_index, time)
    this.setState({
      index: _index
    })
  }
  /**
	 * 滚动函数
	 * @param  {num} index 指定滚动的index
	 * @param  {num} time  transition的时间
	 */
	scrollFun (index, time) {
		this.setState({
			time: time,
			distance: -(index * this.state.baseWidth)
		})
  }
  autoSlideFun() {
    let that = this
		if(this.props.autoSlide) {
			that.stopSlideFun()
			window.SlideInter = setInterval(() => {
				that.slideFun('next', '.5')
			}, that.props.slideSpeed)
		}
  }
  stopSlideFun() {
		clearInterval(window.SlideInter)
	}
  componentDidMount () {
    // console.log(this.props.children)
    setTimeout( () => {
      this.autoSlideFun();
    },300)
  }
  componentWillUnmount (props) {
    // 清楚计时器
    this.stopSlideFun()
  }
  render() {
		const opts = this.props.children
    let obj = this.props.children
		const slideStyle = {
			width: (document.documentElement.clientWidth * (opts.length + 2)) + "px",
			WebkitTransform: 'translate3d(' + this.state.distance + "px,0,0)",
			transform: 'translate3d(' + this.state.distance + "px,0,0)",
			WebkitTranstion: "all " + this.state.time + "s",
			transition: "all " + this.state.time + "s"
		}
    const warpStyle = {
      width: this.props.width,
      height: this.props.height
    }
		const dots = opts.map((item, i) => {
			return (
				<Dots key={i} dotStyle={this.props.dotStyle} dotActiveStyle={this.props.dotActiveStyle} active={(this.state.index) == i ? 'active' : ''} />
			)
    })
    const children = obj.map( (item) => {
      return React.cloneElement(item, { style: {float:'left', width: document.documentElement.clientWidth + "px"} })
    })
		return (
			<div className="brand-swiper-slide-wrap" style={warpStyle}>
				<div className="brand-swiper-slide-ul" style={slideStyle} onTouchStart={this.touchStart} onTouchMove={this.touchMove} onTouchEnd={this.touchEnd} onTransitionEnd={this.autoSlideFun}>
				  {children}
				</div>
				<div className="brand-swiper-dots-wrap">
					{dots}
				</div>
			</div>
		);
	}
}
class Dots extends React.Component {
	render() {
    const styles = this.props.active === 'active' ? this.props.dotActiveStyle : this.props.dotStyle
		return (
			<span className={`brand-swiper-dots`} style={styles}></span>
		)
	}
}
export default Swiper;