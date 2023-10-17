import AppLayout from '@/components/layout/app-layout/app-layout';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
   return (
      <AppLayout>
         <Component {...pageProps} />
      </AppLayout>
   );
}
