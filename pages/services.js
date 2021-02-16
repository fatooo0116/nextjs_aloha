
import styles from '../styles/Home.module.css'
import Header from './tpl/_header'
import Footer from './tpl/_footer'


import {getAllPostsForHome} from '../lib/api'



export default function Home(props) {
  return (
    <div className={styles.container}>


      <Header />
        <Menu />
        <main>
            <h2>Aloha Tech Software</h2>
            <ul>
                {props.allPosts.map((post , key) => (
                    <li key={key} >{post}</li>
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
