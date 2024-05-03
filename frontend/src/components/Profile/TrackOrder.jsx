import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllOrdersOfUser } from "../../redux/actions/order";


const TrackOrder = () => {

    const { orders } = useSelector((state) => state.order);
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const { id } = useParams();

    useEffect(() => {
        dispatch(getAllOrdersOfUser(user._id));
    }, [dispatch]);

    const data = orders && orders.find((item) => item._id === id);

    return (
        <div className="w-full h-[80vh] flex justify-center items-center">
            {" "}
            <>
                {data && data?.status === "Processing" ? (
                    <h1 className="text-[20px]">Seu pedido está sendo processado na loja.</h1>
                ) : data?.status === "Transferred to delivery partner" ? (
                    <h1 className="text-[20px]">
                        Seu pedido está a caminho do parceiro de entrega.
                    </h1>
                ) : data?.status === "Shipping" ? (
                    <h1 className="text-[20px]">
                        Seu pedido está a caminho com nosso parceiro de entrega.
                    </h1>
                ) : data?.status === "Received" ? (
                    <h1 className="text-[20px]">
                        Seu pedido está em sua cidade. Nosso entregador irá entregá-lo.
                    </h1>
                ) : data?.status === "On the way" ? (
                    <h1 className="text-[20px]">
                        Nosso entregador irá entregar seu pedido.
                    </h1>
                ) : data?.status === "Delivered" ? (
                    <h1 className="text-[20px]">Seu pedido foi entregue!</h1>
                ) : data?.status === "Processing refund" ? (
                    <h1 className="text-[20px]">Seu reembolso está sendo processado!</h1>
                ) : data?.status === "Refund Success" ? (
                    <h1 className="text-[20px]">Seu reembolso é um sucesso!</h1>
                ) : null}
            </>

        </div>
    )
}

export default TrackOrder