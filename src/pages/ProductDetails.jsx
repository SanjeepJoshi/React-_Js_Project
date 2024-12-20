import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import Swal from 'sweetalert2'

const ProductDetails = () => {
    const {id}=useParams()
    const [product,setProduct]=useState({})

    const {cart_items}=useSelector(store=>store.cartStore)

    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${id}`)
        .then(response=>response.json())
        .then(result=>setProduct(result))
    },[id])

    const [quantity,setQuantity]=useState(0)
    const dispatch=useDispatch()
    // add to cart
    const addToCart=(e)=>{
        e.preventDefault()
        if(quantity==0){
  Swal.fire('Attention!','0 Quantity cannot be added to the cart','warning')
        }else{
            let cart_item={}
            let itemExists=cart_items.find(item=>item.product==product.id)
            if(itemExists){
                Swal.fire({
                    title:'Attention!',
                    text:'The items is already in the cart again do you want to add it in the cart??',
                    icon:'warning',
                    showCancelButton:true,
                    showConfirmButton:true
                })
                .then(result=>{
                    if(result.isConfirmed){
                        cart_item={...itemExists,quantity:Number(itemExists.quantity)+Number(quantity)}
                        dispatch({type:'UPDATE_CART',payload:cart_item})
                        Swal.fire('Success!','Item added to the cart','success')
                    }
                })
            }else{

                cart_item={
                    cart_id:Math.trunc(Math.random()*10000+Date.now()),
                    title:product.title,
                    image:product.images[0],
                    price:product.price,
                    product:product.id,
                    stock:product.stock,
                    quantity
                }
                dispatch({type:"ADD_TO_CART",payload:cart_item})
                Swal.fire('Congrats!',"Your Item has been added to Cart.",'success')
            }
    }
}
    return (
        <>
    <div className="d-flex shadow-lg w-75 mx-auto my-5">
        <div className="productImage w-50 p-5">
            <img src={product.images && product.images[0]} alt="productImage" className='w-100'/>
        </div>
        <div className="productdesc w-50 p-5">
<h3>{product.title}</h3>
<h3>${product.price}</h3>
<h3>Description:{product.description}</h3>
<h3>Rating: {product.rating}</h3>
<h3>Brand: {product.brand}</h3>
<h3>Category: {product.category}</h3>
<h3>Stock: {product.stock}</h3>
<h4>Quantity: <input type="number" onChange={e=>setQuantity(e.target.value)} max={product.stock} min={1} /></h4>
<h3>Discount: {product.discountPercentage}</h3>
<button className='btn btn-warning w-100' onClick={addToCart}>Add to card</button>
        </div>
    </div>
      
    </>
  )
}

export default ProductDetails
