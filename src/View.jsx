import React from 'react'
import { viewEmploy } from './services/allApi'
import { useEffect,useState } from 'react'
import Edit from './Edit'
import { deleteEmploy } from './services/allApi'
import { toast } from 'react-toastify'
function View() {

    const [view,setView]=useState()

    const getEmploy=async()=>{
        const result=await viewEmploy()
        console.log(result.data)
        setView(result.data)
    }
    console.log(view)

    const handledelete=async(id)=>{
        const result=await deleteEmploy(id)
        if(result===200){
            getEmploy()
        }
        else{
            toast.warning('item not deleted')
        }
        console.log(result)
    }

    useEffect(()=>{
        getEmploy()
    },[])

return (
    <div className='container mt-5'>
        <h1>List of Employees</h1>
      <table className='table'>
        <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>gender</th>
                <th>email</th>
                <th>salary</th>
            </tr>
        </thead>
        <tbody>
            {
                view?.map(item=>(
        
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.gender}</td>
                        <td>{item.email}</td>
                        <td>{item.salary}</td>
                        <td><Edit data={item} /></td>
                        <td><button className='btn btn-danger' onClick={()=>{handledelete(item._id)}}>Delete</button></td>
                    </tr>
                ))
            }
        </tbody>
      </table>
    </div>
  )
}

export default View
