import React from 'react';

const SectionTitle = ({title,subTitle}) => {
    return (
        <div className='text-center my-16'>
            <h1 className='text-2xl font-bold text-blue-600'>{title}</h1>
            <h2 className='text-xl my-5 text-gray-600'>{subTitle}</h2>
        </div>
    );
};

export default SectionTitle;