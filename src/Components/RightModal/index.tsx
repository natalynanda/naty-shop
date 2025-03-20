import './styles.css';
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
    title: string;
    isOpen: boolean | undefined;
    close: (() => void) | undefined;
}

const RightModal = ({children, title, isOpen = false, close = () => {} }: LayoutProps) => {
    return (
        <aside className={`${isOpen ? 'flex': 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6 border-b border-black'>
                <h2 className='text-xl font-medium'>{title}</h2>
                <XMarkIcon className="w-6 h-6 text-black cursor-pointer" onClick={close}/>
            </div>
            {children}
        </aside>
    )
}

export default RightModal;