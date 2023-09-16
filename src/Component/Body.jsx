import { Box, Stack , Typography } from "@mui/material";
import SideBar from "./SideBar";
import Videos from "./Videos";
import { fetchFromApi } from "../utils/fetchFromApi";
import { useEffect, useState } from "react";




function Body (){

    const [selectedState , setSelectedState] = useState("New");

    useEffect(() => {
     fetchFromApi(`search?part=snippet&q=${selectedState}`);
    },  [setSelectedState] );
    return (
<Stack sx={{flexDirection:{sm:"column", md:"row"}}} > 
<Box sx={{height:{sx:'auto', md:'92vh'} , borderRight:'1px solid #3d3d3d' , px:{sx:0 , md:2}}} > 
{/* added the side bar  */}
<SideBar selectedState = {selectedState} setSelectedState={setSelectedState} />

<Typography className="copyright"  variant= "body2" sx={{mt:15 , color:'#fff'}}>
    CopyRight 2023 Sunny 
</Typography>

</Box>  

<Box p={2}>
    <Typography variant="h4" fontWeight="bold" mb={2} sx={{color:"white"}} >
   {selectedState} <span style={{color:'#F31503'}}> Videos</span>
    </Typography>
    {/* Now Render the videos section  */}
    <Videos/>
</Box>


</Stack>
    );
}

export default Body;