import React from 'react'
import { useState } from 'react'
import { addEmploy } from './services/allApi'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'


function Form() {

  const [data, setData] = useState()
  console.log(data)

  const register=async(e)=>{
    e.preventDefault()
    const {id,name,gender,email,salary}=data
    if(!id || !name || !gender || !email || !salary){
     toast.warning('enter all values')
    }
    else{
      const result=await addEmploy(data)
      console.log(result)
     if(result.status === 200){
      toast.success("Registration successfull!!")
     }
     else{
      toast.danger("Registration failed..")
     }
    }
  }




  return (

    <div className='d-flex justify-content-center align-item-center'>
      <form action="">
        <h1>Registration form</h1>
        id: <input type="number" name='id' className='form-control mt-3' onChange={(a)=>setData({...data,id:a.target.value})}  />
        name: <input type="text" name='name' className='form-control mt-3' onChange={(a)=>setData({...data,name:a.target.value})}  />
        gender: <input type="radio" value="male" name='gender' className='form-check-input ' onChange={(a)=>setData({...data,gender:a.target.value})}  />male
        <input type="radio" value='female' name='gender' className='form-check-input ' onChange={(a)=>setData({...data,gender:a.target.value})}  />female <br />
        email: <input type="email" name='email' className='form-control mt-3'onChange={(a)=>setData({...data,email:a.target.value})}  /> <br />
        salary: <input type="number" name='salary' className='form-control mt-3' onChange={(a)=>setData({...data,salary:a.target.value})}  />

        <button className='btn btn-success m-3' onClick={(e)=>register(e)}>register</button>
         <Link to='/view'><button className='btn btn-info m-3'>View</button></Link> 
      </form>

    </div>
  )
}

export default Form
