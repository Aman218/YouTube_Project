import { Link,useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import './SignIn.css';
import { useState } from "react";
import YoutubeIcon from '../assets/Youtube_Icon.png';

function SignUp(){
  const navigate = useNavigate();

  const [user_details,setUserDetails]=useState({
    name:'',
    email:'',
    password:''
  });
  const [msg,set_msg]=useState('');
  const [err_msg,set_err_msg]=useState('')

  function handleNameChange(e){
    setUserDetails({...user_details,name:e.target.value});
    set_err_msg('')
  }
  function handleEmailChange(e){
    setUserDetails({...user_details,email:e.target.value});
    set_err_msg('')
    

  }
  function handlePassChange(e){
    setUserDetails({...user_details,password:e.target.value});
    set_err_msg('')
  }
  function handleSubmit(e) {
    e.preventDefault();

    // Validate inputs
    if (!user_details.name || !user_details.email || !user_details.password) {
        set_err_msg("All fields are required!");
        return;
    }

    // Perform the registration request
    fetch('https://youtube-project-py16.onrender.com/register', {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            userName: user_details.name,
            userEmail: user_details.email,
            userPassword: user_details.password
        })
    })
    .then(response => {
        // Check if response is ok (successful)
        if (!response.ok) {
            // If the response is not successful, parse the error response
            return response.json().then(data => {
              console.log(data)
                return Promise.reject(data.Message || 'Registration failed'); // Reject with the error message from the backend
            });
        }
        return response.json(); // If successful, parse the response as JSON
    })
    .then(data => {
        // If registration is successful
        set_msg('Registration is Successful');
        set_err_msg(''); // Clear any error message

        // Redirect to SignIn page after successful registration
        setTimeout(() => {
            navigate('/SignIn');
        }, 1000);
    })
    .catch(error => {
        // If an error occurs or registration fails, display the error message
        set_err_msg(error); // Display error message from backend or fallback message
        set_msg(''); // Clear any success message
    });

    // Clear the input fields after submission
    setUserDetails({
        name: '',
        email: '',
        password: ''
    });
}

    return (
        <>
            <div id='outer-div' className="flex h-[80vh] w-[85%] mx-auto my-5 mt-[4rem]  justify-center items-center text-white flex-col">
        <div id='inner-div' className="  bg-[#212121] w-[60%]  rounded-[0.8rem] flex flex-col items-center">
          <div className="flex items-center">
            <img src={YoutubeIcon} width='60px' height='100px' alt="" />
            <h1 className="font-bold">YouTube Sign Up</h1> 
            <Link to='/'><span className="mx-5 text-[#ff0000]"><HomeIcon/></span></Link>
          </div>
          <form onSubmit={(e)=>{handleSubmit(e)}} action="" className="w-[100%]  flex flex-col items-center">
            {err_msg&&<div className="text-[#ff0000]">{err_msg}</div>}
            {msg&&<div className="text-green-600">Registration Successful</div>}
          <div  className="my-4 input-box w-[60%]">
            <input  className="placeholder-[#212121] font-bold placeholder:font-semibold  border-[#ff000000] text-black outline-none focus:outline-1 focus:outline-[#ff0000] w-[100%] py-[0.4rem] px-4" type="text" value={user_details.name} name="" id="name" placeholder="Enter Name" onChange={(e)=>{
              handleNameChange(e)
            }} />
          </div>
          <div  className="my-4 input-box w-[60%]">
            <input  className=" placeholder-[#212121] font-bold placeholder:font-semibold border-[#ff000000] text-black outline-none focus:outline-1 focus:outline-[#ff0000] w-[100%] py-[0.4rem] px-4" type="email" value={user_details.email} name="" id="email" placeholder="Enter Mail" onChange={(e)=>{
              handleEmailChange(e)
            }}  />
          </div>
          <div className="my-4 input-box w-[60%]" >
            <input  className="placeholder-[#212121] font-bold placeholder:font-semibold  border-[#ff000000] text-black outline-none focus:outline-1 focus:outline-[#ff0000] w-[100%] py-[0.4rem] px-4 "  value={user_details.password} type="password" name="" id="password" placeholder="Enter Password" onChange={(e)=>{
              handlePassChange(e)
            }}  />
          </div>
          <div className="my-4  input-box w-[60%] bg-[#ff0000] text-center" >
            <button className="w-[100%] py-[0.4rem] hover:font-bold px-4 hover:bg-[#ef3333]">Submit</button>
          </div>
          </form>
          <div id='text' className="mb-8">
            <span>Already have an account?</span> <Link to='/SignIn'><button className=" hover:text-[#ef3333]  hover:underline text-[#ff0000] font-bold ">SignIn/LogIn here</button></Link> 
          </div>
         
        </div>
      </div>
        </>
    )
}
export default SignUp;