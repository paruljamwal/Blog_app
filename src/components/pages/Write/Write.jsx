import './Write.css'

export const Write = () => {
  return (
    <div className='write'>
        <img className='writeImage' src="https://media.istockphoto.com/photos/blooming-beautiful-pink-cosmos-flowers-garden-against-warm-sunlight-picture-id1066882614?k=20&m=1066882614&s=612x612&w=0&h=oaJexEXJ4wLlqe2teUJy95tobnSFMQ5r9iVw11lc2Mk=" alt="" />
        <form className='writeForm'>
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id='fileInput' style={{display:'none'}}/>
                <input type="text" placeholder='Title' className='writeInput' autoFocus={true}/>

            </div>
            <div className='writeFormGroup'>
                <textarea placeholder='Tell your story' type="text" className='writeInput writeText'></textarea>
            </div>
            <button className='writeSubmit'>Publish</button>
        </form>
    </div>
  )
}
