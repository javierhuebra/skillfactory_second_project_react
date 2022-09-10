import { useState,useEffect } from "react";
import User from './User';
const UsersList = () =>{

    const [users, setUsers] = useState([]);

    const getUsersFromApi = () =>{
      
        const URL_USERS = "https://jsonplaceholder.typicode.com/users";
            fetch(URL_USERS) // Infiere en que el pedido es un GET
            .then((response) => response.json())
            .then((data) => setUsers(data));           
    }
    

    useEffect(() =>{
        getUsersFromApi();
        console.log(users);
    },[]);

    return(
         
        <div className="container-users-list">
            {users.map((user,index)=>{
                return(
                    <User
                        key={index}
                        id={user.id}
                        name={user.name}
                        username={user.username}
                        phone={user.phone}
                        city={user.address.city}
                        website={user.website}/>
                    )   
                
            })}
        </div>
    )
}

export default UsersList;