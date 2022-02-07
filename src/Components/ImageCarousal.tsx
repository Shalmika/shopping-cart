import { makeStyles } from '@material-ui/styles'
import image1 from '../Assets/Images/shopping-cart-1.png'
import image2 from '../Assets/Images/shopping-cart-2.png'
import image3 from '../Assets/Images/shopping-cart-3.png'
import image4 from '../Assets/Images/shopping-cart-4.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Keyboard, Scrollbar } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

const useStyles = makeStyles(() => ({
    media: {
        width: "80%",
        height: "100%",
        paddingLeft: "0px !important"
    }
}))
SwiperCore.use([Keyboard, Scrollbar, Pagination])

const ImageCarousal = () => {
    const { media } = useStyles()
    const images = [image1, image3, image4]
    return (
        <Swiper tag="section" wrapperTag="ul" id="main" pagination style={{paddingLeft: "0px !important"}}>
            {images.map((image, index) => {
                return <SwiperSlide tag="li" key={index} style={{ listStyle: "none" }}>
                    <img src={image} className={media} alt="imageInCarousal"></img>
                </SwiperSlide>
            })}
        </Swiper>
    )
}
export default ImageCarousal

