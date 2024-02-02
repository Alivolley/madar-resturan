import styled from '@emotion/styled';

const AdminLayoutStyle = styled.div(() => ({
   '#container': {
      '@media (min-width: 900px)': {
         width: 'calc(100vw - 330px)',
      },
   },
}));

export default AdminLayoutStyle;
