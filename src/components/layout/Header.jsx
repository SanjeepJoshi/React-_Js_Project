import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'



const Header = () => {
  const {cart_items}=useSelector(store=>store.cartStore)

  return (
    <div className='bg-secondary-subtle'>
<div className="d-flex justify-content-between w-50 mx-auto">
<Link to='/' className='text-decoration-none text-success py-2'>
<i className='bi bi-house'></i>
Home
</Link>
<Link to='/cart' className='text-decoration-none text-success py-2'>
<i className='bi bi-cart'></i>
Cart{
  cart_items.length>0 &&
`(${cart_items.length})`
}
</Link>

</div>
    </div>
  )
}

export default Header
