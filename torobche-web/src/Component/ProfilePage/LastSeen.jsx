import Card from '../Card/Card'


const LastSeen = ()=>{
    return(
        <div className='showProduct'>
            <div className='ddown2'>
            <div class="dropdown2">
                <button class="dropbtn">بازدید اخیر</button>
            </div>
            </div>
            <div class="line-2"></div>
            <div className='showDetail'>
            <Card></Card>
            <Card></Card>
            <Card></Card>


            </div>
            </div>
    )

}
export default LastSeen;