import { useContext } from "react";
import Layout from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import { Link, useParams } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

const Order = () => {
    const context = useContext(ShoppingCartContext);
    const params = useParams();
    const lastOrder = params.id ? context?.orders?.[parseInt(params.id)]: context?.orders?.slice(-1)[0];
    return (
        <Layout>
            <div className="flex items-center justify-center relative w-80 mb-6">
                <Link to="/my-orders" className="absolute left-0">
                    <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer"/>
                </Link>
                <h1 className="text-3xl">My Order</h1>
            </div>
            <div className="flex flex-col w-80" >
                {
                    lastOrder?.products.map((product, index) => (
                        <OrderCard key={index} order={product} />
                    ))
                }
            </div>
        </Layout>
    );
}

export default Order;