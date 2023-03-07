import React from 'react'

function TopPoster({imgUrl,id,width,height,catagery,name}) {
  return (
    <div>
      <div>
        <img src={imgUrl} alt="fortimge" id={id}  width={width} height={height}/>
        <p>
          <span>{catagery}/</span>
          <span>{name}</span>
        </p>
      </div>
    </div>
  )
}

export default TopPoster