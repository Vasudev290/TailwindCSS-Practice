import React, { useState } from 'react'
import MobilesCard from './MobilesCard'

const Items = () => {
    const [mobiles, setMobiles] = useState([
        {
          "id": 1,
          "image": "i6.jpg",
          "name": "IPhone6",
          "price": "23,999"
        },
        {
          "id": 2,
          "image": "i7.jpg",
          "name": "IPhone7",
          "price": "22,999"
        },
        {
          "id": 3,
          "image": "i8.jpg",
          "name": "Iphone8",
          "price": "23,699"
        },
        {
          "id": 4,
          "image": "i10.jpg",
          "name": "Iphone10",
          "price": "25,999"
        },
        {
          "id": 5,
          "image": "i13.jpg",
          "name": "Iphone13",
          "price": "26,999"
        },
        {
          "id": 6,
          "image": "i15.jpg",
          "name": "Iphone15",
          "price": "63,999"
        },
        {
          "id": 7,
          "image": "i16.jpg",
          "name": "Iphone16",
          "price": "27,999"
        },
        {
          "id": 8,
          "image": "iphone12.jpg",
          "name": "iphone12",
          "price": "28,999"
        },
        {
          "id": 9,
          "image": "oppo.jpg",
          "name": "Oppo",
          "price": "29,999"
        },
        {
          "id": 10,
          "image": "oppo14.jpg",
          "name": "Oppo14",
          "price": "20,999"
        },
        {
          "id": 11,
          "image": "redmi11.jpg",
          "name": "Redmi11",
          "price": "23,199"
        },
        {
          "id": 12,
          "image": "redmi11pro.jpg",
          "name": "Remi11Pro",
          "price": "22,999"
        },
        {
          "id": 13,
          "image": "redmi12.jpg",
          "name": "Redmi12",
          "price": "23,399"
        },
        {
          "id": 14,
          "image": "samsing9.jpg",
          "name": "SAMSUNG9",
          "price": "24,999"
        },
        {
          "id": 15,
          "image": "vivo.jpg",
          "name": "VIVO",
          "price": "25,999"
        },
        {
          "id": 16,
          "image": "vivo2.jpg",
          "name": "VIVO2",
          "price": "26,999"
        }
      ]
      )

  return (
    <section className='w-5/6 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16 my-10 py-10'>
        {
            mobiles.map((mobile) => {
                return <MobilesCard key={mobile.id} mobile={mobile} />
            })
        }
    </section>
  )
}

export default Items