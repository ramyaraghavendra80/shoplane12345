import "../All/All.css"
import { useState,useEffect } from "react";
import Rate from '../Ratings/Ratings';
import React from 'react';
// import { Link } from 'react-router-dom';
import "../Women's clothing/Women's clothing.css";



function Womensclothing(props) {
    const{AddToCart,FavItem,favo}=props

    const [womenclothing, setProducts] = useState([]);
    

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/category/women's%20clothing").then(res => res.json()).then(res => {
            setProducts(res)
        })
    }, []);


    return (


        <div className='container3' >
       {womenclothing.length>0?womenclothing.map((item,index)=>{
            return( <div class="card" id='1' index={index} >
            <svg onClick={()=>FavItem(item)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={`${favo.includes(item)?'red':'currentColor'}`} class="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
            
            <img src={item.image} class="image" alt="not found" />
            <hr />
            <div class="card-body">
                <p className='title'>{item.title}</p>
                <span className='rating'>
                    <Rate />
                    <p className='count'>{item.count}</p>
                </span>
                <p className='price'>{item.price}</p>
                <button className='addtocart' onClick={()=>AddToCart(item)}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                </svg>Add To Cart</button>
            </div>
        </div>
        
        )}):''}
    </div>



    );
}

export default Womensclothing;