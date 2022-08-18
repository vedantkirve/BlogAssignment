import "./BlogList.css"

function BlogList(){
    return <>
        <div className="bloglist">
            <div className="bloglist_info">
                <p className="name">Shubham Ram</p>
                <h1 className="title">The Product Cult Shift</h1>
                <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.</p>
                <p>Aug 15</p>
            </div>
            <div>
                <img src="https://picsum.photos/300/200" alt="1"/>
            </div>
        </div>
    </>
}

export default BlogList