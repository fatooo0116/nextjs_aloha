
import styles from '../styles/Home.module.css'
import Header from './tpl/_header'
import Footer from './tpl/_footer'
import { Parallax } from 'react-scroll-parallax';


export default function Home(props) {
  return (
   <div className={styles.container}>

      <Header />  


        <main className="page_contents">

          <div id="intro" className="works-intro">
            <div className="works-intro__inner u-inner">
              <div className="works-intro__txt-wrap txtWrap">
                <h1 className="works-intro__head tit c-head01 u-poppins">works</h1>
                <ul className="works-intro__tab tab">
                  <li className="works-intro__item item u-poppins is-current"><a className="works-intro__link" href="https://www.m-hand.co.jp/works/">all</a></li>
                  <li className="works-intro__item item u-poppins"><a className="works-intro__link" href="https://www.m-hand.co.jp/works/cat/service">SERVICE</a></li>
                  <li className="works-intro__item item u-poppins"><a className="works-intro__link" href="https://www.m-hand.co.jp/works/cat/corporate">CORPORATE</a></li>
                  <li className="works-intro__item item u-poppins"><a className="works-intro__link" href="https://www.m-hand.co.jp/works/cat/recruit">RECRUIT</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div id="archive" >
            <div className="_innerbox  u-inner" >
              <ul className="works-archive-list">            
                {props.allPosts.data.map((post , key) => (
                    <li  className="works-archive__item" key={key} >
                        <a href="https://www.m-hand.co.jp/works/maeda-corporation-recruit-site/" className="works-archive__link">
                            <div className="works-archive__img-wrap">
                                <div className="works-archive__img" style={{"background-image": "url(https://www.m-hand.co.jp/wp/wp-content/uploads/2021/01/eb907077085c777126270a7f324c87f4.jpg)"}}></div>
                            </div>
                            <div className="works-archive__area-txt">
                                <p className="works-archive__head u-poppins">{post.title}</p>
                            </div>                                               
                        </a>
                    </li>
                ))}                
              </ul>
            </div>
          </div>


        </main>
      <Footer />

    </div>
  )
}


export async function getStaticProps() {
   // const allPosts = await getAllPostsForHome()
  

   const res = await fetch(`https://api.aloha-tech.com//wp-json/work/v1/work_api`,{
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
