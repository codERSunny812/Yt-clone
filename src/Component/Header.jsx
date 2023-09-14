import { Link } from "react-router-dom";
// import { logo } from "../utils/constant";
import { Stack } from "@mui/material";
import logo from "./Logo/favicon.png"; 
import SearchBar from "./SearchBar";


function Header (){
    return (
<Stack 
alignItems="centre" 
p={2}
direction="row" 
sx={{position:"sticky" , 
top:0, 
backgroundColor:"#040D12" , justifyContent:"space-between"}}>
    <Link to="/" style={{display:"flex" , alignItems:"centre"}}> 
    <img  src={logo} alt="logo" height={45} /> 
     </Link>
     <SearchBar />

</Stack>
    );
}

export default Header;