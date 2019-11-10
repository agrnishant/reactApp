import axios from "axios";
import {toast} from 'react-toastify'
import * as Sentry from '@sentry/browser';

axios.interceptors.response.use(null, error => {
    console.log('INTERCEPTOR CALLED FOR ERROR CASE');
    const expectedError = error.response && 
                          error.response.status >= 404 && 
                          error.response.status < 500;
    if(!expectedError){
      Sentry.captureException(error);
      console.log('Unexpected error:', error);
      toast('Op failed - Unexpected Error!!!');
    }
    else{
      console.log('logging expected error:', error);
    }
    return Promise.reject(error);
});
export default{
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
}
