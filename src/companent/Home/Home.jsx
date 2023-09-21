import { useLoaderData } from "react-router-dom";
import Prodacts from "../Prodacts/Prodacts";

const Home = () => {
    const prodacts = useLoaderData()
    const newProdacts = prodacts.users;
    return (
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-5">
            {
                prodacts.map(prodact => <Prodacts key={prodact.id} prodact ={prodact}></Prodacts>)
            }
        </div>
    );
};

export default Home;