import axios from "axios";
import { useEffect, useState } from "react";
import GadgetCard from "./GadgetCard";

const Gadgets = () => {

    const [gadgets, setGadgets] = useState()
    const serverUrl = import.meta.env.VITE_serverLink

    useEffect(() => {
        axios.get(`${serverUrl}/gadgets`)
            .then(response => {
                // console.log(response)
                setGadgets(response.data)
            })
            .catch(error => {
                console.error(error.message)
            })
    }, [serverUrl])

    // console.log(gadgets);

    return (
        <div className="min-h-screen lg:pt-6 pt-4">
            <h1 className="heading">Gadgets</h1>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {
                    gadgets?.map(item => (
                        <GadgetCard
                            key={item._id}
                            gadget={item}
                        ></GadgetCard>
                    ))
                }
            </div>
        </div>
    );
};

export default Gadgets;