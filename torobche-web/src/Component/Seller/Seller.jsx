import './SellerStyle.css'

const Seller = props =>{
    
    return(
        <div className='sellerContainer'>            
        <div className='selleritem'>
             <div className="dropdown">
                <button className="reportbtn">گزارش
                 </button>
                 <div className="dropdown-content">
                    <a href="#">.این کالا مربوط به این صفحه نیست</a>
                    <a href="#">.قیمت یا موجودی صحیح نیست</a>
                    <a href="#">.می‌خواهم سفارشم را از این فروشگاه پیگیری کنم</a>
                </div>
            </div>
            <button className='sellbtn'>خرید</button>
            <div className='sellerPrice'>۳۲۳۳۳۳ تومان</div>
            <div className='sellerName'>فروشگاه 1</div>
        </div>
        </div>
    )


}

export default Seller;