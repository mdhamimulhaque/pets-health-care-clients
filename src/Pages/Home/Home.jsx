import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../Shared/ServiceCard/ServiceCard';
import HeroSection from './HeroSection/HeroSection';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-3xl font-bold capitalize text-rose-600 lg:text-5xl dark:text-white">My Services</h1>
                    <h2 className="text-3xl font-semibold text-gray-800 capitalize lg:text-5xl dark:text-white"> I Care Because<span className="underline decoration-rose-500"> You Care</span></h2>

                    <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
                        I offer quick & easy services for cats and dogs, accumsan felis id, fermentum purus. Quisque vitae hendrerit elit
                    </p>

                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                        <ServiceCard />
                        <ServiceCard />
                        <ServiceCard />

                    </div>
                    <div className="see_all_service_btn text-center mt-10">
                        <button
                            className=" rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                        >
                            See All Services
                        </button>
                    </div>
                </div>
            </section>

            <section className="why_choose_us">
                <WhyChooseUs />
            </section>
        </div>
    );
};

export default Home;