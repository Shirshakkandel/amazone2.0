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