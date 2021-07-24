import Header from '../tpl/_header'
import Footer from '../tpl/_workFooter'
import { useRouter } from 'next/router';

import styles from '../../styles/Home.module.css'




export default function WorkId(props) {

  const router = useRouter();
  console.log(router);

  console.log(props)




  return (
    <div className={styles.container}>

      <Header />      
      <main className="page_contents">    
          <div id="single_post" >
            <div className="single_top" >
              <h1>{router.query.workId}</h1>
            </div>

            <div className="desc"  dangerouslySetInnerHTML={{ __html: props.detail.content }} />                

            <div className="content_img">
              Content_Img
            </div>
          </div>
      </main>
      <Footer />

    </div>
  )
}





export const getServerSideProps = async (context) => {

  console.log(context.params.workId);

  const res = await fetch(`https://api.aloha-tech.com//wp-json/work/v1/get_post_by_title`,{
    method: 'POST',
    // headers 加入 json 格式
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: context.params.workId,    
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