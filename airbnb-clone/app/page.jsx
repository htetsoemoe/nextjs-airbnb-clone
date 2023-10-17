import Banner from "@components/Banner"
import Header from "@components/Header"

const Home = () => {
    return (
        <div className="max-w-[1240px] mx-auto">
            <h1 className="text-2xl mt-3 text-white font-bold">Airbnb Clone with NextJS, React and Tailwind CSS.</h1>
            <Header />
            <Banner />
        </div>
    )
}

export default Home
