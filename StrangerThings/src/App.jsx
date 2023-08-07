import React, { useState, useEffect } from 'react'
import Posts from "./components/Posts";
import {fetchAllpost} from "./api";
import { Route, Routes } from 'react-router-dom';

const App = () => {
  const[posts, setPosts] = useState([]);

useEffect(() => {
const getAllPost = async() => {
  const posts = await fetchAllpost();
  setPosts(posts);
};
getAllPost
}, []);

  return (
   
      <div>
      <h1>App</h1>
      <Routes>
        <Route path="/posts" element={<Posts posts={posts}/>} />
      </Routes>
      </div>
       
    
  );

}
export default App
