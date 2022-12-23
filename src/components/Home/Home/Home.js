import './Home.css'
import Options from '../Options/Options';
// import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
// import ALL from '../../All/All';



function Home(props) {

   

    return (
        <div className='header-container'>

            <div className="main-header">
                {/* Logo */}
                <div className='left-side'>
                    <div className='logo' >
                        <a href="#"><h4><span>SHOP</span>LANE</h4></a>
                    </div>
                </div>

                <div className='right-side'>
                    <div className=''>
                        <span className='profileIcon'>
                            <Options />
                        </span>

                    </div>
                    {/* CartIcon */}
                    <div>
                       <Link to='/cart'> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="carticon" viewBox="0 0 16 16">
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                        </svg></Link>
                        <sup><a href="#"> <span id="cart-count">{props.CartCount}</span></a></sup>
                    </div>
                </div>
            </div>

            <div id='menu'>

                <ul className="nav-links">
                    <li><Link to='/'>All</Link></li>
                    <li><Link to='/electronics'>Electronics</Link></li>
                    <li><Link to='/jewelery'>Jawelery</Link></li>
                    <li><Link to='/menclothing'>Men's Clothing</Link></li>
                    <li><Link to='/womenclothing'>Women's Clothing</Link></li>
                </ul>
            </div>

        

        </div>
    )


    //     return (

    //         <div className='header-container'>

    //             <div className="main-header">
    //                 {/* Logo */}
    //                 <div className='left-side'>
    //                     <div >
    //                         <a href="#"><h4><span>SHOP</span>LANE</h4></a>
    //                     </div>
    //                 </div>

    //             <div className='right-side'>
    //                 <div className=''>
    //                     <span className='profileIcon'>
    //                         <Options />
    //                     </span>

    //                 </div>
    //                 {/* CartIcon */}
    //                 <div>
    //                     <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
    //                         <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
    //                     </svg>
    //                     <sup><a href="#"> <span id="cart-count">0</span></a></sup>
    //                 </div>
    //             </div>
    //         </div>

    // {/* --------------------------------------------------------- */}
    //             {/* <div id='menu'>

    //                 <ul className="nav-links">
    //                     <li><Link to='/'>All</Link></li>
    //                     <li><Link to='/electronics'>Electronics</Link></li>
    //                     <li><Link to='/jewelery'>Jawelery</Link></li>
    //                     <li><Link to='/menclothing'>Men's Clothing</Link></li>
    //                     <li><Link to='/womenclothing'>Women's Clothing</Link></li>
    //                 </ul>
    //                 </div> */}

    //             </div>


    //     );
}

export default Home;