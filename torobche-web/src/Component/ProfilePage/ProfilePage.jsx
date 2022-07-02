import Header from '../Header/Header'
import Favirote from './Favorite'
import Card from '../Card/Card'
import './ProfilePageStyle.css'
import RegisterShopping from './RegisterShopping'
import MyStore from './MyStore'
import { useState } from 'react'
import LastSeen from './LastSeen'

const Profile = ()=>{
    const [Page,SetPage] = useState('favorite')
    const [shopperRegister,SetshopperRegister] = useState(true)
    return(
        <div className="showContainer">
            <div className='VerticalNavbar2'>
            <ul>
                <li>
                    <p>اطلاعات شخصی</p>
                    <div class="line-1"></div>
                    <p>امیرحسین ثابتی</p>
                    <p>a.sabeti12@gmail.com</p>
                    <p></p>
                </li>
                <div class="line-1"></div>

                <li>

                    <button className='favirotP' onClick={()=>{SetPage('favorite')}}>محبوب های من</button>
                    <button className='myshopping' onClick={()=>{SetPage('myshopping')}}>فروشگاه های من</button>
                    <button className='lastseen' onClick={()=>{SetPage('lastSeen')}}>آخرین بازدید</button>
                    <button className='editPrf'>ویرایش پروفایل</button>

                    
                </li>
                <div class="line-1"></div>
                <li>
                    <button className='logout'>خروج از حساب کاربری</button>
                </li>


            </ul>

            </div>
            <Header/>
            {Page == 'favorite' && <Favirote/>}
            {Page == 'myshopping'&& shopperRegister && <RegisterShopping/>}
            {Page == 'lastSeen' && <LastSeen/>}

        </div>
    )

}

export default Profile;