import axios from 'axios';

const BaseUrl = "https://youtube-v31.p.rapidapi.com";   

const options = {
  params: {
    part: 'snippet',
    videoId: 'M7FIvfx5J10'
  },
  headers: {
    // eslint-disable-next-line no-undef
    'X-RapidAPI-Key':process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const  fetchFromApi = async (url) =>{
   const { data } =   await axios.get(`${BaseUrl}/${url}`, options );
   return data;
}