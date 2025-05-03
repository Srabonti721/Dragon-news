import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNaws = () => {
    return (
        <div className='flex items-center bg-base-200 '>
            <p className='bg-secondary p-2 m-4 text-base-100'>Latest</p>
          <Marquee className='flex gap-3' speed={60} pauseOnHover={true} >
          <p className='font-semibold'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
          <p className='font-semibold'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
          <p className='font-semibold'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
          </Marquee>
        </div>
    );
};

export default LatestNaws;