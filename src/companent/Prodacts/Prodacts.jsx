import { Link, NavLink } from "react-router-dom";

const Prodacts = ({prodact}) => {
    const {name,image,company,price,id} = prodact;
    return (
        <div className="border-2 rounded-lg">
            <img src={image} alt="" className="h-[300px] w-full rounded-t-lg"/>
            <h1 className="text-2xl ml-4 mt-2">Name : {name}</h1>
            <h1 className="text-xl ml-4 mb-2 font-medium">Company : {company}</h1>
            <p className="text-xl font-medium ml-4 mb-4">Price : <span className=' text-[#062425] '>{price}</span></p>
            <NavLink to={`/home/${id}`}><button className="w-full text-2xl text-center py-3 bg-[#062425] hover:bg-gradient-to-r from-[#062425] via-indigo-500 to-[#076060] text-white rounded-b-lg">Show Datels</button></NavLink>
        </div>
    );
};

export default Prodacts;