import'./Card.css'
import { Link } from 'react-router-dom';
const Card = props => {
    return(
        <div className="item">
            <div className='title' >
            <Link to={'/products/detail'}>
            <a>گوشی</a>
            </Link>
            </div>

            <h3>فروشگاه</h3>
            <h5>۱۴۰۰ تومان</h5>
        </div>
    )
}
export default Card;