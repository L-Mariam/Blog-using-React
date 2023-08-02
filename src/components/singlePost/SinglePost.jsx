import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img 
                  src="https://images.pexels.com/photos/1834393/pexels-photo-1834393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="" className="singlePostImage" />
       <h1 className="singlePostTitle"> Lorem ipusm die soloeeyr sp
       <div className="singlePostEdit">
       <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
       <i className="singlePostIcon fa-regular fa-trash"></i>
       </div>

        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor"> Author: <b> Lena </b></span>
            <span className="singlePostDate"> 1 hour ago</span>
        </div>
       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora soluta ipsa placeat, perferendis nesciunt iusto deleniti expedita quasi velit libero distinctio blanditiis ipsam praesentium voluptates in temporibus hic eos. Debitis?
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque sunt nemo deleniti, provident autem consectetur quia veniam ipsum, quae ab enim tempore libero nam? Enim soluta esse veniam repellendus natus.
       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus ab autem dicta quaerat aliquam eius accusantium impedit atque. Aperiam iste sint velit harum molestiae est ea vel aspernatur dolor veniam.
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint repellat, consequatur nulla excepturi eius dignissimos doloremque nobis sapiente laborum fugiat velit minima officiis placeat asperiores illum temporibus adipisci aspernatur repellendus.
       </p>
        </div>
    </div>
  )
}
