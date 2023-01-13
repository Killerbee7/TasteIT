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

        console.log("single", res.data);
      });
    setIsLoading(false);
  }, [params]);

  if (isLoading) {
    return <p> Loading......</p>;
  }

  return (
    <div>
      <div>
        <h1>{data.name}</h1>
      </div>
      <div className={classes.recipeSingle}>
        <div className={classes.image}>
          <img src={data.img} alt={data.name} />
        </div>

        <div className={classes.details}>
          <h2 className={classes.author}>By {data.author}</h2>
          <p className={classes.country}>Country: {data.country_code} </p>
          <div className={classes.description}>
            <h3>Description</h3>
            <p>{data.desc}</p>
          </div>

          <h3>Ingredients</h3>
          <table className={classes.ingredients}>
            <tbody>
              {data.inc &&
                data.inc.map((inc, i) => {
                  return (
                
                    <tr key={i}>
                        <td>{inc.incName}</td>
                      <td>{inc.quantity}</td>
                      
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <h3>Instruction</h3>
          <p className={classes.instruction}>{data.inst}</p>
        </div>
      </div>
    </div>
  );
};

export default SeeMore;
