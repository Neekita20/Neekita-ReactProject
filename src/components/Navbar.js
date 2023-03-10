import React from 'react'
import {Link} from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import './Nabar.scss'
export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
            
            <a className="navbar-brand" href="#">Art Store</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>
       <div className="container-fluid">
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             <li className="nav-item">
             <Link className="nav-link active" to="/">Home</Link>
               {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
             </li>
             <li className="nav-item">
             <Link className="nav-link active" to="/product">Products</Link>
               {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
             </li>
             </ul>
             <ul className="nav justify-content-center">

               <form className="d-flex" role="search">
               <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" style={{height:"40px",width:"400px"}}/>
            <button class="main-button btn-outline-secondary btn-sm" style={{marginRight:"40px",height:"40px",borderRadius:"5px",border:"1px solid white"}}>
              Search
            </button>
       
           </form>
           <div class="sign-btn ">
                    <form class="frm"> 
                        {/* <input type="email" placeholder='Enter your email' /><br /><br /> */}
                        <Link type="submit" class="btn btn-dark btn-mdm" to="/signup" style={{marginRight:"30px",height:"40px",width:"80px",borderRadius:"20px",color:"white",border:"1px solid pink",backgroundColor:"#ff758c"}}>Sign in</Link>                    </form>
                </div>
                     <li className="nav-item " style={{paddingRight:"50px"}}>
                     <Link className="nav-link active" to="/Cart" style={{color:"#ff758c"}}>
                      <ShoppingCart size={30}/>
                     </Link>
             </li>
           </ul>
         
         </div>
       </div>
     </nav>
     {/* <div className="image">
     <img src="..." className="rounded mx-auto d-block" alt="..."/>
     </div> */}
     </>
  )
}
