//import { useState } from "react";
//We can use antdesign for better designing
import {useState, useEffect } from "react"; //useEffect ensures that we dont have to push button each time to executes.. It automatically executes it
import axios from "axios";
import Button from "../components/Button"
import '../App.css'
import styled from "styled-components";
import {List} from 'antd'
import { LoadingOutlined } from "@ant-design/icons";
//FETCH 
const App= () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {fetchPosts();},[]);
  const fetchUserData = () => {
    axios.get(`http://localhost:8000/api/users`)
    .then((data)=>setUsers(data.data.users))
    .catch((err)=>console.log(err));
    //alert("fetch user from api")
    //fetch(`http://localhost:8000/api/users`,{method:"GET",}).then(response=>{return response.json()}).then(data=>setUsers(data.users)).catch(err=>console.log(err));
  }
  const fetchPosts = () => {
    //alert("fetch user from api")
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then((data)=>{setPosts(data.data); setLoading(false)})//DATA.DATA?? SERIOUSLYYYYY
    .catch((err)=>console.log(err));
   // fetch(`https://jsonplaceholder.typicode.com/posts`,{method:"GET",}).then(response=>{return response.json()}).then(data=>setPosts(data)).catch(err=>console.log(err));
  }
if(loading){
 // return <h1>Wait Naa...</h1>
 return <LoadingOutlined className="display-1 text-danger py-5 d-flex justify-content-center align-items-center" 
 style={{height: "100vh"}} /> 
}

  return (
    <div className="container">
      {/* <pre>{JSON.stringify(users,null,4)}</pre> */}

      {/* Render data */}
      {users && users.map((user)=>(<div key={user.age}>{user.name}</div>))}

      <Button handleClick = {fetchUserData } title = "Fetch User Data"/> 
      {/* We get error if we dont use props */}

      {/* <button onClick={fetchUserData} className="btn btn-primary">
        Fetch User Data
      </button> */}
      <List 
        bordered 
        dataSource={posts}
        renderItem={(item) => <List.Item>{item.title}</List.Item>}
      />
      {/* {posts && posts.map((post)=> <PostList key={post.id}>{post.title}</PostList>)}   */}
      {/* For using styled components, we replace div with PostList */}
    </div>
  )
}
export default App;

const PostList = styled.div`
  background-color: indigo;
  color: #fff;
  border: 1px solid #999;
  padding: 20px;
`;

// function App() {
//   return (
//     <div className = "container"> 
//       <h1>Learning react</h1>

//       <form>
//         <div className="mb-3">
//           <input className = "form-control" type = "text" />
//         </div>
//         <div className = "mb-3">
//           <input className="form-control" type="password" />
//         </div>
//         <button type = "submit" className="btn btn-primary"> 
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

//export default App;
//Use npm start to run
//In jsx, we use className instead of class

//Or u can directly use the code on bootstrap website under forms... Then convert it to jsx
// function App() {
//   const [email, setEmail] = useState("")
//   const [password, setPassword]=useState("");
//   //console.log('STATE => ', email, password);
//   const handleSubmit= (event) => { 
//     event.preventDefault();
//     console.log(" STATE => ", email, password)};
//   return (
//     <div className = "container"> 
//       <h1>Learning react</h1>

// <form onSubmit={handleSubmit}>
//   <div className="mb-3">
//     <label className="form-label">Email address</label>
//     <input
//     value = {email} 
//     onChange={event => setEmail(event.target.value)} type="email" className="form-control" /> 
//     {/* Gives immediate changes in output */}
//     <div className="form-text">We'll never share your email with anyone else.</div>
//   </div>
//   <div className="mb-3">
//     <label className="form-label">Password</label>
//     <input value={password} onChange={ event => setPassword(event.target.value)} type="password" className="form-control" />
//   </div>
//   <button type="submit" className="btn btn-primary">Submit</button>
// </form>

//     </div>
//   );
// }

// we can create a state in react using useState hooks
// state is where we can store user i/p values or some other data that is reqd to display on the page                                                                                                                                                         

