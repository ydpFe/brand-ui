import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'
import './index.less'
import '../../../lib/brandui.css'
class HomePage extends React.Component {
  // 接收props
  constructor(props) {
    super(props)
    this.state = {
      page: [
        {
          name: 'Button',
          path: '/Button'
        },
        {
          name: 'Loading',
          path: '/Loading'
        },
        {
          name: 'Video',
          path: '/Video'
        },
        {
          name: 'Picker',
          path: '/Picker'
        },
        {
          name: 'Popup',
          path: '/Popup'
        },
        {
          name: 'BaseList',
          path: '/BaseList'
        },
        {
          name: 'Swiper',
          path: '/Swiper'
        },
        {
          name: 'Toast',
          path: '/Toast'
        },
        {
          name: 'Tab',
          path: '/Tab'
        },
        {
          name: 'Slider',
          path: '/Slider'
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <div className="homePageTitle">brand-ui</div>
        {
          this.state.page.map( (item, index) => {
            return <Link to={item.path} key={index} className="homePageBox">{item.name}</Link>
          })
        }
      </div>
    )
  }
}
export default HomePage;