import React from 'react';
import {useCart} from "react-use-cart"

const Cart = () => {
  const {
    isEmpty,
    items,
    totalItem,
    totalUniqueItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
  } = useCart();

  if(isEmpty)
      <h1 className="text-center">Your Cart is Empty</h1>
   return (
      <section className="py-4 container">
        <div className="row justify-content-center">
          <div className="col-12">
            <h5>
              Cart ({totalUniqueItems}): Total Items: {totalItem}
            </h5>
            <table className="table table-light table-hover m-0">
              <tbody>
                {items.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <title>{item.title}</title>
                      <img
                        src={item.img}
                        style={{ height: "6rem" }}
                        alt={item.title}
                      />
                    </td>
                    <td>{item.title}</td>
                    {/* <td>{item.price}</td> */}
                    <td>
                      Quantity ({item.quantity})
                    </td>
                    <td>
                      <button
                        className="btn btn-primary ms-2"
                        onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <button
                        className="btn btn-primary ms-2"
                        onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger ms-2"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove Item
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="col-auto ms-auto">
              <h2>Total price: ${cartTotal}</h2>
            </div>
          </div>
        </div>
      </section>
    )}
  

export default Cart;
