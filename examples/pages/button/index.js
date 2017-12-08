import React, { Component, PropTypes } from 'react';
import './index.less'
import { Button }  from '../../../src/index'
import Options  from '../options/index'
class ButtonPages extends React.Component {
  // 接收props
  constructor(props) {
    super(props)
    this.clickFun = this.clickFun.bind(this);
    this.state = {
      options: {
        title: 'Button',
        des: '按钮组件',
        params:[{
          name: 'type',
          des: '按钮大小',
          type: 'String',
          values:[
            'default（默认）',
            'large',
            'small'
          ],
          default: 'default'
        }, {
          name: 'bgColor',
          des: '按钮背景色',
          type: 'String',
          values:[
            '16进制',
            'RGB',
            '颜色英文名称'
          ],
          default: '#DA3D42'
        }, {
          name: 'color',
          des: '按钮文本景色',
          type: 'String',
          values:[
            '16进制',
            'RGB',
            '颜色英文名称'
          ],
          default: '#fff'
        }, {
          name: 'loading',
          des: '按钮loading',
          type: 'Boolean',
          values:[
            'true',
            'false'
          ],
          default: 'false'
        }, {
          name: 'loadingColor',
          des: '按钮loading颜色',
          type: 'String',
          values:[
            '16进制',
            'RGB',
            '颜色英文名称'
          ],
          default: '#FFFF00'
        }, {
          name: 'loadingSize',
          des: '按钮loading大小',
          type: 'Number',
          values:[
            'number数字'
          ],
          default: '14'
        }, {
          name: 'disabled',
          des: '按钮禁用',
          type: 'Boolean',
          values:[
            'true',
            'false'
          ],
          default: 'false'
        }, {
          name: 'radius',
          des: '按钮圆角大小',
          type: 'Number',
          values:[
            'number数字'
          ],
          default: '20'
        }, {
          name: 'fontSize',
          des: '设置按钮字体大小',
          type: 'Number',
          values:[
            'number数字'
          ],
          default: '16'
        }]
      }
    }
  }
  clickFun () {
    console.log(0)
  }
  componentWillMount () {
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className="warp">
        <div className="title">type: default</div>
        <Button onClick={this.clickFun}>确定</Button>
        <div className="title">type: large</div>
        <Button type="large">确定</Button>
        <div className="title">type: small</div>
        <Button type="small" fontSize={14}>确定</Button>
        <div className="title">bgColor/color: 修改背景色和文本颜色</div>
        <Button bgColor="#FC504C" color="#000" type="large">确定</Button>
        <div className="title">loading: true</div>
        <Button loading={true}>确定</Button>
        <div className="title">radius: 修改圆角大小</div>
        <Button radius={14}>确定</Button>
        <div className="title">disable: true</div>
        <Button disabled onClick={this.clickFun}>禁用</Button>
        <Options options={this.state.options}></Options>
      </div>
    )
  }
}
export default ButtonPages;