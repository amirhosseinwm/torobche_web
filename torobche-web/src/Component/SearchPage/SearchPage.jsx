import TorobLogo from "../../assets/torobLogo.png";
import "./SearchPageStyle.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCategoryApi } from "../../api/product";

const SearchPage = () => {
    const [minPrice, setMinPrice] = useState(-1);
    const [maxPrice, setMaxPrice] = useState(-1);
    const [categories, setCategoies] = useState([]);
    const [lvl0, setLvl0] = useState([]);
    const [lvl1, setLvl1] = useState([]);
    const [lvl2, setLvl2] = useState([]);
    const [search, setSearch] = useState("");

    useEffect( () => {
        console.log('useEffect');
        getCategoryApi().then((response) => {
            if (response.status === 200) {
                setCategoies(response.data);
                setLvl0(categories.filter((category) => category.level === 0));
                setLvl1(categories.filter((category) => category.level !== 0));
            }
            console.log(response);
            console.log(categories);
        }, []);
    });

    return (
        <div className="container1">
            <link
                rel="stylesheet"
            ></link>
            <div className="SearchPageHeader1">
                <div className="signUp1">
                    <Link to={"/signup-or-login"}>
                        <button>ورود/ ثبت نام</button>
                    </Link>
                </div>
                <div className="ddown1">
                    { lvl0.map((category) => (
                        <button className="dropbtn1">
                            {category.name}
                        </button>
                    ))}
                    <div className="dropdown-content1">
                    {lvl1.map((category) => (
                        <a className={category.level === 1? "maincategory1" : ""}>
                            {category.name}
                        </a>

                        ))}
                    </div>
                </div>
                
                

            </div>
            <div className="SearchPageBody1">
                <img src={TorobLogo} width="200px" height="100px" />
                <br />
                <div className="SearchBar1">
                    <input
                        type="text"
                        dir="rtl"
                        placeholder="نام کالا را وارد کنید"
                    />
                    <div className="searchIcon1">
                        <i className="fa fa-search icon"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchPage;
