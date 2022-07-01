import './SellerStyle.css'

const Seller = props =>{
    return(
        <div className='sellerContainer'>            
        <div className='selleritem'>
            <button className='reportbtn'>گزارش</button>
            <button className='sellbtn'>خرید</button>
            <div className='sellerPrice'>۳۲۳۳۳۳ تومان</div>
            <div className='sellerName'>فروشگاه 1</div>
        </div>
        </div>
    )


}

export default Seller;