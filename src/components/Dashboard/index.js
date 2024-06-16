import { useEffect, useState } from "react";
import Home from "./home";
import Login from '../Login';

const Dashboard = () => {

    const [user, setUser] = useState(null);
    


    return (
       <div>
           {user ? <Home /> : <Login />}
       </div>
    )
}

export default Dashboard;