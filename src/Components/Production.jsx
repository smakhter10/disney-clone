import React from 'react'
import disney from '../assets/images/disney.png'
import disneyV from '../assets/videos/disney.mp4'
import marvel from '../assets/images/marvel.png'
import marvelV from '../assets/videos/marvel.mp4'
import pixar from '../assets/images/pixar.png'
import pixarV from '../assets/videos/pixar.mp4'
import starwar from '../assets/images/starwar.png'
import starwarV from '../assets/videos/star-wars.mp4'
import nationalG from '../assets/images/nationalG.png'
import nationalGV from '../assets/videos/national-geographic.mp4'

const Production = () => {
    const productionHouseList = [
        {
            id:1,
            image:disney,
            video:disneyV
        },
        {
            id:2,
            image:marvel,
            video:marvelV
        },
        {
            id:3,
            image:pixar,
            video:pixarV
        },
        {
            id:4,
            image:starwar,
            video:starwarV
        },
        {
            id:5,
            image:nationalG,
            video:nationalGV
        }
    ]
  return (
    <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16 ' >
        {productionHouseList.map((item) => (
            <div className='border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-black'>
                <video src= {item.video} autoPlay loop playsInline muted
                className='absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50'/>
                <img src={item.image} className='w-full z-[1]' />
                
            </div>
        ))}
    </div>
  )
}

export default Production