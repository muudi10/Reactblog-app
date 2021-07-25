import "./home.css";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import TopBar from "../../components/topbar/TopBar";
import Posts from "../../components/posts/Posts";


export default function Home() {
  return (
    <>
     <Header />

      <div className="home">
         <Posts/>
         <Sidebar/>
      </div>
    </>
  );
}
