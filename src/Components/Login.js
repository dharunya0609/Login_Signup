import React ,{useState,useEffect} from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";



function Login()
{
    const history=useNavigate();

    const [email,SetEmail]=useState('');
    const [pwd,SetPwd]=useState('');
    async function submit(e)
    {
        e.preventDefault();
        try
        {
           await axios.post("http://localhost:8000/",{
            email,password
            }).then(res=>{
                if(res.data=="Exist")
                {
                    history("/home",{state:{id:email}});
                }
                else if(res.data=="Not Exist")
                {
                    alert("User haven't signed up")
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
        <h1>Login</h1>
        <form action="POST">
            Email

        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        Password
        <input
          type="password"
          value={pwd}
          onChange={(event) => setPwd(event.target.value)}
        />

            <input type="submit" onClick={submit}></input>
        </form>
        <br/><p>OR</p>
        <br/>
        <Link to="/signup">Signup Page</Link>






    </div>
    
    
    </>)
}
export default Login;