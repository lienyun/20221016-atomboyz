<template>
    <Carousel :autoplay="2000">
        <Slide v-for="slide in slides" :key="slide">
            <div class="carousel__item">
                <img :src=slide.pic alt="">
            </div>
        </Slide>
        <template #addons>
            <Navigation />
            <Pagination />
        </template>

    </Carousel>

</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
    name: 'carousel',
    data() {
        return {
            slides: [
                { id: 1, pic: 'https://womany.net/cdn-cgi/image/w=800,fit=scale-down,f=auto/https://castle.womany.net/images/content/pictures/130660/b1f99db825723e703650463568ba6d2c.jpeg' },
                { id: 2, pic: 'https://img.ttshow.tw/images/author/Lauren/FotoJet%20(61)(3).jpg' },
                { id: 3, pic: 'https://crowd-watch.s3-ap-northeast-1.amazonaws.com/wp-content/uploads/2022/09/08151926/%E5%8E%9F%E5%AD%90%E5%B0%91%E5%B9%B4.jpg' },
                { id: 4, pic: 'https://dvblobcdnjp.azureedge.net//Content/Upload/Popular/Images/2022-08/75b706f3-bf9e-426c-ad1c-3a1497e9849f_m.jpg' },
                { id: 5, pic: 'https://img.ttshow.tw/images/author/Lauren/FotoJet%20(61)(3).jpg' }
            ]
        }
    },
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
}

</script>

<style lang="scss" scoped>
.carousel__item {
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    flex-shrink: 0;

    & img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

}
</style>