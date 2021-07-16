# 1)Header components
```js
//next.config.js
module.export = {
     images:{
          domains:['links.papareact.com','fakestoreapi.com']
}}
```

# 2)Product.js
```js
//components/Product.js
const MAX_RATING=1; const MIN_RATING=5;
//getting number from 1 to 5 
const [rating]= useState(Math.floor(Math.random()*(MAX_RATING -MIN_RATING +1)) +MIN_RATING)

// 1 to 5 start
<div className="flex">
{Array(rating).fill().map((_,i)=> <StarIcon className="h-5">)}
</div>
```

# 3)Implementing next auth
```js
yarn add next-auth

```

# 4)Implementing Firebase
 1. Create new Project
 2. amazon name  and no firebase hosting as we do vercel for deployment
 3. Add firebase Sdk

# 5)Authorising redirects URLS
```js
//src\pages\api\auth\[...nextauth].js
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,
})

//src/components/Header.js
import { signIn, signOut, useSession } from 'next-auth/client'

<div onClick={signIn} className="link cursor-pointer">
 <p>Hello Shirshak</p>
 <p className="font-extrabold md:text-sm">Account & Lists</p>
</div>

```

# 6)Implementing the basket page 
# 7)Implementing Redux 
```js
//src\slices\basketSlice.js
import { createSlice } from '@reduxjs/toolkit'
const initialState = { items: []}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {},
    removeFromBasket: (state, action) => {},
  },
})

export const { addToBasket, removeFromBasket } = basketSlice.actions

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items
export default basketSlice.reducer
```
# 8) Currency 
```js
import Currency from 'react-currency-formatter'

  <div className="mb-5">
        <Currency quantity={price} currency="GBP" />
  </div>

```


 