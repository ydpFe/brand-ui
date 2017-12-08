import React, { Component, PropTypes } from 'react';
import { Loading, Button }  from '../../../src/index'
import Options  from '../options/index'
class LoadingPages extends React.Component {
  // 接收props
  constructor(props) {
    super(props)
    this.clickFun = this.clickFun.bind(this);
    this.state = {
      options: {
        title: 'Loading',
        des: 'loading组件',
        params:[{
          name: 'type',
          des: 'loading类型',
          type: 'String',
          values:[
            'rotate（默认）',
            'triple'
          ],
          default: 'rotate'
        }, {
          name: 'loadingColor',
          des: 'loading颜色',
          type: 'String',
          values:[
            '16进制',
            'RGB',
            '颜色英文名称'
          ],
          default: '#DA3D42'
        }, {
          name: 'loadingSize',
          des: 'loading大小',
          type: 'Number',
          values:[
            'number数字',
          ],
          default: '18'
        }, {
          name: 'full',
          des: '是否全屏',
          type: 'Boolean',
          values:[
            'true',
            'false'
          ],
          default: 'false'
        }, {
          name: 'show',
          des: '是否展示',
          type: 'Boolean',
          values:[
            'true',
            'false'
          ],
          default: 'true'
        }]
      },
      fullState: false,
      showState: false
    }
  }
  clickFun () {
		let that = this
		that.setState({
			fullState: true,
			showState: true
		})
    setTimeout( () => {
    	that.setState({
				fullState: false,
				showState: false
			})
    }, 1000)
  }
  render() {
    return (
      <div className="warp">
        <div className="title">type: rotate</div>
        <Loading></Loading>
        <div className="title">type: triple</div>
        <Loading type={'triple'}></Loading>
				<div className="title">loadingColor: 修改颜色</div>
        <Loading loadingColor={'#FECD51'}></Loading>
				<div className="title">loadingSize: 修改大小</div>
        <Loading type={'triple'} loadingColor={'#FECD51'} loadingSize={12}></Loading>
        <div className="title">full: true And show: true </div>
        <Button onClick={this.clickFun}>点击查看效果</Button>
        <Loading type={'triple'} full={this.state.fullState} show={this.state.showState}></Loading>
        <Options options={this.state.options}></Options>
      </div>
    )
  }
}
export default LoadingPages;