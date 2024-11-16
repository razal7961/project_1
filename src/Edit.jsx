import React from 'react'
import { Modal, ModalBody,Button } from 'react-bootstrap'
import { useState } from 'react' 
import { editEmploy } from './services/allApi'
import { toast } from 'react-toastify'

function Edit({data}) {

  const [edit,setEdit]=useState({
    id:data.id,
    name:data.name,
    gender:data.gender,
    email:data.email,
    salary:data.salary

  })

    const [show,setShow]=useState(false)

    const handleclose=()=>setShow(false)
    const handleshow=()=>setShow(true)

    const handle=async(id)=>{
      const result=await editEmploy(id,edit)
      console.log(result)
      if(result.status===200){
        handleclose()
        toast.success('edit successful')
      }
    }

console.log(edit)

  return (
    <div>
        <Button variant="primary" onClick={handleshow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleclose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>


 <ModalBody>
    <form action="">
        id: <input type="number" className='form-control' defaultValue={edit.id} onChange={(a)=>setEdit({...edit,id:a.target.value})} />
        name: <input type="text" className='form-control' defaultValue={edit.name} onChange={(a)=>setEdit({...edit,name:a.target.value})} />
        gender: <input type="radio" name='gender' value="male" className='form-check-input' checked={edit.gender==="male"} defaultValue={edit.gender} onChange={(a)=>setEdit({...edit,gender:a.target.value})} />male
                 <input type="radio" name='gender' value="female" className='form-check-input' checked={edit.gender==="female"} defaultValue={edit.gender} onChange={(a)=>setEdit({...edit,gender:a.target.value})}  />female <br />
        email: <input type="email" className='form-control' defaultValue={edit.email} onChange={(a)=>setEdit({...edit,email:a.target.value})} />
        salary: <input type="number" className='form-control' defaultValue={edit.salary}onChange={(a)=>setEdit({...edit,salary:a.target.value})}/>  
        </form>
 </ModalBody>

 <Modal.Footer>
          <Button variant="primary" onClick={handleclose}>
            Close
          </Button>
          <Button variant='success' onClick={()=>{handle(data._id)}} >Update</Button>
        </Modal.Footer>


        </Modal>
      
    </div>
  )
}

export default Edit
