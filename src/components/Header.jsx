import Image from 'next/image'
import { MenuIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import styled from 'styled-components/'

const TopNav = styled.div``
const BottomNav = styled.div``

export default function Header() {
  return (
    <header>
      {/* Top nav */}
      <TopNav className="flex item-center bg-amazon_blue-light p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer "
          />
        </div>

        {/* Search */}
        <div className="hidden h-10 sm:flex items-center rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            type="text"
            className="p-2 items-center h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
          />
          <SearchIcon className="h-14 p-4 items-center" />
        </div>

        {/* Right */}
        <div className="text-white flex items-start text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>Hello Shirshak</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>

          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">Orders</p>
          </div>

          <div className="link relative flex items-center ">
            <span className="absolute top-0 right-0 sm:right-10 h-4 w-4 text-center bg-yellow-400 rounded-full text-black font-bold ">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="font-extrabold md:text-sm hidden sm:block">Basket</p>
          </div>
        </div>
      </TopNav>

      {/* Bottom nav */}
      <BottomNav className="flex item-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </BottomNav>
    </header>
  )
}