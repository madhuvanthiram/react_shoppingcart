import React, { Component } from "react";
import image1 from "./pic1.jpg";
import image2 from "./pic2.png";
import image3 from "./pic3.jpg";
import "./Shopping.css";
import Badge from 'react-bootstrap/Badge'

import Newshopping from "./Newshopping";

class ShoppingCart extends Component {
  state = {
    count: 0,
    showModal: false,
    disabledButtons: [],
    newcart: [],
    showcomp:false,

    Shoppinglist: [
      {
        id: 1,
        img: image1,
        name: "Item1",
        price: "10",
        Quantity: 0,
        inCart: false,
      },
      {
        id: 2,
        img: image2,
        name: "Item2",
        price: "15",
        Quantity: 0,
        inCart: false,
      },

      {
        id: 3,
        img:image3,
        name: "Item3",
        price: "26",
        Quantity: 0,
        inCart: false,
      },



    ],
  };

  AddToCart(id,index) {
    console.log("inside addto");
    this.setState({ showcomp: true });
    console.log(this.state.showcomp);
    this.setState({ count: this.state.count + 1 });
    const list = this.state.Shoppinglist.find((item) => item.id === id);
    console.log(list.inCart);
    list.inCart=true;
    const newnewlistcart = this.state.newcart.push(list);
    
    
  }

  formatCount = () => {
    console.log("inside format"); 
    this.setState({ count: this.state.count - 1 });
  };

  render() {

   const passcmp = (
      <Newshopping
        myarray={this.state.newcart}
        formatcount={this.formatCount}
      />
    );

    const listitems = this.state.Shoppinglist.map((row, index) => {
      return (
        <div key={row.id}>
  
           <table className="items">
             <tr>
               <td>{row.name}</td>
               <td>{row.price}SGD</td>
               <td>{row.inCart}</td>
               <td>   <button className="btn btn-primary m-2" onClick={this.AddToCart.bind(this, row.id,index)}   disabled={row.inCart}>
            {row.inCart ?"Already In Cart":"Add To Cart"}
            </button></td>
             </tr>
             
           </table>
          

         

           
        
        </div>
      );
    });

    return (
      <div >
     
        {this.state.showcomp ? passcmp : null}
        <div className="col-lg:20">
       {this.state.count===0?
   <h1> <Badge variant="info"> 0 Item</Badge> </h1>: <h2><Badge variant="primary">{this.state.count} Items</Badge></h2>}
    
      </div>
        <h1>{listitems}</h1>
      </div>
    );
  }
}

export default ShoppingCart;
