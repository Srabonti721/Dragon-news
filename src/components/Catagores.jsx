import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoriesPromice = fetch('/public/demo-data/categories.json')
.then(res => res.json())
const Catagores = () => {
    const categore = use(categoriesPromice)
    // console.log(categore);
    
    return (
        <div >
                <p className='font-bold'>All Categories {categore.length}</p>
                <div className='grid grid-cols-1 gap-4 mt-4 '>
                    {
                        categore.map(categore=><NavLink 
                            className={"btn border-0 bg-base-100 hover:bg-base-300 text-accent font-semibold"}
                             key={categore.id}
                             to={`/categore/${categore.id}`}
                             >{categore.name}</NavLink>)
                    }
                </div>
                
        </div>
    );
};

export default Catagores;