import "./claims.css"
import{Outlet, NavLink, Link} from "react-router-dom";
import { UserContext } from './UserContext';
import { useContext } from "react";


const Navigation = () =>{

    const currentUser = useContext(UserContext);

    const logout = () => {
        currentUser.setUser({name:"", role:""});
    }


    return(

        <div>

    <div className="title-bar">
        
    <h1>SpeedyClaims</h1>
   <img className="logo" height="100%" src="crash.jpg"/>
</div>

<div id="button-bar">   
 {currentUser.user.name === "" && <li><NavLink to="/Login">Log in</NavLink></li>}
            {currentUser.user.name !== "" && <li><button onClick={logout} >Log out</button></li>}
{currentUser.user.name !== "" && <p>Current user : {currentUser.user.name}</p>}
  <div className="container">
 <div className="row">
    <div className="col-md-3 col-6"><NavLink to="/newclaim" ><button className="btn btn-secondary">Add New Claim</button></NavLink></div> 
    <div className="col-md-3 col-6"><NavLink to="/openclaims" ><button className="btn btn-secondary">Unreviewed Claims</button></NavLink></div> 
    <div className="col-md-3 col-6"><button className="btn btn-secondary"><NavLink to="/search" >Search</NavLink></button></div> 
    <div className="col-md-3 col-6"><NavLink to="/archived" ><button className="btn btn-secondary">Archive</button></NavLink></div> 

 </div>     

</div>
</div>
<br/>
<Outlet />

</div>
    )

}
export default Navigation;