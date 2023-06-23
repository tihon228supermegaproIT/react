import React, { Component } from 'react'

export class Order extends Component {
  render() {
    return (
      <div className='item'>
      <img src={"./img/" + this.props.item.img} />
      <h2>{this.props.item.title}</h2>
      <p>{this.props.item.desc}</p>
  </div>
    )
  }
}

export default Order