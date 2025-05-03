import React from 'react';
import swimmingImg from "../../assets/swimming.png";
import classRoomImg from "../../assets/class.png";
import PlayImg from "../../assets/playground.png";

const Qzoon = () => {
    return (
        <div className='bg-base-200 py-4'>
            <h1 className='font-bold mb-5'>Q-zone </h1>
            <div className="space-y-4">
                <img src={swimmingImg} alt="" />
                <img src={classRoomImg} alt="" />
                <img src={PlayImg} alt="" />
            </div>
        </div>
    );
};

export default Qzoon;