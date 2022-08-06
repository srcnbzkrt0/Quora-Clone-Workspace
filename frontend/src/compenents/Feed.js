import React, { useEffect } from 'react'
import QuoraBox from './QuoraBox'
import './css/Feed.css'
import Post from './Post'
import axios from "axios"

function Feed() {
  useEffect(()=>{
    axios.get('/api/questions').then((res) => {
      console.log(res.data);
    }).catch((e)=>{
      console.log(e);
    });
  }, []);
  return (
    <div className='feed'>
      <QuoraBox />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default Feed