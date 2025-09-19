import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
    const [visible, setVisible] = useState(false);
    const location = useLocation();

    useEffect(()=>{
        if(location.pathname !== '/Collections' && showSearch){
            setVisible(false);
        }
        else{
            setVisible(true);
        }
    },[location])

    return showSearch && visible ? (
    <div className='border-t border-b bg-gray-50 text-center'>
        <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx- rounded-full w-3/4 sm:w-1/2'>
            <input value={search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' type="text" placeholder='Search' />
            <FontAwesomeIcon icon={faMagnifyingGlass} 
            className='w-4'
            />
        </div>
        <FontAwesomeIcon icon={faXmark} 
        className='inline w-3 cursor-pointer pl-2'
        onClick={()=>setShowSearch(false)}
        />
    </div>
  ): null
}

export default SearchBar
