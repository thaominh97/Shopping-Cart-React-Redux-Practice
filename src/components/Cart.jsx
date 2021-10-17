import { products } from "../ProductData/ProductData";
import { useEffect } from "react";
import {useDispatch} from "react-redux";
import {addProducts, addStatus} from "../features/productsSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const productsList = products.slice();
    console.log(productsList);
    useEffect(() => {
        dispatch(addProducts(productsList))
    });
    return (
        <div className="product-list">
            {productsList?.map((item) => (
                <div key={item?.id} className="product-list-item">
                    <img src={item?.image} alt="Product in store" className="product__list-item-img" />
                    <div className="product__list-item-content">
                        <div className="">
                            <h4 className="product__list-item-title">{item?.name}</h4>
                            <p className="product__list-item-desc">{ item?.desc }</p>
                        </div>
                        <div className="product__list-item-price">
                            <span className="price">
                                 {item?.price}
                            </span>
                            <button className="product__item-btn" onClick={() => dispatch(() => alert("Do you want add to cart?"))}>
                                <p className="product__item-text-btn">Add to cart</p>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
 
export default Cart;