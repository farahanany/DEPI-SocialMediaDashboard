import React from 'react'
import {useSelector,useDispatch} from 'react-redux'

const Alert = () => {
    const {auth,alert}=useSelector(state=>state);
    console.log({auth,alert})
  return (
    <div>
    {alert.loading && <h3>Loading...</h3>}
    <h2>Alert</h2>



    </div>
  )
}

export default Alert