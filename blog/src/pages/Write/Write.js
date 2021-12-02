import './write.css'

function Write() {
    return (
        <div className="write">
        <img className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
        alt=""/>
            <form className="writeForm">
                <div className="writeFromGroup">
                    <label htmlFor="fileInput">
                    <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                    <input type="text" placeholder="title" className="writeInput" autoFocus={true}/>

                </div>
                <div className="writeFromGroup">
                    <textarea placeholder="Tell Your Story..." type="text" className="writeInput WriteText"></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}

export default Write
