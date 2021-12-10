import React from "react";
import axios from "axios";

function IceBreaker() {
  const [posts, setPosts] = React.useState<any[]>([]);

  React.useEffect(() => {
    axios
      .get("http://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <div className="mb-3">
                <h4>What is your abc?</h4>
            </div>
            <div className="mb-3">
              <label>Answer</label>
              <textarea className="form-control"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div> 
        </div>
        
        <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h4>Submit to show answer from <label>User 2</label></h4>
          </div>
        </div>
        </div>
      </div>
    </div>
   
    // <ul className="posts">
    //   {posts.map((post) => (
    //     <li className="post" key={post.id}>
    //       <h4>{post.title}</h4>
    //       <p>{post.body}</p>
    //     </li>
    //   ))}
    // </ul>
  );
}

export default IceBreaker;