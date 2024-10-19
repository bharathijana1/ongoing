import React from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

const Schema = yup.object().shape({
  name: yup.string().required("pls enter a name"),

})

const PersonalDetails = () => {

      const { register, handleSubmit, formState:{errors, isValid, isDirty} } = useForm({
        resolver: yupResolver(Schema),
        mode: 'onChange'
    });

  return (
    <div className='container bg-red-400 border-2 border-red-700 p-5'>
      <form action="" onSubmit={handleSubmit((data) => { console.log("hello");
       })}>
        <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="" id="" placeholder='enter your name' />
        <p>{errors.name?.message}</p>

        <button type='submit' disabled= {isDirty && !isValid }>Submit</button>

        </div>
        
       </form>
      
      
    </div>
  )
}

export default PersonalDetails
