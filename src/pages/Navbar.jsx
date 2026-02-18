import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, ShoppingCartIcon } from 'lucide-react'
const Navbar = () => {
  return (
    <div>
    <nav className='Navbar'>
      
      <div className='lobo'>
        Welcome to Kurariya Market </div>
       <div className='Access'>
        <Link to={'/'} >
        <button>Home</button>
        </Link>
        <Link to={'/Contact'}>
        <button>Contact</button>
        </Link>
        <Link to={'/Product'}>
        <button>Products</button>
       </Link>
      
      </div>
      
    </nav>  
      </div>
  )
}

export default Navbar