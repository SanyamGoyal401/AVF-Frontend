import axios from 'axios';
import url from '../constants';



const app = axios.create({
    url: url.BaseUrl,
    withCredentials: false
})


// Add a request interceptor to include the JWT in the header
app.interceptors.request.use(
    (config) => {
      // Get the JWT token from localStorage or any other storage mechanism
      const token = localStorage.getItem('jwt'); // Adjust based on your token storage strategy
  
      if (token) {
        config.headers.Authorization = token;
      }
  
      return config;
    },
    (error) => Promise.reject(error)
  );

/* 
  The below is required if you want your API to return 
  server message errors. Otherwise, you'll just get 
  generic status errors.

  If you use the interceptor below, then make sure you 
  return an "err" (or whatever you decide to name it) message 
  from your express route: 
  
  res.status(404).json({ err: "You are not authorized to do that." })

*/
// app.interceptors.response.use(
//   response => (response), 
//   error => (Promise.reject(error.response.details))
// )

export default app;