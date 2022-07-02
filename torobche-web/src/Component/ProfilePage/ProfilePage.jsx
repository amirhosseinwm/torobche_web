import Header from '../Header/Header'
import Card from '../Card/Card'
import './ProfilePageStyle.css'

const Profile = ()=>{
    return(
        <div className="showContainer">
            <div className='VerticalNavbar2'>
            <ul>
                <li>
                    <p>اطلاعات شخصی</p>
                    <div class="line-1"></div>
                    <p>امیرحسین ثابتی</p>
                    <p>a.sabeti12@gmail.com</p>
                    <p></p>
                </li>
                <div class="line-1"></div>
                <li>
                    <button className='logout'>خروج از حساب کاربری</button>
                </li>

            </ul>

            </div>
            <Header/>

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
            

        </div>
    )

}

export default Profile;