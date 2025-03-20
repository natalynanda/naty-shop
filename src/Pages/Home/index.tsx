import { useContext } from "react";
import Card from "../../Components/Card";
import Layout from "../../Components/Layout";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";

function Home() {

    const context = useContext(ShoppingCartContext);
    const items = context?.search || context?.searchByCategory ? context?.filteredItems : context?.items;

    return (
        <Layout>
            <div className="flex justify-center items-center relative w-80 mb-4">
                <h1 className="font-medium text-xl">Exclusive Products</h1>
            </div>
            <input 
                className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none" 
                type="text" 
                placeholder="Search a product" 
                onChange={(event) => context?.setSearch(event.target.value)}/>
            <div className="grid grid-cols-4 gap-4 w-full max-w-screen-lg">
            {
                items?.map((item) => (
                    <Card key={item.id} data={item}/>
                ))
            }
            {
                items?.length === 0 && (
                    <div className="col-span-4 flex justify-center items-center">
                        <h1 className="font-medium text-xl">No products found</h1>
                    </div> )
            }
            </div>
            <ProductDetail />
        </Layout>
    );
}

export default Home;