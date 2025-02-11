import { Link,useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import './SignIn.css';
import { useState } from 'react';
import YoutubeIcon from '../assets/Youtube_Icon.png';
function SignIn() {
  const navigate = useNavigate();
  const [user_details,setUserDetails]=useState({
    email:'',
    password:''
  });
  const [msg,set_msg]=useState('');
  const [err_msg,set_err_msg]=useState('');
  function handleEmailChange(e){
    setUserDetails({...user_details,email:e.target.value})
    set_err_msg('')
  }
  function handlePassChange(e){
    setUserDetails({...user_details,password:e.target.value})
    set_err_msg('')
  }
  function handleSubmit(e) {
    e.preventDefault();

    if (!user_details.email || !user_details.password) {
        set_err_msg("All fields are required!");
       
        return;
    }

    // Perform the login request
    fetch('https://youtube-project-py16.onrender.com/login', {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            userEmail: user_details.email,
            userPassword: user_details.password
        })
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(data => {
              console.log(data)
                // If the response is not OK, reject the promise with the error message
                return Promise.reject(data.message || 'Login failed');
            });
        }
        return response.json(); // If successful, parse the response as JSON
    })
    .then(data => {
        // If login is successful
        console.log(data);
        localStorage.setItem('token',data.tokenNumber);
        localStorage.setItem('Name',data.user.Name);
        console.log(data.user.email)
        localStorage.setItem('Email',data.user.email)
        set_msg('Logged In Successfully');
        set_err_msg(''); // Clear any error message
        setTimeout(() => {
            navigate('/');  // Use navigate to redirect to the homepage
        }, 900);
    })
    .catch(error => {
        // If an error occurs or login fails
        console.log(error);
        set_err_msg(error); // Display error message (e.g., "User not found")
        set_msg(''); 
       
    });

   
    setUserDetails({
        email: '',
        password: ''
    });
}
  return (
    <>
      <div id='outer-div' className="flex h-[80vh] w-[85%] mx-auto my-5 mt-[4rem]  justify-center items-center text-white flex-col">
        <div id='inner-div' className=" bg-[#212121] w-[50%]  rounded-lg flex flex-col items-center">
          <div className="flex mt-1 items-center">
            <img src={YoutubeIcon} width='60px' height='100px' alt="" />
            <h1 className="font-bold ">YouTube Login</h1>
            <Link to='/'><span className="mx-5 text-[#ff0000]"><HomeIcon/></span></Link>
          </div>
           <form action="" onSubmit={(e)=>{handleSubmit(e)}} className="w-[100%]  flex flex-col items-center">
           {err_msg&&<div className="text-[#ff0000]">{err_msg}</div>}
           {msg&&<div className="text-green-600">{msg}</div>}
          <div  className="my-4 input-box w-[65%]">
            <input  className=" font-bold  border-[#ff000000] text-black outline-none focus:outline-1 focus:outline-[#ff0000] w-[100%] py-[0.4rem] px-4 placeholder-[#212121] placeholder:font-semibold" type="email" name="" id="mail-box" placeholder="Enter Mail" value={user_details.email} onChange={(e)=>{
              handleEmailChange(e)
            }} />
          </div>
          <div className="my-4 input-box w-[65%]" >
            <input  className=" font-bold placeholder-[#212121] placeholder:font-semibold border-[#ff000000] text-black outline-none focus:outline-1 focus:outline-[#ff0000] w-[100%] py-[0.4rem] px-4 " type="password" name="" id="password-box" placeholder="Enter Password" value={user_details.password} onChange={(e)=>{
              handlePassChange(e)
            }} />
          </div>
          <div className="my-4  input-box w-[65%] bg-[#ff0000] text-center" >
            <button className="w-[100%] py-[0.4rem] hover:font-bold px-4 hover:bg-[#ef3333]">Submit</button>
          </div>
          </form>
          <div id='text' className='mb-11'>
           
            <span>Don't have an account?</span> <Link to='/SignUp'> <button className=" hover:text-[#ef3333] hover:underline  text-[#ff0000] font-bold ">Sign Up here</button> </Link> 
          </div>
        </div>
      </div>
    </>
  )
}
export default SignIn;