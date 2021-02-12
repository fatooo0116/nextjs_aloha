import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from './tpl/_header'
import Footer from './tpl/_footer'
import Menu from './tpl/_menu'

import {getAllPostsForHome} from '../lib/api'



export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aloha Tech Software</title>
        
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="styles/main.css" />
      </Head>


      <Header />
        <Menu />
        <main>
            <h2>Aloha Tech Software</h2>
            <ul>
                {props.allPosts.map((post) => (
                    <li>{post}</li>
                ))}
            </ul>               
        </main>
      <Footer />

    </div>
  )
}


export async function getStaticProps() {
  //  const allPosts = await getAllPostsForHome()
  
    return {
        props: {
          allPosts:[1,3,4,5]
        },
      }
  }
