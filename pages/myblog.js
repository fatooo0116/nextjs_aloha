
import styles from '../styles/Home.module.css'
import Header from './tpl/_header'
import Footer from './tpl/_footer'
import Link from "next/link";



// import {getAllPostsForHome} from '../lib/api'



export default function MyBlog(props) {

  console.log(props);


  return (
    <div className={styles.container}>


      <Header />
       
        <main>
            <h2>Aloha Tech Software</h2>
            <ul>
              
                {props.allPosts.data.map((post , key) => (
                    <li key={key} >
                      <Link href={`/blogs/${post.title}`}>
                      {post.title}
                      </Link>
                    </li>
                ))}
              
                
            </ul>               
        </main>
      <Footer />

    </div>
  )
}


export async function getStaticProps() {
  //  const allPosts = await getAllPostsForHome()
  
   /*
    return {
        props: {
          allPosts:[1,3,4,5]
        },
      }
      */


   const res = await fetch(`https://api.aloha-tech.com//wp-json/work/v1/post_api`,{
    method: 'POST',
    // headers 加入 json 格式
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: 'lovef1232e@hexschool.com',
      password: '12345678'
    })
   });
   const data = await res.json()
 
   if (!data) {
     return {
       notFound: true,
     }
   }

    return {
        props: {
        
          allPosts:data
        },
      }

  }
