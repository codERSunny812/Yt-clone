/* eslint-disable react/jsx-key */
import { Stack } from "@mui/material"
import {categories} from '../utils/constant'

const selected  = 'New'; 

const SideBar = () =>(
    <Stack 
    direction="row" 
    sx={{
    overflowY:'auto' ,
    height:{
    sx:'auto' , md:'95%' } ,
    flexDirection:{md:"column"}

     }}>

        {
            categories.map((category ) =>(
                <button className="category-btn" style={{
                    background: category.name  === selected && '#CF3B7' , color:'grey' 
                }}
                key ={category.name}>
                    <span style ={{color: category.name  === selected ? 'grey' : '#CF3B7' , marginRight:'15px'}}>{category.icon }</span>
                    <span style = {{opacity : category.name  == selected ? '1':'0.8' }}>{category.name}</span>
                </button>
             ) )
        }

    </Stack>
  )


export default SideBar