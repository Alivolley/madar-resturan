import Head from 'next/head';
import AppLayout from '@/components/layout/app-layout/app-layout';
import '@/styles/globals.css';
import '@/styles/reset.css';

export default function App({ Component, pageProps }) {
   return (
      <>
         <Head>
            <title>مادر</title>
            <meta name="description" content="Your website description here" />
            <meta name="keywords" content="comma, separated, keywords" />
            <meta name="author" content="مادر" />
            <meta name="enamad" content="104304" />
         </Head>
         <AppLayout>
            <Component {...pageProps} />
         </AppLayout>
      </>
   );
}
