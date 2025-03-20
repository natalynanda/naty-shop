import { createContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from "react";
import { Item } from "../Models/Item";
import { Order } from "../Models/Order";

type ShoppingCartContextType = {
    isProductDetailOpen: boolean;
    openProductDetail: () => void;
    closeProductDetail: () => void;
    selectedProduct: Item | undefined;
    setSelectedProduct: Dispatch<SetStateAction<Item | undefined>>;
    cardProducts: Item[];
    setCardProducts: Dispatch<SetStateAction<Item[]>>;
    isOrderDetailOpen: boolean;
    openOrderDetail: () => void;
    closeOrderDetail: () => void;
    orders?: Order[];
    setOrders?: Dispatch<SetStateAction<Order[]>>;
    items: Item[];
    search: string;
    setSearch: Dispatch<SetStateAction<string>>;
    filteredItems: Item[];
    setSearchByCategory: Dispatch<SetStateAction<string>>;
    searchByCategory: string;
};

export const ShoppingCartContext = createContext<ShoppingCartContextType | undefined>(undefined);

export const ShoppingCartProvider = ({ children }: { children: ReactNode }) => {
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Item>();
    const [cardProducts, setCardProducts] = useState<Item[]>([]);
    const [isOrderDetailOpen, setIsOrderDetailOpen] = useState(false);
    const [orders, setOrders] = useState<Order[]>([]);
    const [items, setItems] = useState<Item[]>([]);
    const [filteredItems, setFilteredItems] = useState<Item[]>([]);
    const [search, setSearch] = useState('');
    const [searchByCategory, setSearchByCategory] = useState('');

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItems(data))

    }, []);

    const filterByTitleOrCategory = (title: string, category: string) => {
        console.log("ittle", title);
        console.log('category', category);
        if (title === '' && category === '') {
            return items;
        }
        if (title !== '' && category === '') {
            return items.filter((item) => item.title.toLowerCase().includes(title.toLowerCase()));
        }

        if (title === '' && category !== '') {
            return items.filter((item) => item.category.name.toLowerCase().includes(category.toLowerCase()));
        }

        return items.filter((item) => item.title.toLowerCase().includes(title.toLowerCase()) && item.category.name.toLowerCase().includes(category.toLowerCase()));
        
    }

    useEffect(() => {
        setFilteredItems(filterByTitleOrCategory(search, searchByCategory));
    }, [search, searchByCategory]);

    const openProductDetail = () => {
        setIsProductDetailOpen(true);
    }

    const closeProductDetail = () => {
        setIsProductDetailOpen(false);
    }

    const openOrderDetail = () => {
        setIsOrderDetailOpen(true);
    }

    const closeOrderDetail = () => {
        setIsOrderDetailOpen(false);
    }
return (
        <ShoppingCartContext.Provider value={{
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            selectedProduct,
            setSelectedProduct,
            cardProducts,
            setCardProducts,
            isOrderDetailOpen,
            openOrderDetail,
            closeOrderDetail,
            orders,
            setOrders,
            items,
            search,
            setSearch,
            filteredItems,
            setSearchByCategory,
            searchByCategory
        }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}