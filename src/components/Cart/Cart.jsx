import './cart.css'

const Cart = ({cart}) => {
    return (
        <div>
            <h4>Shopping Cart : {cart.length}</h4>
            <div>
                {
                    cart.map((bottle , idx) => <img className="cart" key={idx} src={bottle.img} />)
                }
            </div>
        </div>
    );
};

export default Cart;