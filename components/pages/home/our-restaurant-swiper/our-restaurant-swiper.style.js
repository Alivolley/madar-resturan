import styled from '@emotion/styled';

const OurRestaurantSwiperStyle = styled.div(() => ({
   '& .swiper-pagination-bullet': {
      backgroundColor: '#ADADAD',
      opacity: 1,
   },

   '& .swiper-pagination-bullet-active': {
      backgroundColor: '#417F56',
      border: '2px solid white',
   },

   '& .swiper-button-next, .swiper-button-prev': {
      color: 'white',
   },
}));

export default OurRestaurantSwiperStyle;
