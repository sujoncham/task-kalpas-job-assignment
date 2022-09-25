import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Feedback from '../../Feedback/Feedback';
import FeedbackModal from '../../Feedback/FeedbackModal';
import HorizontalNewsFeedback from '../../HorizontalNewsFeedback/HorizontalNewsFeedback';
import NewsModal from '../../NewsModal/NewsModal';
import VerticalModal from '../../NewsModal/VerticalModal';
import Reader from '../../Reader/Reader';
import ToggleView from '../../ToggleView/ToggleView';
import VerticalNewsFeed from '../../VerticalNewsFeed/VerticalNewsFeed';
import './Home.css';

const Home = () => {
    const [horizontal, setHorizontal] = useState(true);
    const [news, setNews] = useState([]);
    const [horizontalNews, setHorizontalNews] = useState({});
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    // const [size, setSize] = useState(10)

    useEffect(()=>{

        const url = `https://jsonplaceholder.typicode.com/posts?page=${page}`;
        // fetch('newsData.json')
        const getData = async()=>{
            const res = await fetch(url);
            const data = await res.json();
            // console.log(page, size, data.length)
            const totalPage = Math.ceil(data.length /20);
            // console.log(totalPage);
            if(totalPage >= 5){
                setNews(data.slice(page, totalPage));
            } else{

                setNews(data);
            }
        }
        getData();
    }, [page])

    const handleHorizontal = () =>{
        setHorizontal(false);
    }
    const handleVertical = () =>{
        setHorizontal(true);
    };

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts`;
        // fetch('newsData.json')
        const getPage = async()=>{
            const res = await fetch(url);
            const data = await res.json();
            const count = data.length;
            const pages = Math.ceil(count/20);
            setPageCount(pages);
        }
        getPage();
    }, [])



    return (
        <div className="container mx-auto">
            <div className="drawer drawer-mobile mt-1">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col justify-start">

                    <div className='p-5'>
                        <h1 className='text-3xl font-bold mb-5'>Welcome back, Dashboard {news.length}/100</h1>
                        <div>
                            { horizontal && horizontal ? (<div>
                                { news && news?.map(newData => <HorizontalNewsFeedback setHorizontalNews={setHorizontalNews} newData={newData} /> )}
                            </div>)
                            : 
                             ( <div className="flex justify-start gap-2 flex-wrap">
                                { news && news?.map(newData=> <VerticalNewsFeed setHorizontalNews={setHorizontalNews} newData={newData} /> )}
                            </div>
                            )
                            }
                            <div className='pagination'>
                                {
                                    [...Array(pageCount).keys()]
                                    .map(number => <button 
                                        onClick={()=>setPage(number)}
                                        className={page === number ? 'selected': ''}>{number + 1}</button>)
                                }
                               
                            </div>
                        </div>
                        
                    </div>
                    <Outlet />
                
                </div> 
                <div className="drawer-side border-2 p-3">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label> 
                    
                    <div className='my-3 menu p-4 overflow-y-auto w-80 bg-base-100 text-base-conten'>
                        
                        <Reader />
                        
                        <ToggleView handleHorizontal={handleHorizontal} handleVertical={handleVertical} />
                        
                        <Feedback />
                    </div>
                
                </div>
            </div>
            <NewsModal horizontalNews={horizontalNews} />
            <VerticalModal horizontalNews={horizontalNews} />
            <FeedbackModal />
        </div>
    );
};

export default Home;