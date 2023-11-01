"use client"

import Banner from "@components/Banner"
import Header from "@components/Header"
import SmallCard from "@components/SmallCard"
import { useEffect, useState } from "react"

const Home = () => {
    const [exploreData, setExploreDate] = useState([]);

    // fetch all exploreData
    const fetchExploreData = async () => {
        const response = await fetch('/api/places');
        const data = await response.json();

        console.log(data);
        setExploreDate(data)
    }

    useEffect(() => {
        fetchExploreData();
    }, []);

    return (
        <div>
            <Header />
            <Banner />

            <main className="max-w-7xl mx-auto px-8 sm:px-16">
                <section className="pt-6">
                    <h2 className="text-4xl font-semibold pb-5">
                        Explore Nearby
                    </h2>

                    {/* Pull some data from a server - API Endpoints */}
                    <div className="grid grid-cols-1
                            sm:grid-cols-2
                            lg:grid-cols-3
                            xl:grid-cols-4">
                        {exploreData?.map((item, index) => (
                            <SmallCard
                                key={index}
                                img={item?.img}
                                location={item.location}
                                distance={item.distance}
                            />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Home
