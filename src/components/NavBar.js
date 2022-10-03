import React from 'react'
import { NavLink } from 'react-router-dom'


function NavBar(){
   return (
    <div  className='navbar'>
        <nav>
            <ul>
               <li><NavLink to='/'>Home</NavLink></li>
               <li><NavLink to='/about'>About</NavLink></li>
              <li><NavLink to='/menulist'>MenuList</NavLink></li>
              <li><NavLink to='/reservation'>Reservation</NavLink></li>

            </ul>    

        </nav>



    </div>
   )

}


export default NavBar;