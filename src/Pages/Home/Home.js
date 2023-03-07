import React from 'react'
import TopPoster from '../../Components/Poster/Top/index'
import './Home.css'

function Home() {
  const HomeData =[
    {url:"https://wallpapercave.com/wp/wp8544430.jpg", catagery:"Fort",name:"Raigad", width: 600,height: 450},
    {url:"https://assets.cntraveller.in/photos/61266a6bce6a07f2ba18d750/master/w_1600,c_limit/Lohagad.jpg",catagery:"Fort",name:"Lohgad" ,width: 300,height: 200},
    {url:"https://assets.cntraveller.in/photos/61266e7f15e6c3223c8901cc/master/w_1600,c_limit/T4P740.jpg",catagery:"Fort",name:"Sindhudurg",width: 300,height: 200}
  ] 
  console.log(HomeData[0].url)
  return (
    <div>
   <div className='TopPoster__div'>
    <div className='TopPoster__big'>
<TopPoster imgUrl={HomeData[0].url} width={HomeData[0].width} height={HomeData[0].height} id={HomeData[0]} catagery={HomeData[0].catagery} name={HomeData[0].name}/>
    </div>

    <div className='TopPoster__small'>
    <TopPoster imgUrl={HomeData[1].url} width={HomeData[1].width} height={HomeData[1].height} id={HomeData[1]} catagery={HomeData[1].catagery} name={HomeData[1].name}/>
    <TopPoster imgUrl={HomeData[2].url} width={HomeData[2].width} height={HomeData[2].height} id={HomeData[2]} catagery={HomeData[2].catagery} name={HomeData[2].name}/>
    </div>
    </div>


    </div>
  )
}

export default Home

// id={} key={}