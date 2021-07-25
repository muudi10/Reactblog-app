import './singlePost.css'
import singlePostImage from '../../images/singlepost.jpeg'

export default function SinglePost() {
    return (
        <div className='singlePost'>


            <div className="singlePostWrapper">
                <img src={singlePostImage} alt="" className="singlePostImage" />
                <h1 className="singelePostTitle">Lorem ipsum dolor sit amet consectetur.
                
                <div className="singlePostEdit">
                 <i className="sinlePostIcon fas fa-edit"></i>
                <i class="sinlePostIcon fas fa-trash-alt"></i>     
                </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: <b>Muudi</b>
                    </span>
                    <span className="singlePostDate">
                       1 hr ago
                    </span>
                </div>
                <p className="singlePostDesc">
Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
Eius labore saepe sint soluta modi iste, voluptates nemo 
rerum totam similique quisquam iusto ullam, ex necessitatibus quo 
aperiam ea! Voluptatibus soluta eum quisquam animi, recusandae quia optio 
sapiente fugit doloribus! Autem ullam quos reiciendis repudiandae corrupti,
 illum molestiae vel dolore, quasi nihil doloremque quisquam laborum tempore
  fugit qui ducimus nulla vitae. Molestias, aperiam? Quis, ea? Commodi, quidem 
  vero officia vel, consectetur, porro dolorem sunt aperiam doloribus libero cumque 
  distinctio. Sequi saepe aliquam odit ab, unde tempore fugiat ullam. Culpa facere, 
  omnis velit quo, veniam ab perferendis recusandae cupiditate dolorum nulla
   molestias inventore repudiandae modi laudantium placeat sapiente exercitationem?
    Rem ducimus repellendus molestiae maxime. Velit, quasi alias! Cumque ex excepturi
     eaque blanditiis dolor inventore in totam minus ea eius consectetur, possimus fugiat
      quasi aut incidunt consequuntur et explicabo sequi sapiente? Fugit, ab qui? Numquam
       provident autem hic quis explicabo ducimus, deleniti eligendi?                </p>
              
            </div>
        </div>
    )
}
