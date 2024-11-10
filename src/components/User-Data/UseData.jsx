import './user.css'
import PropTypes from 'prop-types';

const UseData = ({data , cartHandler}) => {

    const { img , name , price , ratings , seller} = data
    return (
        <div className='card'>
            <img src={img} alt="" />
            <p>Name : {name}</p>
            <p>Price : {price}</p>
            <p>Ratting : {ratings}</p>
            <p>Seller : {seller}</p>
            <button onClick={() => cartHandler(data)}>Buy now</button>
        </div>
    );
};

export default UseData;