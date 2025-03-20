import { useContext } from "react";
import Layout from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context";
import OrdersCard from "../../Components/OrdersCard";
import { Link } from "react-router-dom";

const Orders = () => {
    const context = useContext(ShoppingCartContext);
    return (
        <Layout>
            <div className="flex items-center justify-center relative w-80 mb-4">
                <h1 className="text-3xl">My Orders</h1>
            </div>
        
        {
            context?.orders?.map((order, index) => (
                <Link key={index} to={`/my-orders/${index}`}>
                    <OrdersCard  order={order} />
                </Link>
            ))
        }
        </Layout>
    );
}

export default Orders;