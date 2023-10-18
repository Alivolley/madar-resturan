import styled from '@emotion/styled';

const HeaderStyle = styled.div(() => ({
   '& #dropdownWrapper': {
      position: 'relative',

      '&:hover #dropdownBox': {
         opacity: 1,
         visibility: 'visible',
         transition: 'all 0.3s',
         transform: 'translateY(10px)',
      },

      '&:hover svg': {
         transform: 'rotate(180deg)',
      },
   },

   '& #dropdownBox': {
      position: 'absolute',
      right: 0,
      top: '14px',
      overflow: 'hidden',
      transition: 'all 0.3s',
      opacity: 0,
      visibility: 'hidden',
   },
}));

export default HeaderStyle;
