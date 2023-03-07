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
  // console.log(typeof path);
  console.log(newCategory);
  console.log(Details)

  return (
    <div>
 
     {
      Details.filter((val)=> val.id === Id).map((value)=>(
        <>
        <div className='article_div'>
        <h1>{value.title}</h1>

        <div className='article_img'>
          <img src={value.Image}  alt={"image not found"} width={400} height={400}/>
        </div>


        <div className='article_description'>
          <p>{value.description}</p>
        </div>

      <div>

      </div>
        </div>
        </>
      ))
     }

    </div>
  )
}

export default Article



// const Article = () => {
 
//   return (
//     <div>
//       {data
//         .filter((value) => value.id === path)
//         .map((val) => (
//           <div className="article-content-wrapper">
//             <h2>{val.name}</h2>
//             <img src={val.image} alt="" className="article-img" />
//             <p style={{ position: "relative", top: "1rem", height: "auto" }}>
//               {val.content}
//             </p>
//             <hr
//               style={{ marginTop: "2rem", position: "relative", width: "100%" }}
//             />
            
//           </div>
//         ))}

//       <div
//         style={{
//           fontFamily: "sans-serif",
//           textAlign: "center",

//           margin: "auto",
//           marginTop: "2rem",
//         }}
//       >
//         <h2>More From The Siren</h2>
//       </div>
//       <div
//         className="underline"
//         style={{ margin: "auto", marginTop: "0.5rem" }}
//       ></div>

//       <div className="article-wrapper">
//         {data
//           .filter((value) => value.id !== path && value.category === categor)
//           .map((val) => (
//             <div key={val.id} className="sports">
//               <Link
//                 to={`/article/${val.id}`}
//                 style={{ position: "relative", width: "5rem" }}
//               >
//                 <img src={val.image} alt="" className="sports-img" />
//               </Link>

//               <h3>{val.details}</h3>
//               <p className="texts">{val.name}</p>
//               <span
//                 style={{
//                   fontSize: "0.8rem",
//                   color: "black",
//                   top: "0.5rem",
//                   position: "relative",
//                 }}
//               >
//                 Date:
//               </span>
//               <span
//                 style={{
//                   color: "grey",
//                   fontSize: "0.6rem",
//                   marginLeft: "10px",
//                   top: "0.5rem",
//                   position: "relative",
//                 }}
//               >
//                 TODAY
//               </span>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Article;
