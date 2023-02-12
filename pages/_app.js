import '../styles/globals.css';
import Layout from '../components/layout';
import { Roboto_Slab } from '@next/font/google';

const roboto = Roboto_Slab({
  subsets: ['latin'],
  weight: '400',
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={roboto.className} data-theme="cupcake">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}

export default MyApp;
