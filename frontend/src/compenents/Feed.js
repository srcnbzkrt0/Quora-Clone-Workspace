import React, { useEffect, useState } from 'react'
import QuoraBox from './QuoraBox'
import './css/Feed.css'
import Post from './Post'
import axios from "axios"
import { PostAddSharp } from '@material-ui/icons'

function Feed() {
  useEffect(()=>{
    axios
    .get('/api/questions')
    .then((res) => {
      console.log(res.data.reverse());
      setPosts(res.data);
    }).catch((e)=>{
      console.log(e);
    });
  }, []);
  return (
    <div className='feed'>
      <QuoraBox />
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
       
    </div>
  )
}

export default Feed