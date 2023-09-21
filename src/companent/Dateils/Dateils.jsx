import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const Dateils = () => {
    const dateils = useLoaderData()
    const params = useParams()
    const paramsFind = dateils.find(d => d.id === params.id)
    const {name,image,company,price,description,category} = paramsFind
    console.log(paramsFind);
    return (
        <div className='w-11/12 mx-auto md:flex justify-between items-center gap-4 pt-5'>
            <img src={image} alt="" className='md:w-[50%] rounded-xl'/>
            <div className='text-black'>
                <h1 className=' text-2xl md:text-4xl font-serif pb-2'>Name : {name}</h1>
                <h1 className='text-xl pb-2 md:text-2xl'> {description}</h1>
                <h1 className='text-xl pb-2'>Company : {company}</h1>
                <div className='flex justify-around items-center text-xl font-normal pb-4'>
                    <p>Price : <span className='text-[#062425]'>{price}</span></p>
                    <p>Category : {category}</p>
                </div>
                <Link to='/'><button className="w-full text-2xl text-center py-3 bg-[#062425] hover:bg-gradient-to-r from-[#062425] via-indigo-500 to-[#076060] text-white rounded-lg">Go To Home</button></Link>
            </div>
        </div>
    );
};

export default Dateils;