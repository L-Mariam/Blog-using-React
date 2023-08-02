import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
<span className="sidebarTitle"> ABOUT ME </span>
<img 
          src="https://images.pexels.com/photos/1834393/pexels-photo-1834393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="" />
<p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut totam optio exercitationem reprehendeoribus accusantium inventore aperiam ex earum hic dolorem, ea omnis dolorum quis quo nobis.</p>
      </div>

      <div className="sidebarItem">
      <span className="sidebarTitle"> CATEGORIES </span>
<ul className="sidebarList">
<li className="sidebarListItem"> Life </li>
<li className="sidebarListItem"> Money </li>
<li className="sidebarListItem"> Sports </li>
<li className="sidebarListItem"> Dinero </li>
<li className="sidebarListItem"> Deutsch </li>
<li className="sidebarListItem"> Hangul </li>
</ul>
      </div>

      <div className="sidebarItem">
      <span className="sidebarTitle"> FOLLOW US </span>
<div className="sidebarSocial">
<a href="https://www.instagram.com/ss_paintings_/" target="blank">
          <i className="sidebarIcon fa-brands fa-instagram"></i>
        </a>
        <i className="sidebarIcon fa-brands fa-youtube-play"></i>
        <a href="https://www.pinterest.com/shameenashanaz/" target="blank">
          <i className="sidebarIcon fa-brands fa-pinterest"></i>
        </a>
</div>

      </div>
      Sidebar</div>
  )
}
