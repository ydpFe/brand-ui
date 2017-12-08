import React, { Component, PropTypes } from 'react';
class Options extends React.Component {
  static propTypes = {
    options : React.PropTypes.object,
  }
  static defaultProps = {
    options: {
      title: '暂无props',
      des: '请传入options参数',
      params:[]
    },
  }
  // 接收props
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <div className="componentTitle">{this.props.options.title}</div>
        <div className="componentDes">{this.props.options.des}</div>
        <div className="componentProps">Props</div>
        {
          this.props.options.params.map( (item, index) => {
            return (
              <div key={index}>
                <div className="componentPropsName">{item.name}</div>
                <p className="componentPropsDes">说明：{item.des}</p>
                <p className="componentPropsType">类型：{item.type}</p>
                <p className="componentPropsType">可选值：</p>
                <ul className="componentPropsUl">
                  {item.values.map( (data, index) => {
                    return (
                      <li key={index}>{data}</li>
                    )
                  })}
                </ul>
                <p className="componentPropsDefault">默认值：{item.default}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}
export default Options;