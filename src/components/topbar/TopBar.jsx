import "./topbar.css"
export default function TopBar() {
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
          <li className="topListItem">Home</li>
          <li className="topListItem">About</li>
          <li className="topListItem">Blog</li>
          <li className="topListItem">Write</li>
          <li className="topListItem">Contact</li>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImage"
          src="https://images.pexels.com/photos/1834393/pexels-photo-1834393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <i className="topIconSearch fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
