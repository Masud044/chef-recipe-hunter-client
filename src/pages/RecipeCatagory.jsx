import React from 'react';

const RecipeCatagory = () => {
    return (
        <div className='container mx-auto mt-10 '>
            <h1 className='text-center font-bold text-3xl mb-8'>Recipe Categories</h1>

            <div className='lg:flex gap-4  bg-lime-100 py-4'>
                <div className='mb-6'>
                    <img className='rounded-full ' src="https://i.ibb.co/g7xtN1z/r1.jpg" alt="" />
                    <h1 className='text-center font-medium text-2xl'>Appetizers</h1>

                </div>
                <div className='mb-6'>
                    <img className='rounded-full' src="https://i.ibb.co/61g0Ztg/r2.jpg" alt="" />
                    <h1 className='text-center font-medium text-2xl'>Beef </h1>
                </div>
                <div className='mb-6'>
                    <img className='rounded-full' src="https://i.ibb.co/dpBrR3B/r3.jpg" alt="" />
                    <h1 className='text-center font-medium text-2xl'>Chicken</h1>
                </div>
                <div className='mb-6'>
                    <img className='rounded-full' src="https://i.ibb.co/cJ19sQ5/r4.jpg" alt="" />
                    <h1 className='text-center font-medium text-2xl'>Vegetarian</h1>
                </div>
                <div className='mb-6'>
                    <img className='rounded-full' src="https://i.ibb.co/1vvDKLv/r5.jpg" alt="" />
                    <h1 className='text-center font-medium text-2xl'>Desserts</h1>
                </div>

            </div>

            <div className='mt-10 grid lg:grid-cols-2 gap-4 mb-10 justify-items-center'>
                <div className=''>
                    <img className='h-80' src="https://i.ibb.co/cYYqtDL/images-4.jpg" alt="" />
                </div>
                <div>
                    <h1 className='text-center font-medium text-2xl text-lime-700 font-mono'>Best Selling Dishes</h1>
                    <p className='text-center font-medium font-serif'>Food for the body is not enough.There must be Food for the Soul </p>
                    <div className='p-4 bg-lime-100 rounded-md flex justify-between mb-4'>
                        <div>
                            <p className='font-semibold'>UP-Style Lapsi</p>
                            <p className='font-thin'>Carb;shirnk;Lobstar;Prawn</p>
                        </div>

                        <div>
                            <p className='text-2xl font-semibold'>$87.00</p>
                        </div>
                       


                    </div>
                    <div className='p-4 bg-lime-100 rounded-md flex justify-between mb-4'>
                        <div>
                            <p className='font-semibold'>Chicken Fried rice</p>
                            <p className='font-thin'>Carb;shirnk;Lobstar;Prawn</p>
                        </div>

                        <div>
                            <p className='text-2xl font-semibold'>$98.00</p>
                        </div>
                       


                    </div>
                    <div className='p-4 bg-lime-100 rounded-md flex justify-between mb-4'>
                        <div>
                            <p className='font-semibold'>Cake with drink</p>
                            <p className='font-thin'>Carb;shirnk;Lobstar;Prawn</p>
                        </div>

                        <div>
                            <p className='text-2xl font-semibold'>$88.00</p>
                        </div>
                       


                    </div>



                </div>
            </div>
        </div>
    );
};

export default RecipeCatagory;