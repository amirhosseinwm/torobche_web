import Card from '../Card/Card'


const Favirote = ()=>{
    return(
        <div className='showProduct'>
            <div className='ddown2'>
            <div class="dropdown2">
                <button class="dropbtn">محبوب من</button>
            </div>
            </div>
            <div class="line-2"></div>
            <div className='showDetail'>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>


            </div>
            </div>
    )

}
export default Favirote;