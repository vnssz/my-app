import { useState,useEffect } from "react";
//map, reduce, filter, sort, some
const Users = () => {
    const [data,setData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/api/v1/users")
        .then((res)=> {
            return res.json();
        })
        .then((results) => {
            console.log (results);
            console.log (results.support.text);
            var seletedUsers = results.data.filter((user) => 
            user.last_name.startsWith("F")
            );
            setData(results.data);
        });
        console.log("Function ran");
    },[]);
    
    return ( 
        <div>
            <h2>User List</h2>
            {data.map((user,i,ary) => (
                <div key={user.id}>
                    <h4> {user.first_name} {user.last_name}</h4>
                    <small>index={i}</small>
                    <img src={user.avatar} alt="Avatar with User"/>
                </div>
            ))}
        </div>
     );
};
 
export default Users;