import styled from '@emotion/styled';

const TableStyle = styled.div(() => ({
   transition: 'all 0.5s',
   maxWidth: '100%',
   width: '100%',
   overflow: 'auto',

   table: {
      width: '100%',
      maxWidth: '100%',
      borderCollapse: 'separate',

      tr: {
         whiteSpace: 'nowrap',
      },

      '& td, th': {
         padding: '20px',
         verticalAlign: 'middle',
      },

      'tr td:nth-of-type(odd)': {
         color: '#7E8AAB',
         fontWeight: 'bold',
      },
   },
}));

export default TableStyle;
