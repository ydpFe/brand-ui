import React from 'react';
import { Tab }  from '../../../src/index'
import Options  from '../options/index'
class TabPages extends React.Component {
  // 接收props
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.state = {
      data:[
        { title: '个人信息' },
        { title: '资金收入' },
        { title: '借款超市' }
      ],
      options: {
        title: 'Tab',
        des: 'Tab组件',
        params:[{
          name: 'data',
          des: 'Tab数据源',
          type: 'Array',
          values:[
            `[
              { title: '个人信息' },
              { title: '资金收入' },
              { title: '借款超市' }
            ]`
          ],
          default: '无'
        }, {
          name: 'index',
          des: 'Tab当前选中index',
          type: 'Number',
          values:[
            '数值'
          ],
          default: '0'
        }, {
          name: 'color',
          des: 'Tab 选中颜色',
          type: 'String',
          values:[
            '16进制',
            'RGB',
            '颜色英文名称'
          ],
          default: '#E24329'
        },{
          name: 'size',
          des: 'Tab字体大小',
          type: 'Number',
          values:[
            '数值'
          ],
          default: '14'
        }, {
          name: 'onChange',
          des: 'Tab切换触发onChange事件，并返回当前对象和index值',
          type: 'Function',
          values:[
            'Function'
          ],
          default: '无'
        }]
      }
    }
  }
  onChange (item, index) {
    console.log(item)
    console.log(index)
  }
  render() {
    return (
      <div className="warp">
        <div className="title">Tab 演示</div>
        <Tab data={this.state.data} index={0} onChange={this.onChange} size={14}></Tab>
        <Options options={this.state.options}></Options>
      </div>
    )
  }
}
export default TabPages;