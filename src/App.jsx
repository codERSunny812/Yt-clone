 import Body from "./Component/Body";
 import Header from "./Component/Header";
 import Footer from "./Component/Footer";
 import  { BrowserRouter , Routes , Route } from 'react-router-dom';
 import {Box } from "@mui/material";
 import VideoDetail from "./Component/VideoDetail";
 import ChannelDetail from "./Component/ChannelDetail";
 import SearchDetail from "./Component/SearchDetail";

 
 
 function App(){
  return (
    <BrowserRouter>
    <Box sx= {{ backgroundColor:"#000"}}>
    <Header />
    <Routes>
      <Route path="/" exact element={<Body/>} />
      <Route path="/VideoDetail/:id" element={<VideoDetail />} />
      <Route path="/ChannelDetail/:id"  element= {<ChannelDetail/>} />
      <Route path="/SearchDetail/:searchTerm"  element= {<SearchDetail/>} />
    </Routes>
    <Footer/>
    </Box>
    </BrowserRouter>
    
  );
 }

 export default App;