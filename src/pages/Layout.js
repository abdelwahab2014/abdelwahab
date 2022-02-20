
import { Outlet, Link } from "react-router-dom";
//import index from "./index.css";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>

          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/project">Projects</Link>
          </li>

        

          <li>
            <Link to="/about">About</Link>
          </li>
          
         
          <li>
            <Link to="/contact ">Contact me</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
