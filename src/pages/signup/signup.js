import React from 'react'
import { useState} from 'react'
import { SINGIN } from '../../DummyData/signin'
import { useNavigate} from 'react-router-dom'
import './signup.scss'
export const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
      const handleSubmit = (event) => {
        event.preventDefault();
        SINGIN.map((datas)=>{
            if(datas.username==email && datas.password==password){
                navigate('/checkout');
            }
        })
      }
    return (
        <div className='container text-left'>
            <div class="card" style={{width:"30rem", textAlign:"left",marginLeft:"30%",marginTop:"5%", marginBottom:"150px"}}>
                {/* <h5 class="card-header">Featured</h5> */}
                <div class="card-body" style={{justifyContent:"left"}}>
                    <h5 class="card-title"><b>Sign In</b></h5><br/>
                    <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" 
                     onChange={(e) => setEmail(e.target.value)}
                    id="exampleInputEmail1" aria-describedby="emailHelp" />
               </div><br/>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" 
                      onChange={(e) => setPassword(e.target.value)}
                      id="exampleInputPassword1" />
                </div><br/>
                <button type="submit" class="btn btn-primary" style={{width:"100%",borderRadius:"10px"}}>Submit</button>
            </form>
                </div>
            </div>
        </div>
    )
}
