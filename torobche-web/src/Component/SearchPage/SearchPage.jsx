import TorobLogo from '../../assets/torobLogo.png';
import "./SearchPageStyle.css"
const SearchPage = () =>{

    return(
        <div class="container">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div class="SearchPageHeader">
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