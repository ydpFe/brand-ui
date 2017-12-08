import React, { Component, PropTypes } from 'react';
import { Video, Button }  from '../../../src/index'
import Options  from '../options/index'
class VideoPages extends React.Component {
  // 接收props
  constructor(props) {
    super(props)
    this.videoFunc = this.videoFunc.bind(this);
    this.state = {
      options: {
        title: 'Video',
        des: 'Video组件',
        params:[{
          name: 'src',
          des: 'video资源地址',
          type: 'String',
          values:[
            'http资源地址',
          ],
          default: '无'
        }, {
          name: 'show',
          des: '控制video显示隐藏',
          type: 'Boolean',
          values:[
            'true',
            'false'
          ],
          default: 'true'
        }, {
          name: 'poster',
          des: '设置video封面',
          type: 'String',
          values:[
            'http资源地址',
          ],
          default: '无'
        },{
          name: 'switch',
          des: '控制video播放和暂停',
          type: 'Boolean',
          values:[
            'true',
            'false'
          ],
          default: 'false'
        }, {
          name: 'endFunc',
          des: 'video播放结束事件',
          type: 'Function',
          values:[
            '无'
          ],
          default: '无'
        },{
          name: 'width',
          des: '控制video宽度',
          type: 'String',
          values:[
            '数值 + px',
            '数值 + %',
            '数值 + rem'
          ],
          default: '100%'
        }, {
          name: 'height',
          des: '控制video高度',
          type: 'String',
          values:[
              '数值 + px',
              '数值 + %',
              '数值 + rem'
          ],
          default: '100%'
        }]
      },
      videoShow: false,
      switch: false
    }
  }
  videoFunc () {
    this.setState({
      videoShow: true,
      switch: true
    })
    setTimeout( () => {
      this.setState({
        videoShow: false,
        switch: false
      })
    }, 4000)
  }
  render() {
    return (
      <div className="warp">
        <div className="title">video演示</div>
        <Button onClick={this.videoFunc}>demo演示，4秒后关闭</Button>
        <Video
          src={'https://www.fqgj.net/20171122/720.mp4'}
          poster={'https://www.fqgj.net/20171122/kaiping.jpg'}
          show={this.state.videoShow}
          switch={this.state.switch}
        ></Video>
        <Options options={this.state.options}></Options>
      </div>
    )
  }
}
export default VideoPages;