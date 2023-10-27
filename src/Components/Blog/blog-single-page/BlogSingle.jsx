import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import EmptyFile from "../../../commen/EmptyFile/EmptyFile";
import BlogData from "../BlogData";
import Navbar from "../../../commen/Navbar/Navbar";
import HeadTitle from "../../../commen/HeadTitle/HeadTitle";

const BlogSingle = () => {
    const {id} = useParams()
    const [item,SetItem] = useState(null)

    useEffect(()=>{
        let item =BlogData.find((item) => item.id === parseInt(id))
        if(item){
            SetItem(item)
        }
    }, [id])


  return (
    <>
<Navbar/>
<HeadTitle/>
      {item ? (
      <section className="single-page top">
        <div className="container">
          <Link to="/blog" className="primary-btn back">
            <i className="fas fa-long-arrow-alt-left">Go Back</i>
          </Link>

          <article className="content flex">
            <div className="main-content">
                <img src={item.cover} alt="" />

                <div className="category flex_space">
                  <span>{item.date}</span>
                  <label>{item.catgeory}</label>
                </div>
                

                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <p>{item.desc}</p>

                <div className="para flex_space">
                <p>{item.para}</p>
                <p>{item.para}</p>
                </div>
                
            </div>
            <div className="side-content">
              <div className="category-list">
                <h2>Category</h2>
                  
                  <ul>
                    {BlogData.map((item) =>{
                        return (
                            <li>
                                <i className="far fa-play-circle"></i>
                                {item.catgeory}
                            </li>
                        )
                    })}
                  </ul>
              </div>
            </div>
          </article>
        </div>
      </section>
    ):(
        <EmptyFile/>
    )}
    </>
  );
};

export default BlogSingle;
