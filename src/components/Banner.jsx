import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full max-h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"></div>
      <Carousel autoPlay infiniteLoop showIndicators={false} showThumbs={false} interval={5000}>
        <div>
          <img loading="lazy" src="https://links.papareact.com/gi1" alt="Banner" />
        </div>
        <div>
          <img loading="lazy" src="https://links.papareact.com/6ff" alt="Banner" />
        </div>
        <div>
          <img loading="lazy" src="https://links.papareact.com/7ma" alt="Banner" />
        </div>
      </Carousel>
    </div>
  )
}
