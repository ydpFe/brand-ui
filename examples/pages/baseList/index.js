import React, { Component, PropTypes } from 'react';
import { BaseList }  from '../../../src/index'
import Options  from '../options/index'
class ButtonPages extends React.Component {
  // 接收props
  constructor(props) {
    super(props)
    this.clickFunc = this.clickFunc.bind(this)
    this.state = {
      options: {
        title: 'baseList',
        des: '基础列表组件',
        params:[{
          name: 'title',
          des: '左侧文字内容',
          type: 'String',
          values:[
            '文字'
          ],
          default: '无'
        }, {
          name: 'size',
          des: '左侧文本大小',
          type: 'Number',
          values:[
            '数字'
          ],
          default: '14'
        }, {
          name: 'color',
          des: '左侧文本颜色',
          type: 'String',
          values:[
            '16进制',
            'RGB',
            '颜色英文名称'
          ],
          default: '#000'
        }, {
          name: 'border',
          des: '是否显示0.5px实线',
          type: 'Boolean',
          values:[
            'true',
            'false'
          ],
          default: 'true'
        }]
      }
    }
  }
  clickFunc () {
    console.log('11')
  }
  componentWillMount () {
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className="warp">
        <div className="title">title: 左侧内容文字</div>
        <BaseList title="左侧" onClick={this.clickFunc}><div>这是右侧</div></BaseList>
        <div className="title">size: 左侧内容文字大小</div>
        <BaseList title="左侧" size={12}><div>这是右侧</div></BaseList>
        <div className="title">color: 左侧内容文字颜色</div>
        <BaseList title="左侧" size={14} color={'#E24329'}>
          <img src="https://img.fqgj.net/youjie/1.2/creditcard/ic_jibenxxrz@3x.png" style={{width: '20px',verticalAlign: 'middle'}}/>
        </BaseList>
        <div className="title">border: 是否取消0.5px实线</div>
        <BaseList title="左侧" size={14} color={'#E24329'} border={false}>
          <img src="https://img.fqgj.net/youjie/1.2/creditcard/ic_jibenxxrz@3x.png" style={{width: '20px',verticalAlign: 'middle'}}/>
        </BaseList>
        <Options options={this.state.options}></Options>
      </div>
    )
  }
}
export default ButtonPages;