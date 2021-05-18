import './App.css';
import React,{useEffect,useState} from "react"


const App=()=> {
  const [user,setUser]=useState([])
 
  const come= async ()=>{
    const response= await fetch("https://jsonplaceholder.typicode.com/users")
    setUser(await response.json());
  }
 useEffect(()=>{
   come();
 },[])
  return (
    <div className="App">
      <h1>Users</h1>
      {user.map((users)=>{
         return(
         <div key={users.id} className="format">
           <table align="center" >
             <tbody>
             <tr>Name:
               <td>{users.name}</td>
               </tr>
               <tr>Username:
               <td>{users.username}</td>
               </tr>
               <tr>Email:
               <td>{users.email}</td>
               </tr>
               <tr>Address:
               <td>{users.address.city},{users.address.zipcode}</td>
               </tr>
               <tr>Phone Number:
               <td>{users.phone}</td>
               </tr>
               <tr>Website:
               <td>{users.website}</td>
               </tr>
               <tr>Company:
               <td>{users.company.name}</td>
               </tr>
               </tbody>
           </table>
          
         </div>)}
         )
      }
    </div>
  );
}

export default App;
