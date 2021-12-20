import styles from '../../styles/Home.module.css'
import Header from '../tpl/_header'
import Footer from '../tpl/_footer'

// import {getAllPostsForHome} from '../../lib/api'

import { useRouter } from 'next/router';


export default function BlogId(props) {

  const router = useRouter();
  console.log(props)


  return (
    <div className={styles.container}>
      <Header  title={props.detail.title} />
      <main className="page_contents">    
          <div id="single_blog" >
            <div className="single_top" >
              <h1>{props.detail.title}</h1>
            

             <div className="desc"  dangerouslySetInnerHTML={{ __html: props.detail.content }} />                

     
            </div>
          </div>
      </main>
      <Footer />
    </div>
  )
}




export const getServerSideProps = async (context) => {

  console.log(context.params.blogId);

  const res = await fetch(`https://api.aloha-tech.com//wp-json/work/v1/get_blog_by_title`,{
    method: 'POST',
    // headers 加入 json 格式
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: context.params.blogId,    
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
          detail:data
        },
      }
};