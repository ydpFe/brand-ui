import React, { Component, PropTypes } from 'react';
import { Swiper }  from '../../../src/index'
import Options  from '../options/index'
class SwiperPages extends React.Component {
  // 接收props
  constructor(props) {
    super(props)
    this.bannerClick = this.bannerClick.bind(this)
    this.state = {
      opts: [
        {
        src: 'https://img1.360buyimg.com/da/jfs/t11134/245/2426789804/292425/d240af92/5a17b93fN5280b9a8.jpg',
        option: {
          url: 'https://www.baidu.com?id=1',
          sdk: 'SXX_openaccount_SHOW',
          params: {}
        }
      },{
        src: 'https://m.360buyimg.com/mobilecms/s1125x549_jfs/t13168/60/506346818/98058/803af078/5a0d67e6Nd6408657.jpg!q70.jpg',
        option: {
          url: 'https://www.baidu.com?id=2',
          sdk: 'SXX_openaccount_SHOW',
          params: {}
        }
      },{
        src: 'https://m.360buyimg.com/mobilecms/s1125x549_jfs/t11356/33/2420861373/163944/55b53dfb/5a178becN73be4577.jpg!q70.jpg',
        option: {
          url: 'https://www.baidu.com?id=3',
          sdk: 'SXX_openaccount_SHOW',
          params: {}
        }
      }],
      options: {
        title: 'Swiper',
        des: '轮播组件',
        params:[{
          name: 'width',
          des: 'swiper宽度',
          type: 'String',
          values:[
            '数值 + px',
            '数值 + rem',
            '数值 + %'
          ],
          default: '100%'
        }, {
          name: 'height',
          des: 'swiper高度',
          type: 'String',
          values:[
            '数值 + px',
            '数值 + rem',
            '数值 + %',
            'auto'
          ],
          default: 'auto'
        }, {
          name: 'autoSlide',
          des: '是否开启自动轮播',
          type: 'Boolean',
          values:[
            'true',
            'false'
          ],
          default: 'true'
        }, {
          name: 'slideSpeed',
          des: 'swiper轮播速度控制',
          type: 'Number',
          values:[
            '数值'
          ],
          default: '2000（2秒）'
        }, {
          name: 'dotStyle',
          des: '指示点样式',
          type: 'Object',
          values:[
            '{key : value}'
          ],
          default: '{border: 1px solid #fff}'
        }, {
          name: 'dotActiveStyle',
          des: '当前激活的指示点样式',
          type: 'Object',
          values:[
            '{key : value}'
          ],
          default: '{border: none, background: #fff}'
        }]
      }
    }
  }
  bannerClick (item) {
    console.log(item)
    // 如果配置神策统计则触发
    if (item.sdk !== '') {
      if (JSON.stringify(item.params) === '{}') {
        console.log('jinlaile')
        // sensorsTrack(item.sdk)
      } else {
        console.log('jinlaile02')
        // sensorsTrack(item.sdk, item.params)
      }
    }
    if (item.url !== '') {
      // window.location.href = item.url
    }
  }
  render() {
    const banner = this.state.opts.map( (item, index) => {
      return (
        <img src={item.src} key={index} onClick={ () => { this.bannerClick(item.option)}}/>
      )
    })
    return (
      <div className="warp">
        <div className="title">Swiper演示</div>
        <Swiper autoSlide={true} dotActiveStyle={{background:'#E24329', border:'1px #E24329 solid', width:'6px',height:'6px'}}>
          {banner}
        </Swiper>
        <Options options={this.state.options}></Options>
      </div>
    )
  }
}
export default SwiperPages;