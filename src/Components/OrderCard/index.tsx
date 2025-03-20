import { TrashIcon } from "@heroicons/react/24/solid";
import { Item } from "../../Models/Item";

interface OrderProps {
    order: Item;
    deleteProduct?: (id: number) => void;
}

const OrderCard = ({order, deleteProduct}: OrderProps) => {

    const renderTrashIcon = () => {
        if(!deleteProduct) return null;
        return (
            <TrashIcon className="w-6 h-6 text-black cursor-pointer" onClick={() => deleteProduct(order.id)}/>
        )
    }

    return (
        <div className="flex justify-between items-center p-2">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover" src={order.images[0]} alt={order.title} />
                </figure>
                <p className="text-sm font-light">{order.title}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-lg font-medium">{order.price}</p>
                {renderTrashIcon()}
            </div>
        </div>
    )

}

export default OrderCard;