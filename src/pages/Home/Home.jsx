import React from 'react';

const Home = () => {
    return (
        <div className='bg-[#0F0F0F] shadow-inner p-6 '>
            <div className=' w-3/6 font-bold'>
                <p className='text-6xl text-white'>Decentralized Perpetual Exchange</p>
                <p className='text-xl mt-2 w-2/3 text-slate-300'>Trade BTC, ETH, AVAX and other top cryptocurrencies with up to 30x leverage directly from your wallet</p>
                <br />
                <button className='hover:bg-[#266b76] duration-500 bg-[#2E97A7] py-2 rounded-md px-3'>Launch Exchange</button>
            </div>
            <div className='text-white gap-3  grid md:grid-cols-3 lg:grid-cols-3 mt-16'>
                <div className='w-2/3 border border-gray-200 rounded-md shadow-md flex gap-8 items-center px-4 py-5'>
                    <p>oklk</p>
                    <div>
                        <p >okok</p>
                        <p >$0</p>
                    </div>
                </div>
                <div className='w-2/3 border border-gray-200 rounded-md shadow-md flex gap-8 items-center px-4 py-5'>
                    <p>oklk</p>
                    <div>
                        <p >okok</p>
                        <p >$0</p>
                    </div>
                </div>
                <div className='w-2/3 border border-gray-200 rounded-md shadow-md flex gap-8 items-center px-4 py-5'>
                    <p>oklk</p>
                    <div>
                        <p >okok</p>
                        <p >$0</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;