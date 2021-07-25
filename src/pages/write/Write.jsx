import './write.css'
import imageUpload from '../../images/singlepost.jpeg'

export default function Write() {
    return (
        <div className='write'>
            <img src={imageUpload} alt="" className="writeImage" />
            <form 
             className="writeForm">
                 <div className="writeformGroup">
                     <label htmlFor="fileInput">
                     <i className=" inputFileIcon fas fa-plus-circle"></i>                     </label>
                <input type="file" id='fileInput' style = {{display:'none'}} />
                <input type="text" placeholder='Title' className='writeInput' autoFocus={true}/>

                 </div>

                 <div className="writeformGroup">

                     <textarea type='text' placeholder='Tell your story' className='writeInput writeInputText'></textarea>
                 </div>
                 <button className="writeSubmit">Publish</button>

             </form>
        </div>
    )
}
