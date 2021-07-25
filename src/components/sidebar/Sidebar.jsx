import "./sidebar.css";
import abouMeImage from "../../images/aboutme.jpg";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME </span>
        <img src={abouMeImage} className="sidebarImage" alt="" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non repellat
          voluptatem doloremque quis culpa porro vel, molestiae similique
          aperiam ipsam obcaecati, consequatur natus dolorem perferendis.
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItems">Life</li>
          <li className="sidebarListItems">Music</li>
          <li className="sidebarListItems">Style</li>
          <li className="sidebarListItems">Sport</li>
          <li className="sidebarListItems">Tech</li>
          <li className="sidebarListItems">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW Us</span>
        <div className="sidebarSocialIcons">
          <i className="fab fa-facebook-square"></i>
          <i className="sidebaricons fab fa-instagram-square"></i>
          <i className="sidebaricons fab fa-linkedin"></i>
          <i className="sidebaricons fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
