import Image from 'next/image'
import { useState } from 'react'
import { StarIcon } from '@heroicons/react/solid'
import Currency from 'react-currency-formatter'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../slices/basketSlice'

const MAX_RATING = 5
const MIN_RATING = 1

export default function Product({ id, title, description, category, image, price }) {
  const dispatch = useDispatch()
  const [rating] = useState(Math.floor(Math.random() * (MAX_RATING - MIN_RATING - 1) + MIN_RATING))
  const [hasPrime] = useState(Math.random() < 0.5)

  const addItemToBasket = () => {
    const product = { id, title, rating, description, category, image, hasPrime, price }
    //sending the product as an action to the REDUX store
    dispatch(addToBasket(product))
  }

  return (
    <div className=" hover:scale-110 relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-sm italic text-gray-400">{category}</p>
      <Image className=" cursor-pointer" src={image} height={200} width={200} objectFit="contain" />

      <h4 className="my-2">{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon style={{ height: '20px' }} key={i} />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      <div className="mb-5">
        <Currency quantity={price} currency="GBP" />
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img className="w-12" src="https://links.papareact.com/fdw" alt="Prime" />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}

      <button onClick={addItemToBasket} className="mt-auto button">
        Add to Basket
      </button>
    </div>
  )
}
