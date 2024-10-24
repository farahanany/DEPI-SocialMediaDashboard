import {postDataApi} from '../../utils/fetchDataApi';
import {ALERT_TYPES} from './alertActions'



export const TYPES={
    AUTH:'AUTH'
}
export const login=(data)=>async (dispatch)=>{
   
    try{
  dispatch({
    type:ALERT_TYPES.ALERT,
    payload:{
        loading:true,
        
    }
  })


   const res=await postDataApi('login',data)
   dispatch({
    type:'AUTH',
    payload:{
        token:res.data.access_token,
        user:res.data.user
    }  
 })

    localStorage.setItem('login',true);
    dispatch({
        type:ALERT_TYPES.ALERT,
        payload:{
            success:res.data.msg
        }


    })
    } catch(error){
    console.log(error)
    dispatch(
        {
            type:ALERT_TYPES.ALERT,
            payload:{
                error:error.response.data.msg,
            }
        }
    )
    }
}

export const logout =()=>async(dispatch)=>{
    try{
        localStorage.removeItem('login');
        await postDataApi('logout');
        window.location.href='/';

    } catch(error){
        console.log(error)
        dispatch(
            {
                type:ALERT_TYPES.ALERT,
                payload:{
                    error:error.response.data.msg,
                }
            }
        )
    }
   
}