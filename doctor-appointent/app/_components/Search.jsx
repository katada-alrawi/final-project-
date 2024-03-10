"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import GlobalApi from '../_utils/GlobalApi'
import React, { useEffect, useState } from 'react'

function Search() {

  const [CategoryList,setCategoryList] = useState([])
  useEffect(() =>{

    getCategoryList()
 
  },[])

  const getCategoryList = () => {
    GlobalApi.getCategory({
      headers: {
        Authorization: 'Bearer YOUR_API_KEY',
      },
    })
      .then((res) => {
        console.log(res.data.data);
        setCategoryList(res.data.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  
  return (
    <div  className='mb-10 items-center flex flex-col gap-4'>
        <h2 className='font-bold
        text-4xl tracking-wide'>Search <span className='text-blue-400'> Doctors </span></h2>

        <h2 className='text-gray-500 text-2xl'>Search your Doctor and Book your <span className='text-blue-400'>Appointment </span> in one Click</h2>

        <div className="flex w-full mt-3 max-w-sm items-center space-x-2">
      <Input type="Text" placeholder="Search..." />
      <Button type="submit"> <SearchIcon /> Search </Button>
    </div>
    
    </div>
  )
}

export default Search