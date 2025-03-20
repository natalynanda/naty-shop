import { useContext } from "react";
import { Item } from "../../Models/Item";
import { ShoppingCartContext } from "../../Context";
import { CheckIcon, PlusIcon } from "@heroicons/react/24/solid";

interface CardProps {
    data: Item;
}

const Card = ({data}: CardProps) => {
    const context = useContext(ShoppingCartContext);
    const showProductDetail = () => {
        context?.setSelectedProduct(data);
        context?.openProductDetail();
    }

    const renderIcon = (id: number) => {
        const isInCart = (context?.cardProducts?.filter((item) => item?.id === id)?.length ?? 0) > 0;

        if (isInCart) {
            return (<div className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1 text-white"><CheckIcon /></div>)
        }

        return (<div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
            onClick={(event) => addProductToCart(event, data) }><PlusIcon /></div>)
    }

    const addProductToCart = (event: any, data: Item) => {
        event.stopPropagation();
        context?.setCardProducts([...context.cardProducts, data]);
        context?.openOrderDetail();
        context?.closeProductDetail();
    }

    return (
        <div className="bg-white cursor-pointer w-56 h-60 rounded-lg"
            onClick={showProductDetail}>
            <figure className="relative mb-2 w-full h4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data.category.name}</span>
                <img className="w-full h-full object-cover rounded-lg" src={data.images[0]} alt={data.title} />
                {renderIcon(data.id)}
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{data.title}</span>
                <span className="text-lg font-bold">{`$${data.price}`}</span>
            </p>
        </div>
    );
}

export default Card;