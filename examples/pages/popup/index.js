import React, { Component, PropTypes } from 'react';
import { Popup, Button }  from '../../../src/index'
import Options  from '../options/index'
class PopupPages extends React.Component {
  // 接收props
  constructor(props) {
    super(props)
    this.bottomClick = this.bottomClick.bind(this)
    this.topClick = this.topClick.bind(this)
    this.leftClick = this.leftClick.bind(this)
    this.rightClick = this.rightClick.bind(this)
    this.centerClick = this.centerClick.bind(this)
    this.state = {
      show: false,
      topShow: false,
      leftShow: false,
      position: 'bottom',
      options: {
        title: 'Popup',
        des: 'Popup组件',
        params:[{
          name: 'show',
          des: '显示／隐藏',
          type: 'Boolean',
          values:[
            'true',
            'false'
          ],
          default: 'false'
        }, {
          name: 'position',
          des: '控制popup弹出方向',
          type: 'String',
          values:[
            'left',
            'right',
            'top',
            'bottom',
            'center'
          ],
          default: 'bottom'
        }, {
          name: 'modal',
          des: '是否需要遮罩层',
          type: 'Boolean',
          values:[
            'true',
            'false'
          ],
          default: 'true'
        }, {
          name: 'closeOnClickModal',
          des: '点击遮罩层是否关闭popup',
          type: 'Boolean',
          values:[
            'true',
            'false'
          ],
          default: 'true'
        }]
      },
      videoShow: false,
      switch: false
    }
  }
  bottomClick () {
    let that = this
    this.setState({
      show: true,
      position: 'bottom'
    })
  }
  topClick () {
    let that = this
    this.setState({
      show: true,
      position: 'top'
    })
  }
  leftClick () {
    let that = this
    this.setState({
      show: true,
      position: 'left'
    })
  }
  centerClick () {
    let that = this
    this.setState({
      show: true,
      position: 'center'
    })
  }
  rightClick () {
    let that = this
    this.setState({
      show: true,
      position: 'right'
    })
  }
  render() {
    return (
      <div className="warp">
        <div className="title">Popup演示</div>
        <Button onClick={this.bottomClick}>向下</Button>
        <div style={{paddingTop:'20px'}}></div>
        <Button onClick={this.topClick}>向上</Button>
        <div style={{paddingTop:'20px'}}></div>
        <Button onClick={this.leftClick}>向左</Button>  
        <div style={{paddingTop:'20px'}}></div>
        <Button onClick={this.rightClick}>向右</Button>
        <div style={{paddingTop:'20px'}}></div>
        <Button onClick={this.centerClick}>中间</Button>    
        <Popup show={this.state.show} position={this.state.position} closeOnClickModal={true}>
          <div style={{width: '100%', height: '150px', textAlign: 'center', backgroundColor:'rgba(255, 255, 255, 1)', lineHeight: '150px'}}>我是内容啊</div>
        </Popup>
        <Options options={this.state.options}></Options>
      </div>
    )
  }
}
export default PopupPages;