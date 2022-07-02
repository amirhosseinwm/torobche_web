import Header from '../Header/Header'
import './DetailPage.css'
import Seller from '../Seller/Seller'
import { useState } from 'react'
const DetailPage = props =>{

    const [isInfo, setIsInfo] = useState(false);
    const handleInfo = ()=>{
        setIsInfo(true);
    };

    return(
        <div>
            <Header/>

        <div className='detailContainer'>
            <div className='title'>
                <h1>
                گوشی
                </h1>
            </div>
            <div className='description'>
                منشس کشنیسش تنسمیشبت ردشسیدر م شمسینتدکش دسشی .شیسنشیسبکنن.سشینبکشس
                سشیبکمنشسی
            </div>
            <div className='price'>از ۲۱۰۰۰۰ تومان تا ۳۲۰۰۰۰۰ تومان</div>
            <div className='shopingStore'> 
                <h3>فروشگاه‌های اینترنتی</h3>
                <div className='Sellers'>
                <Seller></Seller>
                <Seller></Seller>

                </div>
            </div>

        </div>
        </div>
        )
}
export default DetailPage;