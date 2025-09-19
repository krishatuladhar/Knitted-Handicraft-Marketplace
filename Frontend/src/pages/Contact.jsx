import React from 'react'
import Title from '../components/Title'
import assets from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full mf:max-w-[480px]' src={assets.Contact} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold test-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>Bhotahity, Kathmandy</p>
          <p className='text-gray-500'>Tel: (+977) 5256666 <br /> Email: contact@weaveleaf.com</p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default Contact
