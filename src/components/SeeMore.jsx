import React, { useState, useEffect } from 'react';

import {  useParams, useNavigate} from 'react-router-dom';

import axios from 'axios';
import classes from "./SeeMore.module.css"




const SeeMore = () => {

    const params = useParams();

    const navigate = useNavigate();

    const [ data, setData ] = useState({});

    const [ isLoading, setIsloading ] = useState(false);



    useEffect(() => {

        setIsloading(true);

        axios.get(`http://localhost:3001/recipes/${params.singlerecipe}`).then(res => {

            setData(res.data);

            console.log('single', res.data);

            setIsloading(false);

        });

    }, [params]);



    if (isLoading) {

        return <p> Loading......</p>

    }



        return (

            <div className={classes.singlerecipe}>

            <h2>{data.name}</h2>

             <p>{data.author}</p>

             <p>{data.country}</p>
              
              <img src={data.img} alt="" />

              <p>{data.desc}</p>
              

           


            <button onClick={()=> navigate(-1)}>Go back</button>

        </div>

        );       

    }  



export default SeeMore;

