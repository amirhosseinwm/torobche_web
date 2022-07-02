import Header from '../Header/Header';
import "./ShowProductPageStyle.css";
import Card from '../Card/Card';


const ShowProductPage = () =>{
    return(
        <div className="showContainer">
            <Header/>
            <div className='VerticalNavbar'>
            <ul>
                <li>
                    <a href="">قیمت (تومان)</a>
                    <div className='priceRange'>
                        <input className="toRange" type="number" />
                        <i>تا</i>
                        <input className='fromRange' type="number" />
                        <i>از</i>
                    </div>
                    <button className='PriceButton'>اعمال فیلتر قیمت</button>
                </li>
                <div className="line-1"></div>
                <li>
                    <a href="">جستجو در نتایج</a>
                    <div className='searchConsept1'>
                    <i className="fa fa-search icon"></i>
                    <input type="text" dir='rtl'/>
                </div>
                
                </li>

            </ul>

            </div>
            <div className='showProduct'>
            <div className='ddown2'>
            <div className="dropdown2">
                <button className="dropbtn2">محبوب ترین
                 </button>
                 <div className="dropdown-content2">
                    <a href="#">محبوب ترین</a>
                    <a href="#">جدیدترین</a>
                    <a href="#">ارزان ترین</a>
                    <a href="#">گرانترین</a>
                </div>
            </div>
            </div>
            <div className="line-2"></div>
            <div className='showDetail'>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>

            </div>
            </div>
            

        </div>
    )
}
export default ShowProductPage;