import React, { useEffect, useState } from 'react'
import '../styles/Home.scss'
import Loading from '../components/Loading'
import axios from "axios";
import Card from '../components/Card';
import Header from '../components/Header';

function Home() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    setLoading(true);
    try {
      const { data: res } = await axios.get("https://stockradars.co/assignment/data.php");
      setUsers(res);
      console.log(res);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };


  useEffect(() => {
    getUsers()
  }, []);

  return (
    <div className='home'>
      <Header name="Home Page" title="Welcome To My Page" image="/Header_Home.jpg" />
     <div className='home_content'>
     {loading ? <Loading /> : users.length && users.map((data,index) => {
        return (
          <Card key={index} {...data} />
        )
      })}
     </div>
    </div>
  )
}

export default Home