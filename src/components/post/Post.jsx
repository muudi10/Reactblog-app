import "./post.css";
import PostImage from '../../images/postimage.jpg' 
import {Link} from 'react-router-dom'

export default function Post() {
  return (
    <div className="post">
      <img src={PostImage} className="postimage" alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Life</span>
          <span className="postCat">Music</span>

          <hr />
        </div>{" "}
        <span className="postTitle"> 
        <Link to ='/Single'>Lorem ipsum dolor sit amet.</Link></span>
        
        <span className="postDate">1 hr ago</span>
        <p className="postDes">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
          voluptatem sint veritatis suscipit, laboriosam numquam vitae
          repellendus itaque ullam iste odio dolorum iusto, debitis maiores, ad
          repudiandae doloremque officia assumenda?
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
          voluptatem sint veritatis suscipit, laboriosam numquam vitae
          repellendus itaque ullam iste odio dolorum iusto, debitis maiores, ad
          repudiandae doloremque officia assumenda?
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
          voluptatem sint veritatis suscipit, laboriosam numquam vitae
          repellendus itaque ullam iste odio dolorum iusto, debitis maiores, ad
          repudiandae doloremque officia assumenda?
        </p>
      </div>
    </div>
  );
}
