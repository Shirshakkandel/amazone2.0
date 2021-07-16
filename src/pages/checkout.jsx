import Head from 'next/head'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import CheckoutProduct from '../components/CheckoutProduct'
import { useSession } from 'next-auth/client'
import Currency from 'react-currency-formatter'
import Header from '../components/Header'
import { selectItems, selectTotal } from '../slices/basketSlice'

export default function Checkout() {
  const [session] = useSession()
  const items = useSelector(selectItems)
  const total = useSelector(selectTotal)
  return (
    <div>
      <Head>
        <title>Checkout</title>
      </Head>
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* Left */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0 ? 'Your Basket is empty' : 'Shopping Basket'}
            </h1>

            {items.map((item, i) => (
              <div key={i}>
                <CheckoutProduct {...item} />
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items):
                <span className="font-bold">
                  <Currency quantity={total} currency="GBP" />
                </span>
              </h2>

              <button
                disabled={!session}
                className={`button mt-2 ${
                  !session &&
                  'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed '
                }`}
              >
                {!session ? 'Sign in to Checkout' : 'Proceed to checkout'}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  )
}
