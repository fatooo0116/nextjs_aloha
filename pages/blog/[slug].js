import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Header from '../tpl/_header'
import Footer from '../tpl/_footer'
import Menu from '../tpl/_menu'
import {getAllPostsForHome} from '../../lib/api'


export default function posts(allPosts) {

    

  return (
    <div className={styles.container}>


      <Header />

        <Menu />

        <main>
            <h2>POST</h2>
          
        </main>

      <Footer />

    </div>
  )
}


