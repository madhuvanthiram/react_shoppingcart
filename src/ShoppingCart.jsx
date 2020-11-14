import React, { Component } from "react";
import "./App.css";
import Badge from 'react-bootstrap/Badge'

import Newshopping from "./Newshopping";

class ShoppingCart extends Component {
  state = {
    count: 0,
    showModal: false,
    disabledButtons: [],
    newcart: [],
    setShowmodal:false,

    Shoppinglist: [
      {
        id: 1,
        name: "Item1",
        price: "10",
        Quantity: 0,
        inCart: false,
      },
      {
        id: 2,
        name: "Item2",
        price: "15",
        Quantity: 0,
        inCart: false,
      },

      {
        id: 3,
        name: "Item3",
        price: "26",
        Quantity: 0,
        inCart: false,
      },



    ],
  };

  AddToCart(id,index) {
   
    this.setState({ showcomp: true });
 
    this.setState({ count: this.state.count + 1 });
    const list = this.state.Shoppinglist.find((item) => item.id === id);
  
    list.inCart=true;
    const newnewlistcart = this.state.newcart.push(list);
    
    
  }

  formatCount = () => {
   
    this.setState({ count: this.state.count - 1 });
  };

  hideModal = () => {
   
    this.setState({ setShowmodal: false });
  };
  handleOpenModal=()=>{
    this.setState({ setShowmodal: true });
 
  }
  

  render() {

   const passcmp = (
      <Newshopping
        myarray={this.state.newcart}
        formatcount={this.formatCount}
        setShowmodal={this.state.setShowmodal}
        hideModal={this.hideModal}

      />
    );

    const listitems = this.state.Shoppinglist.map((row, index) => {
      return (
        <div key={row.id}>
  
           <table className="items">
             <tr>
               <td >{row.name}</td>
               <td >{row.price}SGD</td>
               <td> {row.inCart}</td>
             <td> <button className="btn btn-primary m-2" onClick={this.AddToCart.bind(this, row.id,index)}   disabled={row.inCart}>
            {row.inCart ?"Already In Cart":"Add To Cart"}
            </button></td>
             </tr>
             
           </table>
          

         

           
        
        </div>
      );
    });

    return (
      <div >
       <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
 <div className="col-md-9">
        <span  style={{ fontSize: 30 }} onClick={this.handleOpenModal} >
         <i className="fa fa-shopping-cart fa-lg m-2"> </i>
        
        </span>
        </div>
        {this.state.showcomp ? passcmp : null} 
        <div className="col-lg:20">
      
       <h1> <Badge variant="info"> {this.state.count} Items</Badge> </h1>
      </div>
        <h1>{listitems}</h1>
      </div>
    );
  }
}

export default ShoppingCart;
