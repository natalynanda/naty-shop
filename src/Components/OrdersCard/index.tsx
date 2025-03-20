import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { Order } from "../../Models/Order";
import dayjs from "dayjs";

interface OrdersProps {
    order: Order;
}

const OrdersCard = ({order}: OrdersProps) => {

    return (
        <div className="flex justify-between items-center border border-black rounded-lg p-4 w-80 mb-4">
            <div className="flex justify-between items-center w-full">
                <p className="flex flex-col">
                    <span className="font-light">{dayjs(order.date).format('DD.MM.YYYY HH:mm')}</span>
                    <span className="font-light">{order.totalProducts} articles</span>
                </p>
                <p className="flex gap-2 items-center">
                    <span className="font-medium text-2xl">${order.totalPrice}</span>
                    <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer"/>
                </p>
            </div>
        </div>
    )

}

export default OrdersCard;