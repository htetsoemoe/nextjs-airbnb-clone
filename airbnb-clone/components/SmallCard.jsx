import Image from "next/image"

const SmallCard = ({ img, location, distance }) => {
    return (
        <div className="flex items-center m-2 space-x-4 rounded-xl 
            cursor-pointer hover:bg-gray-100 hover:scale-105 transition
            transform duration-200 ease-out">
            {/* left */}
            <div className="relative h-16 w-16">
                {img === 'https://links.papareact.com/1to' || img === 'https://links.papareact.com/ynx' ?
                    <Image src='next.svg' layout='fill' /> : <Image src={img} layout="fill" />}
            </div>

            {/* right */}
            <div>
                <h1>{location}</h1>
                <h1 className="text-gray-500">
                    {distance}
                </h1>
            </div>
        </div>
    )
}

export default SmallCard
