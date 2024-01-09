import React from 'react';
import InvestorForm from './InvestorForm'; // Adjust the path as needed
import backgroundImage from '../assets/jan-antonin-kolar-vLxXvapupqI-unsplash.jpg'; // Ensure the path is correct

const SignUpInvestor = () => {
  return (
    <div className='min-h-screen py-40' style={{
      backgroundImage: 'linear-gradient(115deg, #9f7aea, #fee2fe)',
    }}>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden'>
          <div className='w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <h1 className='text-white'>welcome</h1>
          </div>
          <div className='w-full lg:w-1/2 py-16 px-12'>
            <h1 className="text-center text-3xl font-bold mb-4">Investor Registration</h1>
            <InvestorForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpInvestor;
