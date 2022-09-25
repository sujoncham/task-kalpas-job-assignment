import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Feedback from '../../Feedback/Feedback';
import HorizontalNewsFeedback from '../../HorizontalNewsFeedback/HorizontalNewsFeedback';
import NewsModal from '../../NewsModal/NewsModal';
import VerticalModal from '../../NewsModal/VerticalModal';
import Reader from '../../Reader/Reader';
import ToggleView from '../../ToggleView/ToggleView';
import VerticalNewsFeed from '../../VerticalNewsFeed/VerticalNewsFeed';

const Home = () => {
    const [horizontal, setHorizontal] = useState(true);
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
                                { news && news.map(newData => <HorizontalNewsFeedback setHorizontalNews={setHorizontalNews} newData={newData} /> )}
                            </div>)
                            : 
                             ( <div className="flex justify-start gap-2 flex-wrap">
                                { news && news.map(newData=> <VerticalNewsFeed setHorizontalNews={setHorizontalNews} newData={newData} /> )}
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
                        
                        <Reader />
                        
                        <ToggleView handleHorizontal={handleHorizontal} handleVertical={handleVertical} />
                        
                        <Feedback />
                    </div>
                
                </div>
            </div>
            <NewsModal horizontalNews={horizontalNews} />
            <VerticalModal horizontalNews={horizontalNews} />
        </div>
    );
};

export default Home;