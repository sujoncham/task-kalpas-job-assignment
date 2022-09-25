import React, { useEffect, useState } from 'react';
import { FaGripHorizontal, FaList, FaWindowClose } from "react-icons/fa";
import { Outlet } from 'react-router-dom';
import news1 from '../../../assets/news1.jpg';
import NewsModal from '../../NewsModal/NewsModal';
import VerticalModal from '../../NewsModal/VerticalModal';

const Home = () => {
    const [horizontal, setHorizontal] = useState(false);
    const [news, setNews] = useState([]);
    const [horizontalNews, setHorizontalNews] = useState({});

    useEffect(()=>{
        fetch('newsData.json')
        .then(res => res.json())
        .then(data => {
            setNews(data);
        })
    }, [])

    const handleHorizontal = () =>{
        setHorizontal(false);
    }
    const handleVertical = () =>{
        setHorizontal(true);
    }

    return (
        <div className="container mx-auto">
            <div className="drawer drawer-mobile mt-1">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col justify-start">
                    
                    
                    <div className='p-10'>
                        <h1>Welcome back, Dashboard {news.length}</h1>
                        <div>
                            { horizontal && horizontal ? (<div>
                                { news && news.map(newData => <label onClick={()=>setHorizontalNews(newData)} htmlFor="my-modal-news"  key={newData.id} className="cursor-pointer h-[120px]">
                                    <div className="flex justify-between items-center gap-2 my-2">
                                        <div className="flex justify-start items-center gap-2rounded-md bg-white border-2 rounded-md p-2">
                                            <img src={news1} className="w-24 h-24 rounded-lg shadow-2xl" alt='' />
                                        <div className='p-2 text-start'>
                                            <h1 className="text-xl font-bold">{newData.title}</h1>
                                            <p className="p-1">{newData.description.slice(0, 100)}</p>
                                        </div>
                                    </div>
                                <span><FaWindowClose size={40} /></span>
                            </div></label>
                                    )}
                            </div>)
                            : 
                             ( <div className="flex justify-start gap-2 flex-wrap">
                                { news && news.map(data=> <label key={data.id} onClick={()=>setHorizontalNews(data)} htmlFor="my-modal-news" className="cursor-pointer h-[320px] relative">
                                    <div className="bg-base-200 gap-2 p-4 rounded-md w-64">
                                        <div className='py-2'>
                                            <h1 className="text-xl font-bold">{data.title}</h1>
                                            <p className="p-1">{data.description.slice(0, 100)}</p>
                                        </div>
                                        <img src={news1} className="w-100 rounded-lg shadow-2xl" alt='' />
                                        <span className='absolute top-2 right-2 cursor-pointer'><FaWindowClose size={40} /></span>
                                </div>
                                </label>)}
                            </div>
                            )
                            }
                        </div>
                        
                    </div>
                    <Outlet />
                
                </div> 
                <div className="drawer-side border-2 p-3">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label> 
                    
                    <div className='my-3 menu p-4 overflow-y-auto w-80 bg-base-100 text-base-conten'>
                        <div className='bg-white border-2 rounded-md'>
                            <div className='shadow-xl flex justify-start items-start rounded-md gap-3 p-3'>
                                <img src="https://placeimg.com/260/400/arch" className="w-12 h-12 rounded-full shadow-2xl" alt='' />
                                <div className='p-0'>
                                    <h1 className="text-xl font-bold">Hi, Reader!</h1>
                                    <p className="p-0">Provident cupiditate voluptatem nisi.</p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white p-3 border-2 my-3 shadow-xl rounded-md'>
                            <h1 className='text-center text-xl font-bold'>View Toggle</h1>
                            <div className="flex justify-evenly items-center">    
                                <div onClick={handleHorizontal} className='w-28 h-22 border-2 p-2 flex justify-center items-center cursor-pointer'>
                                    <FaGripHorizontal size={40} />
                                </div>
                                <div onClick={handleVertical} className='w-28 h-22 border-2 p-2 flex justify-center items-center cursor-pointer'>
                                    <FaList size={40} />
                                </div>
                            </div>
                        </div>
                        <div className='bg-white p-3 border-2 shadow-xl rounded-md'>
                            <h1 className='text-center text-xl font-bold'>Have a Feedback?</h1>
                            <div className='flex justify-center items-center p-3'>
                                <button className='btn btn-primary'>We are listening</button>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
            <NewsModal horizontalNews={horizontalNews} />
            <VerticalModal horizontalNews={horizontalNews} />
        </div>
    );
};

export default Home;