import {useDispatch} from "react-redux";
import {products} from "../ProductData/ProductData";
import {useEffect} from "react";
import {addProducts} from "../features/productsSlice";
import {addToCart} from "../features/cartSlice";
import {useHistory} from "react-router-dom";

const Home = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const productsList = products.slice();
    console.log(productsList);
    useEffect(() => {
        dispatch(addProducts(productsList));
    });
    
    const handleAddToCart = (item) => {
      dispatch(addToCart(item));
        history.push("/cart");
    }
    return (
        <div className="product-list">
            {productsList?.map((item) => (
                <div key={item?.id} className="product-list-item">
                    <h4 className="product__list-item-title">{item?.name}</h4>
                    <img src={item?.image} alt="Product in store" className="product__list-item-img" />
                    <div className="product__list-item-inf">
                        <div className="product__list-item-content">
                            <p className="product__list-item-desc">{ item?.desc }</p>
                            <span className="price">
                                 $ {item?.price}
                            </span>
                        </div>
                        <button className="product__item-btn" onClick={() => handleAddToCart(item)}>
                            <p className="product__item-text-btn">Add to cart</p>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
 
export default Home;