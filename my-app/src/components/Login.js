import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { FaFacebook ,FaTwitterSquare,FaGooglePlus} from "react-icons/fa";
import { useState } from 'react';

const Login = () => {
  const [inpval,setinpval] = useState({
    name:"",
    password:"",
   
  })
  const getdata = (e) =>{
    const {value,name} = e.target;
    setinpval(()=>{
      return{
        ...inpval,
        [name]:value
      }
    })

  }
  const addData = (e) =>{
    // e.target.value()
    e.preventDefault()
    alert("form succesful")
  }


  return (
    <div className=' login '>
    <form className='bg-white '>
    <h2 className='text-center pt-4 text-lg'>Login</h2>
     <label className='ml-11 '>Username</label>
        <div className='pt-4'>
        <input type='text'  placeholder='Type your username' name='name' onChange={getdata} className='ml-11 pt-0' required/>
        </div>

        <label className='ml-11'>Password </label>
     <div className='pt-4'>
      <input type='password'  placeholder='Type your password' name='password' onChange={getdata} className='ml-11 pt-0' required/>
     </div>
     
     <p className='ml-96 text-sm'>Forgot password?</p>
    
     <button type='submit' onClick={addData} className='bg-cyan-600 w-96'>Login</button>
     
     <p className='ml-44 mt-11 text-sm'> Or  <Link to='/signup'> Sign Up</Link> Using</p>
     
     <span className='flex ml-40 mt-6 text-3xl '>  <FaFacebook className='m-2 text-3xl text-cyan-900'/> 
     <FaTwitterSquare className='m-2 text-3xl text-blue-600'/> 
     <FaGooglePlus className='m-2 text-3xl text-red-500'/> </span>       
     <p className='ml-44 mt-20 text-sm'> Or  <Link to='/signup'> Sign Up</Link> Using</p>
     <p className=' text-center  font-bold '>SIGN UP</p>
     </form> 
        
    </div>
  )
}

export default Login
