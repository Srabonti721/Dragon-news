import React, { Suspense } from 'react';
import Catagores from '../Catagores';

const LeftAside = () => {
    return (
        <div>
          <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
          <Catagores/>
          </Suspense>
        </div>
    );
};

export default LeftAside;