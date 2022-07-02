import TorobLogo2 from "../../assets/torobLogo2.png";

import "./HeaderStyle.css";
import { Link } from "react-router-dom";
const SearchPage = () => {
    return (
        <div className="container">
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            ></link>
            <div className="SearchPageHeader">
                <div className="signUp">
                    <Link to={"/signup-or-login"}>
                        <button>ورود / ثبت نام</button>
                    </Link>
                </div>
                <div className="searchAndDdown">
                    <div className="searchbar">
                        <div className="searchConsept">
                            <i className="fa fa-search icon"></i>
                            <input
                                type="text"
                                dir="rtl"
                                placeholder="نام کالا را وارد کنید"
                            />
                        </div>
                        <div>
                            <Link to={"/search"}>
                                <img src={TorobLogo2} />
                            </Link>
                        </div>
                    </div>
                    <div className="ddown">
                        <div className="dropdown">
                            <button className="dropbtn">لپ تاپ</button>
                            <div className="dropdown-content">
                                <a href="#">لب تاپ لنوو</a>
                                <a href="#">لب تاپ ایسوس</a>
                                <a href="#">لب تاپ اپل</a>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button className="dropbtn">موبایل و تبلت</button>
                            <div className="dropdown-content">
                                <a className="maincategory" href="#">
                                    گوشی موبایل
                                </a>
                                <a href="#">گوشی سامسونگ</a>
                                <a href="#">گوشی شیایمی</a>
                                <a href="#">گوشی اپل</a>
                                <a className="maincategory" href="#">
                                    تبلت
                                </a>
                                <a href="#">تبلت سامسونگ</a>
                                <a href="#">تبلت شیایمی</a>
                                <a href="#">تبلت اپل</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchPage;
