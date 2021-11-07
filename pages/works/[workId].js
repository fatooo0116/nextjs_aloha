import Header from '../tpl/_header'
import Footer from '../tpl/_workFooter'
import { useRouter } from 'next/router';

import styles from '../../styles/Home.module.css'




export default function WorkId(props) {

  const router = useRouter();
  
  console.log(router);
  console.log(props)


  // let imgbk = "background-image:url("+props.detail.top_img[0].url+")"

    let imgsrc = (props.detail.top_img)?props.detail.top_img[0].url:'';

    let main_style = "page_contents "+props.detail.page_style;

  return (
    <div className={styles.container}>

      <Header />      
      <main className={main_style}>    
          <div id="single_post" >
            <div className="single_top"   >

            <div class="bk" style={{backgroundImage:"url(" + imgsrc + ")" }} ></div>

              <div class="top_desc" >
                <div class="box">
                  <h1>{router.query.workId}</h1>
                </div>
              </div>
             
            </div>

            <div className="desc"  dangerouslySetInnerHTML={{ __html: props.detail.content }} />              
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