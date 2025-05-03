import React from 'react';
import { useParams } from 'react-router';

const CatagoreNews = () => {
    const {id} = useParams();
    console.log(id);
     
    return (
        <div>
            CatagoreNews -{id}
        </div>
    );
};

export default CatagoreNews;