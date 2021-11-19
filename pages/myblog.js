
import styles from '../styles/Home.module.css'
import Header from './tpl/_header'
import Footer from './tpl/_footer'
import Link from "next/link";



// import {getAllPostsForHome} from '../lib/api'



export default function MyBlog(props) {

  console.log(props);


  // let imgbox = (post.img_s)? <img src={post.img_s} /> :'';


  return (
    <div className={styles.container}>


      <Header />
        
        <main id="blog">
        <h2>Blog</h2>
           
            <div className="blog_outter">              
                {props.allPosts.data.map((post , key) => (
                    <div className="box" key={key} >
                      
                        <a href={`/blogs/${post.title}`}>
                        <div className="pimg"><Link href={`/blogs/${post.title}`} >{(post.img)? <img src={post.img} />: '' }</Link></div>
                        <div className="rtext">
                          <h3 className="b_title"><Link href={`/blogs/${post.title}`} >{post.title}</Link></h3>
                          <div className="b_meta">{post.date}</div>
                          <div className="b_tag">
                            <Link href={`/blogs/${post.title}`}>#主機安裝</Link>
                          </div>
                        </div>
                        </a>
                   
                      
                      

                    </div>
                ))}                              
            </div>               
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
