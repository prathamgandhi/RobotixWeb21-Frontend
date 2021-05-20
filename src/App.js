import React from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import Main from "./components/Main.jsx" 
import About from "./components/About.jsx"
import Pricing from "./components/Pricing.jsx"
import History from "./components/History.jsx"
import Pricing2 from "./components/Pricing2"
import Team from "./components/Team";
import Contact from "./components/Contact"
import Footer from"./components/Footer";


const cookies = new Cookies()
function renewUserToken() {
    return new Promise((resolve, reject) => {
        const refreshToken = cookies.get('refresh_token')
        return axios.post('/api/token/refresh/', {'refresh' : refreshToken})
        .then((response) => {
        resolve(response.data);
        })
        .catch((err) => {
        reject(err);
        });
    });
  }

axios.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      if (error.response && error.response.status === 401) {
        // Set Failed Request
        let failedRequest = error.config;
        
        //Method to get new token
        return renewUserToken().then(response => {
          // Set axios instance header
          axios.defaults.headers['Authorization'] = 'Bearer ' + response['access'];
          
          // Set failed request header
          failedRequest.headers['Authorization'] = 'Bearer ' + response['access'];

          //Set cookie
          cookies.set('token', response['access'], {path : '/'})
          
          //Retry failed request
          return axios.request(failedRequest);
        });
      }
      throw error;
    },
);


function App() {
  return (
    <div>
     <Main /> 
     <About />
     <Pricing />
     <History />
     <Pricing2 />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
