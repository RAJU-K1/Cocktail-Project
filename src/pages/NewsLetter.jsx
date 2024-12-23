import axios from 'axios'
import React from 'react'
import { Form, redirect, useNavigation } from 'react-router-dom'
import { toast } from 'react-toastify'

const newsletterUrl='https://www.course-api.com/cocktails-newsletter'

export const action =async({request})=>{
  const formData=await request.formData();
  const data=Object.fromEntries(formData);
  try{
    const response=await axios.post(newsletterUrl,data);
    toast.success(response.data.msg);
    return redirect('/')
  }
  catch(error){
    console.log(error);
    toast.error(error?.data?.msg)
  }
  return null;
}
const NewsLetter = () => {
  const navigation=useNavigation();
  const isSubmitting=navigation.state==="submitting";

  return (
   <Form method='POST' className='form'>
    <h4 style={{textAlign:"center",marginBottom:"2rem"}}>our newsletter</h4>
    <div className='form-row'>
      <label htmlFor="lastName" className='form-label'>name</label>
      <input type="text" className='form-input' name="name" id="name" defaultValue="flm" />

    </div>
    <div className='form-row'>
      <label htmlFor="name" className='form-label'> last name</label>
      <input type="text" className='form-input' name="lastName" id="lastName" defaultValue="eduTech" />


    </div>
    <div className='form-row'>
      <label htmlFor="email" className='form-label'>E-mail</label>
      <input type="email" className='form-input' name="email" id="email" defaultValue="test@test.com" />

    </div>
    <button className='btn btn-block' type='submit' disabled={isSubmitting}>Submit</button>
   </Form>
  )
}

export default NewsLetter