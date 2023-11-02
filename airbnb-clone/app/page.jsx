"use client"

import Banner from "@components/Banner"
import Header from "@components/Header"
import LargeCard from "@components/LargeCard"
import MediumCard from "@components/MediumCard"
import SmallCard from "@components/SmallCard"
import { useEffect, useState } from "react"

const Home = () => {
    const [exploreData, setExploreDate] = useState([]);
    const [cardData, setCardData] = useState([]);

    // fetch all exploreData
    const fetchExploreData = async () => {
        const response = await fetch('/api/places');
        const data = await response.json();

        console.log(data);
        setExploreDate(data)
    }

    // fetch all medium cardData
    const fetchCardData = async () => {
        const response = await fetch('/api/cards');
        const data = await response.json();

        console.log(data);
        setCardData(data);
    }

    useEffect(() => {
        fetchExploreData();
        fetchCardData();
    }, []);

    return (
        <div>
            <Header />
            <Banner />

            <main className="max-w-7xl mx-auto px-8 sm:px-16">
                <section className="pt-6 pb-3">
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

                {/* Card Data from a server - API Endpoint */}
                <section className="pb-3">
                    <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

                    <div className="flex space-x-3 overflow-x-auto 
                            scrollbar-hide p-3 -ml-3">
                        {cardData?.map((item, index) => (
                            <MediumCard
                                key={index}
                                img={item.img}
                                title={item.title} />
                        ))}
                    </div>
                </section>

                {/* Large Card Section */}
                <LargeCard
                    img={"https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440"}
                    title={"The Greatest Outdoors"}
                    description={"Wishlists curated by Airbnb"}
                    buttonText={"Get Inspired"}
                />
            </main>
        </div>
    )
}

export default Home
