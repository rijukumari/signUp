import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const SignUp = () => {
  const [inpval,setinpval] = useState({
    name:"",
    email:"",
    password:"",
    number:"",
    date:""

  })
  const getdata = (e) =>{
    const {value,name} = e.target;
    // console.log(value,name)
    setinpval(()=>{
      return{
        ...inpval,
        [name]:value
      }
    })

  }

  const addData = (e) =>{
    e.preventDefault()
    alert("form succesful")
  }
  return (
    <div>
    <div className=' login '>
    <form className='bg-white'>
    <h2 className='text-center'>SignUp</h2>
     <label className='ml-11'>Username</label>
        <div >
        <input type='text' name='name' placeholder='Type your username' onChange={getdata} className='ml-11' required/>
        </div>
     <label className='ml-11'>Email</label>
        <div >
        <input type='email' name='email' placeholder='Type your email' onChange={getdata} className='ml-11' required/>
        </div>

        <label className='ml-11'>Password</label>
     <div>
      <input type='password' name='password' placeholder='Type your password' onChange={getdata} className='ml-11' required/>
     </div>

     
     <div className='mt-4'>
      <input type='date' name='date' onChange={getdata}  className='ml-11' />
     </div>
     <div className='mt-4'>
      <input type='number'   className='ml-11' name='number' onChange={getdata} placeholder='Phone number'/>
     </div>

     
     <p className='ml-96 text-sm'>Forgot password?</p>
    
     <button type='submit' onClick={addData} className='bg-cyan-600 w-96'>Submit</button>
     </form>
    </div>
    <p className=' text-center   text-sm'> Or  <Link to='/login'> Sign In</Link> Using</p>

    </div>
  )
}

export default SignUp
