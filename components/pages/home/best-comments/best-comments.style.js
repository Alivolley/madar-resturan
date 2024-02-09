import styled from '@emotion/styled';

const BestCommentsStyle = styled.div(() => ({
   '.swiper-slide': {
      opacity: 0.6,
   },

   '.swiper-slide.swiper-slide-active': {
      opacity: 1,
   },

   '.swiper-slide-shadow-right': {
      backgroundImage: 'none !important',
   },

   '.swiper-slide-shadow-left': {
      backgroundImage: 'none !important',
   },

   '.swiper-button-prev,.swiper-button-next': {
      backgroundColor: '#ffffff',
      color: '#ff6600',
      width: '35px',
      height: '35px',
      borderRadius: '50%',
      boxShadow: '0px 0px 15px 0px #00000050',

      '@media screen and (min-width:900px)': {
         width: '60px',
         height: '60px',
      },

      ':after': {
         fontSize: '16px',
      },
   },

   '.swiper-button-next': {
      '@media screen and (min-width:1000px)': {
         left: '25% !important',
      },
   },
   '.swiper-button-prev': {
      '@media screen and (min-width:1000px)': {
         right: '25% !important',
      },
   },

   '.swiper-pagination-bullet': {
      width: '8px',
      height: '8px',
   },

   '.swiper-pagination-bullet-active': {
      backgroundColor: '#FA7E0A',
      width: '10px',
      height: '10px',
   },
   '.swiper-pagination-bullets': {
      bottom: '-5px !important',
   },
}));

export default BestCommentsStyle;
