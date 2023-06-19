import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import SignUpForm from './Components/SignUpForm';

function App() {

    return (
        <div className='bg-[#dcd6d8] flex flex-col items-center w-screen h-screen'>
            <div className='bg-[#dcd697] w-4/12'>
                <div className='flex flex-row p-5'>
                    <h1 className='text-3xl font-bold text-[#0E0C0C]'>
                        Sign Up or Log in
                    </h1>
                </div>
                <div className='flex flex-col'>
                    <SignUpForm />
                </div>
            </div>
        </div>
    );
}

export default App;
