import React from 'react'
import './Order.css'
import { useState } from 'react'
import {toast} from 'react-toastify'
import { useEffect } from 'react'
import axios from 'axios'
import {assets} from "../../assets/assets"
const Order = ({url}) => {
  const [orders,setOrders] = useState([]);
  const fetchAllorders = async () => {
    const response = await axios.get(url+"/api/order/list");
    if(response.data.success){
      setOrders(response.data.data)
    }
    else{
      toast.error("error")
    }
  }

  const statusHandler = async (event,orderid) =>{
    const response = await axios.post(url+"/api/order/status",{
      orderId,
      status:event.target.value
    })
    if(response.data.success){
      await fetchAllorders();
    }
  }

  useEffect(()=>{
    fetchAllorders();
  },[])
  return (
    <div className='order add'>
      <h3>order page</h3>
      <div className='order-list'>
        {orders.map((ordre,index)=>(
          <div key={index} className='order-item'>
             <img src={assets.parcel_icon} alt="" />
             <div>
              <p className='order-item-food'>
                {orders.items.map((item,index)=>{
                  if(index===order.items.length-1){
                    return item.name + " X " + item.quantity
                  }
                  else{
                    return item.name + " x " + item.quantity + " ,"
                  }
                })}

              </p>
              <p className='order-item-name'>{order.address.firstName+" "+order.address.lastname}</p>
              <div className='order-item-address'>
                <p>{order.address.street+","}</p>
                <p>{order.address.city+","+order.address.state+", "+order.address.country+", "+order.address.zipcode}</p>
              </div>
              <p className='order-item-length'>{order.address.phone}</p>
             </div>
             <p>items: {order.items.length}</p>
             <p>${order.amount}</p>
             <select onChange={(event)=>statusHandler(event,order._id)} value={order.status}>
              <option value="Food Processing">Food Processing</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
             </select>
          </div>
        ))

        }
      </div>
    </div>
  )
}

export default Order
