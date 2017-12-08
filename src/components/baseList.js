import React from 'react';
class BaseList extends React.Component {
  static propTypes = {
    title : React.PropTypes.string,
    size : React.PropTypes.number,
    color : React.PropTypes.string,
    onClick: React.PropTypes.func,
    border: React.PropTypes.bool,
  }
  static defaultProps = {
    title: '',
    border: true
  }
  constructor(props) {
    super(props)
    this.clickFunc = this.clickFunc.bind(this)
  }
  clickFunc () {
    if (this.props.onClick) {
      this.props.onClick()
    }
  }
  render() {
    return (
      <div className={`brand-baselist ${this.props.border ? 'brand-baselist-border' : ''}`} onClick={this.clickFunc}>
        <span className="brand-baselist-title" 
          style={{ fontSize: this.props.size, color: this.props.color}}>
          {this.props.title}
        </span>
        <span className="brand-baselist-children">{this.props.children}</span>
      </div>
    )
  }
}
export default BaseList;