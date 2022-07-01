import Header from '../Header/Header'
import "./ShowProductPageStyle.css"


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
                <div class="line-1"></div>
                <li>
                    <a href="">جستجو در نتایج</a>
                    <div class='searchConsept1'>
                    <i class="fa fa-search icon"></i>
                    <input type="text" dir='rtl' placeholder="نام کالا را وارد کنید"/>
                </div>
                
                </li>

            </ul>

            </div>
            <div></div>


        </div>
    )
}
export default ShowProductPage;