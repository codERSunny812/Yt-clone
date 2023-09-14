/* eslint-disable no-unused-vars */
import { useState }from 'react'
import { Paper , IconButton } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Search } from '@mui/icons-material'

const SearchBar = () => {
  return (
    <Paper component="form" onSubmit={()=>{ }} sx ={{borderRadius:20, border: " 1px solid #e3e3e3" , pl:2 , mr:{sm:5} , boxShadow:'none' }} > 
      <input  className='search-bar' placeholder='Please Search Something ...' value= "sunny" onChange={()=>{}} /> 
      <IconButton type='submit' sx={{p:'10px',color:'black'}}>
        <Search />

      </IconButton>
    </Paper>
  )
}

export default SearchBar