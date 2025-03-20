import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import RightModal from '../RightModal';

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext);
    return (
        <RightModal title='Product Detail' isOpen={context?.isProductDetailOpen} close={context?.closeProductDetail}>
            <>
                <figure className='p-6'>
                    <img className='w-full h-full rounded-lg' src={context?.selectedProduct?.images[0]} alt={context?.selectedProduct?.title} />
                </figure>
                <p className='flex flex-col p-6'>
                    <span className='font-medium text-2xl mb-2'>${context?.selectedProduct?.price}</span>
                    <span className='font-medium text-md'>{context?.selectedProduct?.title}</span>
                    <span className='font-medium text-sm'>{context?.selectedProduct?.description}</span>
                </p>
            </>
        </RightModal>
    );
};
export default ProductDetail;