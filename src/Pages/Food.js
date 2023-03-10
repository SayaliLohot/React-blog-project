import React, { useContext } from 'react'
import {store} from '../Utility/Details'
import {Link } from 'react-router-dom'


function Food() {
  const [details, setDetails] = useContext(store)
  console.log(details)
  return (
    <div>
      <h1 className='catagoryh1'>Technology</h1>
      <div className='Category_div'>
      <div className='left_Side_Of_Category'>
        {
        details.filter((val)=>{
          return val.category === 'Food' 
        }).map((value,index)=>(
          <div key={index}>
          <div className='child_data_left_Side_Of_Category'>
            
          <div>
            <Link
                to={`/article/${value.id}`}>
            <img src={value.Image} width={300} height={300} alt={"image not found"}/></Link>
            </div>
            <div className='description_div'>
              <p className='bolly_title'>{value.title}</p>
              <p>{value.description.slice(0,150)}...</p>

            </div>
          </div>
          <hr/>

          </div>
        ))
        }
      </div>

      <div className='right_Side_Of_Category'>
      <div >
      <h1 className='catagoryh1'>Top News</h1>
        {
        details.filter((val)=>{
          return val.category === 'Food-Top' 
        }).map((value,index)=>(
          <div key={index}>
          <div className='top_news_div'>
          <div>
              <Link to={`/article/${value.id}`}>
            <img src={value.Image} width={150} height={150} alt={"image not found"}/></Link>
            </div>
            <div >
              <p>{value.title}</p> 
            </div>
          </div>
          <hr className='topnews_hr'/>

          </div>
        ))
        }
      </div>
      <div className='Advertisement'>Advertisement</div>
      </div>
      </div>
    </div>
  )
}

export default Food