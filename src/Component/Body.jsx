import { Box, Stack , Typography } from "@mui/material";
import SideBar from "./SideBar";




function Body (){
    return (
<Stack sx={{flexDirection:{sm:"column", md:"row"}}} > 
<Box sx={{height:{sx:'auto', md:'92vh'} , borderRight:'1px solid #3d3d3d' , px:{sx:0 , md:2}}} > 
{/* added the side bar  */}
<SideBar/>

<Typography className="copyright"  variant= "body2" sx={{mt:15 , color:'#fff'}}>
    CopyRight 2023 Sunny 
</Typography>

</Box>

</Stack>
    );
}

export default Body;