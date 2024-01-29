import getpost from './getpos';
import './App.css';
import {useEffect, useState} from 'react';
import Post from './components/Post';
function App() {
  
  const [post,setPost] = useState(null);
  
  useEffect(() => {
  getpost().then((data)=>{
    setPost(data)
  })
  }, [])

  return (
    <div className="App">
    {
      post ? post.map((e)=>
      <Post title = {e.title} body = {e.body} />
      ):<></>
    }

    </div>
  );
}

export default App;
