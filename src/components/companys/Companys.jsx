import React from "react";
import "../style/companys.css";
import imgexample from "../../assets/img/imgexample.png";

import Stars from "../ratingStars/Stars";
import CommentBox from "../ratingStars/CommentBox";

import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";

export const Companys = () => {
  const OneCompany = async (id, state) => {
    const petition = await axios.get(`http://localhost:3000/posts/${id}`);
    state(petition.data);
  };
  const [detail, setDetail] = useState(null);

  const params = useParams()
  useEffect(() => {
    OneCompany(params.id, setDetail)
  }, []);

  return (
    <>
      {detail !== null ? (
        <div className="companys">
          <div className="container">
            <div className="description-companys">
             
              <img className="imgCompany" src={detail.logo} alt="pag" />
              <div className="pding">
                <p>Name: {detail.nombre}</p>
                <p></p>
                <p>Type: </p>
                <p></p>
                <p>Description: {detail.comentario}</p>
               
              </div>
            </div>
            <div className="star-cont">
              <Stars />
            </div>
            <div className="parragraph-comment">
              <CommentBox />
            </div>
          </div>
        </div>
      ) : (
        "There is not Data"
      )}
    </>
  );
};
