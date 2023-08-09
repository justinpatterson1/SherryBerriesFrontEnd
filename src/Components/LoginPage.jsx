import React,{useContext,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import SherryBerries from '../assets/img/sherryBerries.png';
import BellyJewelryContext from '../context/BellyJeweryContext';
import jwt_decode from "jwt-decode";


function LoginPage() {
    const navigate = useNavigate()
    const {isLoggedIn, setIsloggedIn} = useContext(BellyJewelryContext)
    const [loginDetails,setLoginDetails] = useState({email:'',password:''})
    const [error,setError] = useState({message:''})

    const loginUser = async (evt)=>{
        evt.preventDefault();

        try {
         const res =  await fetch("http://localhost:4000/user/auth",{
                method:'POST',
                headers : {
                    'Content-Type': 'application/json',
                     
                },
                body:JSON.stringify(loginDetails)
            })

        
            if(res.status === 200){
                const json = await res.json()

                localStorage.setItem("token",json.jwt);
                const token = localStorage.getItem("token");
                const userInfo = jwt_decode(token);
                setIsloggedIn.user = userInfo;
                setError({message:''})

                navigate("/")
            } 

           
          

                    

                
        } catch(error){
            

                setError({message:'Incorrect Email / Password'})
                console.log(error)
                
            
        }
           
       

        //console.log(loginDetails)
      
    }
  return (
    <div className='h-screen '>
        <div className=' grid grid-cols-1 justify-items-center h-full bg-slate-100 '>
            <div className='grid grid-cols-1 justify-items-center h-3/4 px-10 rounded-lg bg-white mt-10 shadow-2xl'>
                <img src={SherryBerries}  className ='h-32 w-32 rounded-full  justify-self-center place-self-end mb-10' alt="" />
                 <span className='h-1 w-full text-center text-red-500'> {error.message}</span>
                <div className='w-full grid grid-cols-1 justify-items-center '>
                    <form action="" className='grid grid-cols-1  w-full justify-items-center gap-y-4 '>
                        <input type="text" placeholder='Email..' className='h-12 w-96 px-4 rounded-full border-2 border-black'
                            value={loginDetails.email} onChange={(evt)=>{setLoginDetails({...loginDetails,email:evt.target.value})}}/>
                        <input type="password"  placeholder='Password..' className='h-12 w-96 px-4 rounded-full border-2 border-black'
                            value={loginDetails.password} onChange={(evt)=>{setLoginDetails({...loginDetails,password:evt.target.value})}}/>
                        <button className='px-10 py-2 bg-green-400 text-white' onClick={loginUser}>Login</button>
                        
                    </form>
                    <a href="" className='mt-5'> Forgot Password ?</a>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default LoginPage