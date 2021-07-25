import  './header.css'
import headerImg from '../../images/header.jpg'

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                
                <span className="headerTitlesm">React & Node</span>
                <span className="headerTitlelg">Blog</span>
              
                </div> 
              <img src={headerImg} alt="" className="headerImage" />
        </div>
    )
}
