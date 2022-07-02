import TorobLogo from '../../assets/torobLogo.png';
import TorobLogo2 from '../../assets/torobLogo2.png';

import "./HeaderStyle.css"
import { Link } from 'react-router-dom';
import { useState } from 'react';
const SearchPage = () =>{
    const [logIn,setLogin] = useState(false);
    var innn = 'ورود / ثبت نام'
    var outt = 'امیرحسین ثابتی'
    return(
        <div class="container">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div class="SearchPageHeader">
                <div class="signUp">
                    <Link to={logIn?'/SignUpOrLogIn':'/profile'}>
                <button>{logIn ? innn:outt}</button>
                </Link>
                </div>
                <div className='searchAndDdown'>
                <div className='searchbar'>
                <div class='searchConsept'>
                    <i class="fa fa-search icon"></i>
                    <input type="text" dir='rtl' placeholder="نام کالا را وارد کنید"/>
                </div>
                <div>
                    <Link to={'/'}>
                    <img src={TorobLogo2} />
                    </Link>
                </div>
            </div>
            <div className='ddown'>
            <div class="dropdown">
                <button class="dropbtn">لپ تاپ
                 </button>
                 <div class="dropdown-content">
                    <a href="#">لب تاپ لنوو</a>
                    <a href="#">لب تاپ ایسوس</a>
                    <a href="#">لب تاپ اپل</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">موبایل و تبلت 
                 </button>
                 <div class="dropdown-content">
                    <a className='maincategory' href="#">گوشی موبایل</a>
                    <a href="#">گوشی سامسونگ</a>
                    <a href="#">گوشی شیایمی</a>
                    <a href="#">گوشی اپل</a>
                    <a className='maincategory' href="#">تبلت</a>
                    <a href="#">تبلت سامسونگ</a>
                    <a href="#">تبلت شیایمی</a>
                    <a href="#">تبلت اپل</a>
                </div>
            </div>
            </div>  
            </div>
            </div>            
        </div>
    )
}

export default SearchPage;