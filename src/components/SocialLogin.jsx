import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <h1 className='font-bold mb-5'>Login with</h1>
            <div className=''>
                <button className=' btn my-2 w-full btn-outline btn-secondary'>
                <FcGoogle size={25} />Login with Google</button>
                <button className=' btn my-2 w-full btn-outline btn-primary '> <FaGithub size={25} />Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;