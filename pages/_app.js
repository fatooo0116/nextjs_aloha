import '../styles/globals.css'

import { ParallaxProvider } from 'react-scroll-parallax';

import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress

import Router from 'next/router';
//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());  



function MyApp({ Component, pageProps }) {
  return <ParallaxProvider><Component {...pageProps} /></ParallaxProvider>
}

export default MyApp
