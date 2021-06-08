import { Link } from "react-router-dom";
const NavBar = () => {
     return (
         <nav className="navbar">
             <h1>The Sabari Blog</h1>
             <div className="links">
                 <Link to="/">Home</Link>
                 <Link to="/create" >New Blog</Link>
                 {/* inline style can be as */}
                 {/* <a href="/create" style={{color: "red"}} >New Blog</a> */}
             </div>
         </nav>
      );
 }
  
 export default NavBar;