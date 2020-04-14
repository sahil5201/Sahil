import Axios from 'axios';
import { API_URL } from '../const';

export const fetchData = (path="task") => {
    return (useDispatch) => {
        Axios.get(API_URL+path).then(response=>{
            useDispatch(GET(response.data))
        })
    }
}

export const insertData = (path="task",PostData,DataPath="task") => {
    return (useDispatch) => {
        console.log(PostData);
        Axios.post(API_URL+path,PostData)
          .then(function (response) {
            console.log(response);
            if(!response.data.error){
              setTimeout(() => {
                useDispatch(fetchData(DataPath))  
              }, 200);                
            }    
          })
          .catch(function (error) {
            console.log(error);
          });
    }
}

export const GET = data => {
    return {
        type: 'GET',
        payload: data
    }
}

export const insert = () => {
    return {
        type: 'INSERT',
    }
}

export const update = () => {
    return {
        type: 'UPDATE',
    }
}

export const Delete = () => {
    return {
        type: 'DELETE',
    }
}

export const Check = () => {
    return {
        type: 'Check',
    }
}