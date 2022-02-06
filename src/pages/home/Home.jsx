import React from 'react';
import Featured from '../../components/featured/Featured';
import Navbar from '../../components/navbar/Navbar';
import './home.scss';
import List from '../../components/list/List'
import { useState,useEffect } from 'react';
import axios from 'axios'

const Home = ({type}) => {
  const [lists, setLists] = useState([])
  const [genre, setGenre ] = useState(null);

 useEffect(() => {
   const getRandomLists = async () => {
     try {
        const res = await axios.get(`lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : "" }`, {
          headers:{
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZmQ2YTVkMDdmZTE0MmEzY2ZhODZiZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDA1Mjg1NCwiZXhwIjoxNjQ0NDg0ODU0fQ.aH7k4rIF4n7A9umFl7artDuVzvB4er9hC0_tVP0jqqA"
          }
        })
        setLists(res.data)
     } catch (err) {
       console.log(err);
     }
   }
   getRandomLists()
 },[type,genre])
  

  return <div className='home'>
       <Navbar />
        <Featured type={type}/>
        {lists.map((list) => (
          <List list={list} />
        ))}
        </div>;
};

export default Home;
