import React, { Component, PropTypes } from 'react';
import { Slider }  from '../../../src/index'
import Options  from '../options/index'
class SliderPages extends React.Component {
  // 接收props
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.state = {
      num: 6000,
      options: {
        title: 'Slider',
        des: '滑动条组件',
        params:[{
          name: 'min',
          des: '最小值',
          type: 'Number',
          values:[
            '数值'
          ],
          default: '1000'
        }, {
          name: 'max',
          des: '最大值　',
          type: 'Number',
          values:[
            '数值',
          ],
          default: '10000'
        }, {
          name: 'step',
          des: '步长，取值必须大于 0，并且可被 (max - min) 整除',
          type: 'Number',
          values:[
            '数值'
          ],
          default: '1000'
        }, {
          name: 'value',
          des: '设置当前取值',
          type: 'Number',
          values:[
            '数值'
          ],
          default: '6000'
        }, {
          name: 'onChange',
          des: '当 Slider 的值发生改变时，会触发 onChange 事件，并把改变后的值作为参数传入。',
          type: 'Function',
          values:[
            'Function'
          ],
          default: 'Function'
        }, {
          name: 'trackStyle',
          des: '选中部分滑动条的样式',
          type: 'Object',
          values:[
            'Object'
          ],
          default: 'Object'
        }, {
          name: 'railStyle',
          des: '未选中部分的样式',
          type: 'Object',
          values:[
            'Object'
          ],
          default: 'Object'
        }, {
          name: 'handleStyle',
          des: '滑块的样式',
          type: 'Object',
          values:[
            'Object'
          ],
          default: 'Object'
        }]
      }
    }
  }
  onChange (e) {
    this.setState({
      num: e
    })
  }
  render() {
    return (
      <div className="warp">
        <div className="title">Slider 区间：1000-10000</div>
        <div style={{padding: '10px 0px', fontWeight:'bold'}}>当前选中值：{this.state.num}</div>
        <Slider min={1000} max={10000} step={1000} onChange={this.onChange} value={this.state.num}></Slider>
        <Options options={this.state.options}></Options>
      </div>
    )
  }
}
export default SliderPages;