
import { useContext, useEffect } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UseAxiosSecure = () => {
    const {logOut} = useContext(AuthContext)
    const navigate = useNavigate()
    const axiosInstance = axios.create({
      baseURL: "https://car-rental-d77a7.web.app/",
      baseURL: "https://assignment-11-server-gamma-one.vercel.app",
    });
    useEffect(()=>{
        axiosInstance.interceptors.response.use(response=>{
            return response;
        }, error=>{
            if(error.status === 401 || error.status === 403){
                logOut()
                .then(res=>{
                    navigate("/login")
                })
                .catch(err=>{
                    console.log(err);
                })
            }
            return Promise.reject(error)
        })
    },[])
    return axiosInstance;
};

export default UseAxiosSecure;

