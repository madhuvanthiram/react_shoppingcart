import React, { Component} from "react";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import "./App.css";
import Badge from 'react-bootstrap/Badge'



class Newshopping extends Component {

state = {
   // setShow: false,
    showcart: false,
    Amounttopay:0,
 

  };
  
  handleCloseModal() {
  
    
    this.props.hideModal();
  
  }

 

  handleClickIncrement(index) {
   
    const listitemcart = this.props.myarray;

     listitemcart[index].Quantity += 1;
   
    
    this.setState((state) => {
      return { myarray: listitemcart };


      
    });
  }

  handledelete(index) {
   
 const deletecart = this.props.myarray;

 deletecart[index].inCart=false;
 deletecart[index].Quantity=0;
 deletecart.splice(index, 1);
 
    this.props.formatcount();
  
    this.setState((state) => {
      return { myarray: deletecart };
    });
  }


 



  handleClickDecrement(index) {
   
    const listitemcart = this.props.myarray;
if(listitemcart[index].Quantity>0)
{
    listitemcart[index].Quantity -= 1;
}


    this.setState((state) => {
      return { myarray: listitemcart };
    });
  }





  render() {
   

   
    const { myarray } = this.props;
    const {setShowmodal}=this.props;
   
  
    let amountToPay = 0;
    for (let i=0; i<this.props.myarray.length; i++) {
      amountToPay += this.props.myarray[i].price *  this.props.myarray[i].Quantity;
    }
 

    const newmodal = myarray.map((item, index) => {
      return (
        <div key={item.id}>

          <table>
           
            <tr>
             
             
             
              <td>{item.name}</td>
              <td>{item.price} S$</td>
              <td>
                <button className="btn btn-secondary" onClick={this.handleClickIncrement.bind(this, index)}>
                <i className="fa fa-plus-circle" aria-hidden="true" />
                </button>
              </td>
              <td>{item.Quantity}</td>


              <td>
                <button  className="btn btn-info m-2" onClick={this.handleClickDecrement.bind(this, index)}>
                <i className="fa fa-minus-circle" aria-hidden="true" />
                </button>
              </td>
              <td>Amount</td>
              <td>{item.price*item.Quantity }SGD</td>
            
              <td>
               
                <link
                  rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                ></link>
                <span style={{ fontSize: 12 }} className="btn btn-danger" onClick={this.handledelete.bind(this, index)}>
                  <i className="fa fa-trash-o" aria-hidden="true"/>
                </span> 
               
              </td>
            </tr>
          </table>
        </div>
      );
    });

    return (
    
         <div>

        <Modal
  
          show={setShowmodal}
         dialogClassName={"primaryModal"}
          onHide={this.handleCloseModal.bind(this)}
           centered
        
        >
          <ModalHeader closeButton>
            <ModalTitle>Shopping Bag</ModalTitle>
          </ModalHeader>
          <ModalBody>{newmodal}</ModalBody>
          <ModalFooter>
          <button className="btn btn-secondary" onClick={this.handleCloseModal.bind(this)}>Ok</button>
            <h1> <Badge variant="info"> TotalAmount:{amountToPay}S$</Badge> </h1>
          
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Newshopping;
