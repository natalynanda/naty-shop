import { useContext } from "react";
import RightModal from "../RightModal";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../OrderCard";
import { totalPrice } from "../../utils";
import { Order } from "../../Models/Order";
import { Link } from "react-router-dom";

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext);

    const deleteProduct = (id: number) => {
        context?.setCardProducts(context?.cardProducts.filter((item) => item?.id !== id));
    }

    const handleCheckout = () => {
        const orderToAdd: Order = {
            date: new Date(),
            products: context?.cardProducts || [],
            totalProducts: context?.cardProducts.length || 0,
            totalPrice: totalPrice(context?.cardProducts)
        }
        context?.closeOrderDetail();
        context?.setCardProducts([]);
        if (context?.setOrders) {
            context.setOrders([...(context.orders || []), orderToAdd]);
        }
        context?.setSearch('');
    }

    return (
        <RightModal title="My Order" isOpen={context?.isOrderDetailOpen} close={context?.closeOrderDetail}> 
            <div className="px-6 overflow-y-scroll flex-1" >
                {
                    context?.cardProducts.map((product, index) => (
                        <OrderCard key={index} order={product} deleteProduct={deleteProduct}/>
                    ))
                }
            </div>
            <div className="px-6 mb-6">
                <p className="flex justify-between items-center mb-2">
                    <span className="font-light">Total:</span>
                    <span className="font-medium text-2xl">${totalPrice(context?.cardProducts)}</span>
                </p>
                <Link to={"/my-orders/last"}>
                    <button onClick={() => handleCheckout()} className="w-full bg-pink-500 text-white py-2 rounded-lg mt-4">Checkout</button>
                </Link>
            </div>
        </RightModal>
    )
}

export default CheckoutSideMenu;