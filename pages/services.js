
import styles from '../styles/Home.module.css'
import Header from './tpl/_header'
import Footer from './tpl/_footer'


import {getAllPostsForHome} from '../lib/api'



export default function Home(props) {
  return (
    <div className={styles.container}>


      <Header />
       
        <main id="service">
           
            <section class="s_layer1">

              <h2 class="main_title">
                <span class="sub">Service</span>我們的服務
              </h2>
              <p class="tsub mx800">
                幫助各個企業主加速商品銷售，不論公司規模大小，我們提供各種銷售利器，讓您的訊息能迅速傳播，掌握各種商機，結合最新銷售管道像是 Line App ，FB行銷，線上直播等等，我們也能客制各種軟體ERP, 各種API串接開發，簡化貴公司的事務處理流程，或者是優化網站加強SEO
              </p>


            <div id="breadcrumbs" className="center">
                    <a href="/">Home</a>  » <a >Services</a>
            </div>

              <div class="inner">
                
                <div className="right">
                    <h3  class="text_box" >
                      <div class="small">WEB Development</div>
                      建置各種網站，購物網站，內容型網站，API服務
                    </h3>
                  <div class="summary">
                  </div>
                </div>
                 <div className="left"><img src="http://api.aloha-tech.com/wp-content/uploads/2021/11/未命名-1.gif" /></div>
              </div>
            </section>




            <section class="s_layer2">
              <div class="inner">               
                 <div className="right"><img src="http://api.aloha-tech.com/wp-content/uploads/2021/11/mb.png" /></div>
                 <div className="left">                 

                  <h3  class="text_box" >
                    <div class="small">APP Development</div>
                    APP建置，各種功能的 IOS APP 與 Android APP 
                  </h3>
                  <div class="summary">
                        
                  </div>

                  </div>
              </div>
            </section>         

            
            <section class="s_layer3">
              <div class="inner">               
                 <div className="left">                   
                   <h3  class="text_box" >
                    <div class="small">SEO Optimisation</div>
                    優化各類網站，提升網站被搜尋的能力，提升排名
                  </h3>                   
                  </div>
                 <div className="right"><img src="http://api.aloha-tech.com/wp-content/uploads/2021/11/seo.png" /></div>                
              </div>
            </section>     



             <section class="s_layer2">
              <div class="inner">               
                 <div className="right"><img src="http://api.aloha-tech.com/wp-content/uploads/2021/11/p4.png" /></div>
                 <div className="left">
                       
                    <h3  class="text_box" >
                      <div class="small"> Digitial Marketing</div>
                      利用各種搜尋工具，行銷工具，提升貴公司的國內銷售，國際銷售
                    </h3>   

                 </div>
              </div>
            </section>   


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
