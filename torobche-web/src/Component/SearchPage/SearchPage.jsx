import TorobLogo from '../../assets/torobLogo.png';
import "./SearchPageStyle.css"
import { Link } from 'react-router-dom';
const SearchPage = () =>{

    return(
        <div class="container1">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div class="SearchPageHeader1">
                <div class="signUp1">
                    <Link to={'/SignUpOrLogIn'}>
                <button>ورود/ ثبت نام</button>
                </Link>
                </div>
            <div className='ddown1'>
            <div class="dropdown1">
                <button class="dropbtn1">لپ تاپ
                 </button>
                 <div class="dropdown-content1">
                    <a href="#">لب تاپ لنوو</a>
                    <a href="#">لب تاپ ایسوس</a>
                    <a href="#">لب تاپ اپل</a>
                </div>
            </div>
            <div class="dropdown1">
                <Link to={'/ShowProducts'}>
                <button class="dropbtn1">موبایل و تبلت 
                 </button>
                 </Link>
                 <div class="dropdown-content1">
                    <a className='maincategory1' href="#">گوشی موبایل</a>
                    <a href="#">گوشی سامسونگ</a>
                    <a href="#">گوشی شیایمی</a>
                    <a href="#">گوشی اپل</a>
                    <a className='maincategory1' href="#">تبلت</a>
                    <a href="#">تبلت سامسونگ</a>
                    <a href="#">تبلت شیایمی</a>
                    <a href="#">تبلت اپل</a>
                </div>
            </div>  
            </div>
            </div>
            <div class="SearchPageBody1">
                <img src={TorobLogo} width="200px" height="100px"/>  
                <br/>
                <div class="SearchBar1">
                <input type="text" dir='rtl' placeholder="نام کالا را وارد کنید"/>
                <div class="searchIcon1">
                <i class="fa fa-search icon"></i>
                </div>
                </div>
            </div>
        </div>
    )
}

export default SearchPage;