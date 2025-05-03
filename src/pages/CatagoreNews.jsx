import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { useParams } from 'react-router';
import NewsCard from '../components/NewsCard';

const CatagoreNews = () => {
    const { id } = useParams();
    const data = useLoaderData();
    // console.log(id,data);

    const [categore, setCategore] = useState([]);

    useEffect(() => {
        if (id == '0') {
            setCategore(data);
            return;
        }
        else if (id == '1') {
            const filterNews = data.filter(news => news.others.is_today_pick == true);
            setCategore(filterNews);
        }
        else {
            const filterNews = data.filter(news => news.category_id == id)
            console.log(filterNews);
            setCategore(filterNews);
        }

    }, [id, data])

    return (
        <div>
            <h2 className='font-bold mb-5'>total = <span className='text-secondary'>{categore.length}news found</span></h2>
            <div className='grid grid-cols-1'>
                {
                    categore.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
        </div>

    );
};

export default CatagoreNews;