import React from 'react';
import { Toast, Button }  from '../../../src/index'
import Options  from '../options/index'
class ToastPages extends React.Component {
  // 接收props
  constructor(props) {
    super(props)
    this.clickFunc = this.clickFunc.bind(this)
    this.clickFunc02 = this.clickFunc02.bind(this)
    this.clickFunc03 = this.clickFunc03.bind(this)
    this.state = {
      show: false,
      duration: 1000,
      options: {
        title: 'Toast',
        des: 'Toast组件',
        params:[{
          name: 'show',
          des: 'Toast 显示／隐藏',
          type: 'Boolean',
          values:[
            'true',
            'false'
          ],
          default: 'false'
        }, {
          name: 'content',
          des: 'Toast 显示文本',
          type: 'String',
          values:[
            '文本'
          ],
          default: '无'
        }, {
          name: 'duration',
          des: 'Toast 自动关闭的延时，单位秒',
          type: 'Number',
          values:[
            '数值',
          ],
          default: '1000（1秒）'
        },{
          name: 'onClose',
          des: 'Toast 关闭回调',
          type: 'Function',
          values:[
            'Function'
          ],
          default: '无'
        }]
      }
    }
  }
  clickFunc () {
    this.setState({
      show: true,
      duration: 1000
    })
  }
  clickFunc02 () {
    this.setState({
      show: true,
      duration: 0
    })
  }
  clickFunc03 () {
    this.setState({
      show: false,
      duration: 0
    })
  }
  render() {
    return (
      <div className="warp">
        <div className="title">Toast 显示／自动隐藏</div>
        <Button onClick={this.clickFunc}>Toast</Button>
        <div className="title">Toast 显示／ 手动隐藏(duration为0时，需要手动隐藏)</div>
        <Button onClick={this.clickFunc02}>Toast显示</Button>
        <div style={{padding: '8px 0'}}></div>
        <Button onClick={this.clickFunc03}>Toast隐藏</Button>
        <Toast content="this is Toast" show={this.state.show} duration={this.state.duration}></Toast>
        <Options options={this.state.options}></Options>
      </div>
    )
  }
}
export default ToastPages;