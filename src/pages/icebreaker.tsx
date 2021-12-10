import React, { useRef } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { SessionResponse } from "../models/session";

function IceBreaker() {
  const { sessionId } = useParams();
  const { userId } = useParams();
  
  const [users, setUsers] = React.useState<any[]>([]);
  const [session, setSession] = React.useState<any[]>([]);

  const pairedUserResponse: any = useRef<SessionResponse>(new SessionResponse(0,'',''));


  React.useEffect(() => {
    axios
      .get("http://localhost:3000/user")
      .then((response) => setUsers(response.data));
  }, []);

  React.useEffect(() => {
    axios
      .get(`http://localhost:3000/session/${sessionId}`)
      .then((response) => {
        setSession(response.data);
        console.log(response.data);
        pairedUserResponse.current = response.data.responses.find((s:SessionResponse)=> s.userId !== +(userId || '0'))
      });
  }, [sessionId, userId]);

  console.log(userId);
  console.log(sessionId);
  console.log(session);
  console.log(pairedUserResponse);

  function clickMe(e: any) {
    console.log('You clicked submit.');
  }

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
            <button type="submit" onClick={clickMe} className="btn btn-primary">Submit</button>
          </div>
        </div> 
        </div>
        
        <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h4>Submit to show answer from <label>{pairedUserResponse.current.userName}</label></h4>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default IceBreaker;