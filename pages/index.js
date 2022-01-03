
import styles from '../styles/Home.module.css'
import Header from './tpl/_header'
import Footer from './tpl/_footer'
import { Parallax } from 'react-scroll-parallax';

import Link from "next/link";






export default function Home(props) {


  console.log(props);

  /*
  let archive_list = [];

  props.allPosts.data.map((post , key) => (

  ))}  
  */


  

  return (
   <div id="outter">

      <Header />  


        <main className="page_contents">
          <div id="intro" className="works-intro">
            <div className="works-intro__inner u-inner">
              <div className="works-intro__txt-wrap txtWrap">
                <h1 id="home_bn1" className="works-intro__head tit c-head01 u-poppins">works</h1>
                <h3 className="aloha_small_title">我們擁有20多年，網站設計，程式設計，網站建置，網站SEO的經驗，技術隨著時間與接手案子不斷累積，與時俱進，
                  進而協助我們的客戶，解決棘手的難題，簡化複雜的流程或提升至理想的業績目標。                  
                </h3>
                {/* 
                <ul className="works-intro__tab tab">
                  <li className="works-intro__item item u-poppins is-current"><a className="works-intro__link" href="/works/">all</a></li>
                  <li className="works-intro__item item u-poppins"><a className="works-intro__link" href="/service">SERVICE</a></li>
                  <li className="works-intro__item item u-poppins"><a className="works-intro__link" href="/corporate">CORPORATE</a></li>
                  <li className="works-intro__item item u-poppins"><a className="works-intro__link" href="/recruit">RECRUIT</a></li>
                </ul>
                */}
              </div>
            </div>
          </div>
          
          <div id="archive" >
            <div className="_innerbox  u-inner" >
              <ul className="works-archive-list">            
                {props.allPosts.data.map((post , key) => (
                    <li  className="works-archive__item" key={post.id} >
                      <Link href={`/works/${post.title}`}>
                          <a href={`/works/${post.title}`} title="台北網頁設計 | website design" >
                            <div className="works-archive__img-wrap">
                                <div className="works-archive__img" style={{"backgroundImage": (post.img)? "url("+post.img+")":"url(https://www.m-hand.co.jp/wp/wp-content/uploads/2021/01/eb907077085c777126270a7f324c87f4.jpg)" }}></div>
                            </div>
                            <div className="works-archive__area-txt">
                                <p className="works-archive__head u-poppins">{post.title}</p>
                            </div>                                               
                          </a>
                        </Link>
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



  