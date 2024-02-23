import React, { useContext } from 'react';
import CartItem from './Cart'
import  { UsersContext } from './Store';


function Home() {
const {users,setUsers}=useContext(UsersContext)
console.log("f",users)
  return (
    <>

      <div className='flex flex-col justify-center bg-gray-100'>
        <div className='flex justify-between items-center px-20 py-5'></div>
        <h1 className="text-center mt-2">All Items</h1>
      </div>
       <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10'> 
        <section className="py-4 container">
          <div className="item-container">
            <div className="row justify-content-center">
              {users.map((item, index) => (
                <CartItem
                  key={item.id}
                  img={item.images[0]}
                  title={item.title}
                  desc={item.desc}
                  price={item.price}
                  item={item}
                />
              ))}
            </div>
          </div> 
         </section>
         </div>
         </>
         
      );
    }
    

      //   {/* <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10'>
       
      //   {users.map((item, index) => (
      //     <CartItem
      //       key={item.id}
      //       className='bg-white shadow-md rounded-lg px-10 py-10'
      //       img={item.images[0] }
      //       title={item.title}
      //       desc={item.description}
      //       price={item.price}
      //     />
      //   ))}
      // </div> */}
      
     
export default Home;