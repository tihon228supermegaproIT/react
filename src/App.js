import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Items from "./Items";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: "Стул серый",
          img: "Grey.jpeg",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          category: "charis",
          price: '49.99'
        },
        {
          id: 2,
          title: "Стол",
          img: "tables.jpg",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          category: "tables",
          price: '149.99'
        },
        {
          id: 3,
          title: "Диван",
          img: "bed.jpg",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          category: "sofa",
          price: '549.99'
        },
        {
          id: 4,
          title: "Лампа",
          img: "light.webp",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          category: "Light",
          price: '25.00'
        },
        {
          id: 5,
          title: "Стул белый",
          img: "wight.webp",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          category: "Chairgrey",
          price: '149.09'
        },
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
  }
  render() {

    return (
      <div className="wrapper">
     <Header orders={this.state.orders}/>
     <Items items={this.state.items} onAdd={this.addToOrder}/>
     <Footer/>
  </div>
  );
}
  addToOrder(item){
 this.setState({orders: [...this.state.orders, item] })
  }
}

export default App;
