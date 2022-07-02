import './Registershop.css'
import './MyStore'
import { useState } from 'react'
import MyStore from './MyStore'

const RegisterShopping = () => {
    const [confirm,setConfirm] = useState(false)
    if(!confirm){
    return(
        <div className="Registershop">
            <div className='reg'>
            <h1 className='registerTitle'>.شما باید شماره موبایل خود را ثبت کنید</h1>
            <input className="registerInput" type="number" />
            <br />
            <button className='registerbtn' onClick={()=>{setConfirm(true)}}>ثبت شماره موبایل</button>
            </div>
        </div>
    )
    }
    else{
        return(
            <MyStore/>
        )
    }
}

export default RegisterShopping;