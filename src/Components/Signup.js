import React ,{useState,useEffect} from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";



function Login()
{
    const history=useNavigate();
    const [email,SetEmail]=useState('');
    const [password,SetPassword]=useState('');
    async function submit(e)
    {
        e.preventDefault();
        try
        {
           await axios.post("http://localhost:8000/signup",{email,password}).then(res=>{
            if(res.data=="Exist")
            {
                alert("User already exist")
                // history("/home",{state:{id:email}});
            }
            else if(res.data=="Not Exist")
            {
                history("/home",{state:{id:email}});
            }
        }).catch(e=> {
            alert("Wrong details");
            console.log(e);
        })
        }
        catch(e)
        {
            console.log(e);
        }


    }









    return(<>
    <div className="login">
        <h1>Signup</h1>
        <form action="POST">
            <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" name="" id=""></input>
            <input type="password"value={password}  onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" name="" id=""></input>

            <input type="submit" onClick={submit}></input>
        </form>
        <br/><p>OR</p>
        <br/>
        <Link to="/">Login Page</Link>






    </div>
    
    
    </>)
}
export default Login;