import React from 'react'
import { Button } from '../button/Button'

const Form = () => {
  return (
    <div>
      <form className='flex flex-col w-2/4 py-8 px-4 rounded-lg border border-gray-300 my-8 mx-auto shadow-lg bg-white'>
        <label htmlFor="firstname" className='flex items-center py-3 px-6'>
          First Name
            <input type="text" name='firstname' className='py-1 px-2 rounded-lg border border-gray-500 ml-6 outline-none' placeholder='First Name'/>
        </label>
        <label htmlFor="lastname"  className='flex items-center py-3 px-6'>
          Last Name
          <input type="text" name='lastname' className='py-1 px-2 rounded-lg border border-gray-500 ml-6 outline-none' placeholder='Last Name'/>
        </label>
        <label htmlFor="email"  className='flex items-center py-3 px-6'>
          Email
          <input type="email" name='email' className='py-1 px-2 rounded-lg border border-gray-500 ml-6 outline-none' placeholder='Email'/>
        </label>
        <label htmlFor="message"  className='flex items-start py-3 px-6 '>
          Message
          <textarea name="message" id="message" cols={40} rows={5} placeholder='Your Message' className='py-1 px-2 rounded-lg border border-gray-500 ml-6 outline-none '/>
        </label>
        <button type="submit" className='my-4 mx-auto'><Button>Send</Button></button>
      </form>
    </div>
  )
}

export default Form
