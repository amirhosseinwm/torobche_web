import TorobLogo from '../../assets/torobLogo.png';
import "./SearchPageStyle.css"
const SearchPage = () =>{

    return(
        <div class="container">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div class="SearchPageHeader">
                <div class="signUp">
                <button>ورود/ ثبت نام</button>
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
            <div class="SearchPageBody">
                <img src={TorobLogo} width="200px" height="100px"/>  
                <br/>
                <div class="SearchBar">
                <input type="text" dir='rtl' placeholder="نام کالا را وارد کنید"/>
                <div class="searchIcon">
                <i class="fa fa-search icon"></i>
                </div>
                </div>
            </div>
        </div>
    )
}

export default SearchPage;