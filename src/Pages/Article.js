import React from 'react'
// import Title from '../Components/Header/Title'
import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import {store} from '../Utility/Details'


function Article() {

  const [Details] = useContext(store);
  var { Id } = useParams();
  Id = +Id;
  var newCategory;
  for (var i = 0; i < Details.length; i++) {
    if (Details[i].id === Id) {
      newCategory = Details[i].category;
      break;
    }
  }

  return (
    <div>
 
     {
      Details.filter((val)=> val.id === Id).map((value,index)=>(
        <div key={index}>
        <div className='article_div'>
        <h1>{value.title}</h1>

        <div className='article_img'>
       
          <img src={value.Image}  alt={"image not found"} width={400} height={400}/>
        </div>


        <div className='article_description'>
          <p>{value.description}</p>
        </div>

        </div>
        </div>
      ))
     }
     <h2 className='moreh2'>More....</h2>
    <div className='article_more_div'>
      {
        Details.filter((val)=> val.id !== Id && val.category ===newCategory).slice(0,3).map((value,index)=>
        (
          <div key={index}>
          <div >
            <div>
            <Link
                to={`/article/${value.id}`}>
            <img src={value.Image} height={250} width={250} alt={"image not found"}/></Link>
            </div>
            <div>
            <p>{value.description.slice(0,120)}...</p>
            </div>
          </div>
          </div>
        ))
      }
    </div>
    </div>
    
  )
}

export default Article


