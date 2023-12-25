"use client";

import { ProductWithPrice } from "@/types";
import Modal from "./Modal";

interface SubscribeModalProps{
    products: ProductWithPrice[];
}

const SubscribeModal: React.FC<SubscribeModalProps> = ({
    products
}) => {
    let content = (
        <div className="text-center">
            No products available.
        </div>
    );
    return ( 
    <Modal
    title="Only for premium user"
    description="Listen to music with Spotify Premium"
    isOpen
    onChange={() => {}}

    >
        Subscription
    </Modal> 
    );
}
 
export default SubscribeModal;