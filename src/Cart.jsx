import {React} from 'react'
import {useCart} from "react-use-cart";


const CartItem =(props)=> {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    const newItem = {
       id:props.item.id,
      name: props.title,
      price:props.price,
      quantity: 1,
      img:props.img,
      title:props.title,
    };
    
    addItem(newItem);
  };

  return (
      <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
         <img src={props.img} className="card-img-top img-fluid" />
        <div className="card-body text-center">
          <h5 className="card-title">${props.price}</h5>
          <h5 className="card-title">{props.title}</h5>
          
          <p className="card-text">{props.desc}</p>
          <button className="btn btn-success"
            onClick={() => handleAddToCart()}>Add to cart</button>


        </div>
      </div>



  );

  }

export default CartItem