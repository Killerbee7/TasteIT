import React, { useState, useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";

import axios from "axios";
import classes from "./SeeMore.module.css";

const SeeMore = () => {
  const params = useParams();

  const navigate = useNavigate();

  const [data, setData] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(`http://localhost:3001/recipes/${params.singlerecipe}`)
      .then((res) => {
        setData(res.data);
      });
    setIsLoading(false);
  }, [params]);

  if (isLoading) {
    return <p> Loading......</p>;
  }

  return (
    <div>
      <div>
        <h1>
          {data.name}{" "}
          <span>
            <img className={classes.imgFlg} src={data.flag} alt="" />
          </span>
        </h1>
      </div>
      <div className={classes.recipeSingle}>
        <div className={classes.image}>
          <img src={data.img} alt={data.name} />
          <button className={classes.buttonBack} onClick={() => navigate(-1)}>Back</button>
        </div>

        <div className={classes.details}>
          <h2 className={classes.author}>{data.author} </h2>
          <h3 className={classes.country}>{data.country} </h3>
          <div className={classes.description}>
            <p>{data.desc}</p>
          </div>
          
          <h3>Ingredients</h3>

          
           <table className={classes.ingredients}>
           <tr>
                 <th>Ingredient</th>
                 <th>Quantity</th>
                 
                 </tr>
              {data.inc &&
                data.inc.map((inc, i) => {
                  return (
                    <>
                  
                    
                    <tr key={i}>
                      <td>{inc.incName}</td>
                      <td>{inc.quantity}</td>
                    </tr>
                    </>
                  );
                })}
            
          </table> 
          <h3>Instruction</h3>
          <p className={classes.instruction}>{data.inst}</p>
        </div>
      </div>
    </div>
  );
};

export default SeeMore;
