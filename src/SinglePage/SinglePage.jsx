import React, { useEffect, useState } from "react";
import Navbar from "../commen/Navbar/Navbar";
import "./SinglePage.css";
import HeadTitle from "../commen/HeadTitle/HeadTitle";
import { Link, useParams } from "react-router-dom";
import Allitem from "../Components/Destinations/Allitem";
import Sdata from "../Components/Destinations/Sdata";
import EmptyFile from "../commen/EmptyFile/EmptyFile";

const SinglePage = () => {
    const {id} = useParams()
    const [item,SetItem] = useState(null)

    useEffect(()=>{
        let item =Sdata.find((item) => item.id === parseInt(id))
        if(item){
            SetItem(item)
        }
    }, [id])


  return (
    <>
      <Navbar />
      <HeadTitle />
      {item ? (


      <section className="single-page top">
        <div className="container">
          <Link to="/destination" className="primary-btn back">
            <i className="fas fa-long-arrow-alt-letf">Go Back</i>
          </Link>
          <article className="content flex">
            <div className="main-content">
                <img src={Allitem.image} alt="" />

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

export default SinglePage;
