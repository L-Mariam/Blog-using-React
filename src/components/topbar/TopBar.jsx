import { Link } from "react-router-dom";
import "./topbar.css"
export default function TopBar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <a href="https://www.instagram.com/ss_paintings_/" target="blank">
          <i className="topIcon fa-brands fa-instagram"></i>
        </a>
        <i className="topIcon fa-brands fa-youtube-play"></i>
        <a href="https://www.pinterest.com/shameenashanaz/" target="blank">
          <i className="topIcon fa-brands fa-pinterest"></i>
        </a>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/"> HOME </Link>
          </li>
          <li className="topListItem">
          <Link className="link" to="/About"> ABOUT </Link>
          </li>
          <li className="topListItem">
          <Link className="link" to="/Write"> WRITE </Link>
          </li>
          <li className="topListItem">
          <Link className="link" to="/Contact"> CONTACT </Link>
          </li>
          <li className="topListItem">
{user && "LOGOUT"}         
 </li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
            <Link className="link" to="/settings">
            <img
            className="topImage"
            src="https://images.pexels.com/photos/1834393/pexels-photo-1834393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          /> </Link>
          ) : (
            <ul className="topList">
              <li className="topListItem">
              <Link className="link" to="/Login"> LOGIN </Link>
              </li>
              <li className="topListItem">
            <Link className="link" to="/Register"> REGISTER </Link>
            </li>
            </ul>
          )
        }
      
        <i className="topIconSearch fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
