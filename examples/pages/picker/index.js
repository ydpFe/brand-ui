import React from 'react';
import { Picker, Button }  from '../../../src/index'
import Options  from '../options/index'
import { provins, citys, areas } from './address';
import './index.less'
class PickerPages extends React.Component {
  // 接收props
  constructor(props) {
    super(props)
    this.pickerChange = this.pickerChange.bind(this);
    this.provinsChange = this.provinsChange.bind(this)
    this.citysChange = this.citysChange.bind(this)
    this.areasChange = this.areasChange.bind(this)
    this.state = {
      data: {
        list:[
          {name: 'h5', value: 0},
          {name: 'js', value: 1},
          {name: 'css', value: 2},
          {name: 'java', value: 3},
          {name: 'ps', value: 4},
          {name: 'ui', value: 5},
          {name: 'php', value: 6},
          {name: 'ios', value: 7},
          {name: 'android', value: 8}
        ],
        defaultValue: {name: 'java', value: 3},
      },
      provins: {
        list: provins,
        defaultValue: '北京市',
      },
      citys: {
        list: citys['北京市'],
        defaultValue: '北京市',
      },
      areas: {
        list: areas['北京市'],
        defaultValue: '西城区',
      },
      options: {
        title: 'Picker',
        des: 'picker组件',
        params:[{
          name: 'width',
          des: 'picker宽度',
          type: 'String',
          values:[
            '数值 + px',
            '数值 + rem',
            '数值 + %'
          ],
          default: '100%'
        }, {
          name: 'height',
          des: 'picker高度',
          type: 'String',
          values:[
            '数值 + px',
            '数值 + rem',
            '数值 + %'
          ],
          default: '180px'
        }, {
          name: 'float',
          des: '设置picker浮动',
          type: 'String',
          values:[
            'left',
            'right',
            'none',
            'inherit'
          ],
          default: 'none'
        },{
          name: 'data',
          des: '数据',
          type: 'Object',
          values:[
            `list:[{name: 'h5', value: 0}.......]// list为数据源`,
            `defaultValue: {name: 'java', value: 3}// defaultValue为默认选中值`
          ],
          default: '无'
        }, {
          name: 'selectKey',
          des: '设置list数据中的key值',
          type: 'Function',
          values:[
            '例如：selectKey={(item) => { return item.name}}'
          ],
          default: '无'
        }, {
          name: 'onChange',
          des: '返回当前选中的对象',
          type: 'Function',
          values:[
            `onChange (e) {console.log(e)}`
          ],
          default: '无'
        }]
      }
    }
  }
  pickerChange (e) {
    console.log(e)
  }
  provinsChange (provin) {
    console.log(provin)
    console.log(citys[provin][0])
    console.log(areas[citys[provin][0]][0])
    this.setState({
      provins: {
        list: provins,
        defaultValue: provin,
      },
      citys: {
        list: citys[provin],
        defaultValue: citys[provin][0],
      },
      areas: {
        list: areas[citys[provin][0]],
        defaultValue: areas[citys[provin][0]][0],
      }
    })
  }

  citysChange(city) {
    console.log(city)
    this.setState({
      areas: {
        list: areas[city],
        defaultValue: areas[city][0],
      }
    })
  }

  areasChange(area) {
    console.log(area)
  }
  componentWillMount () {
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className="warp">
        <div className="title">picker: 单项选择</div>
        <Picker data={this.state.data} onChange={this.pickerChange} selectKey={(item) => { return item.name}}></Picker>
        <div className="title">picker: 多项选择</div>
        <div>
          <Picker data={this.state.provins} width={'33%'} float={'left'} onChange={this.provinsChange} selectKey={(item) => { return item}}></Picker>
          <Picker data={this.state.citys} width={'33%'} float={'left'} onChange={this.citysChange} selectKey={(item) => { return item}}></Picker>
          <Picker data={this.state.areas} width={'34%'} float={'left'} onChange={this.areasChange} selectKey={(item) => { return item}}></Picker>
        </div>
        <Options options={this.state.options}></Options>
      </div>
    )
  }
}
export default PickerPages;