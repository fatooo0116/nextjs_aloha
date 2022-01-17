
import styles from '../styles/Home.module.css'
import Header from './tpl/_header'
import Footer from './tpl/_footer'

import Form from './tpl/_form'

import {getAllPostsForHome} from '../lib/api'



export default function Contact(props) {



  return (
    <div className={styles.container}>


      <Header />
       
        <main id="contact">
          <div class="inner" >

            <div class="top">
              <h2><span class="sub">How we can help</span>馬上著手，實現您的創意</h2>
              <div  class="tsub">
                立即來電聊聊您的專案，我們將一步步為您規劃，從基礎設備至每一階段的專案進程，隨著您公司業務的不段擴張，我們也將逐步調整所需系統，成為您最強的資訊後盾，無後顧之憂。
              </div>
            </div>


            <div id="breadcrumbs" className="center">
                    <a href="/">Home</a>  » <a >Contact</a>
            </div>            

           <div class="c_banner">
            <img src="https://api.aloha-tech.com/wp-content/uploads/2021/11/145-scaled.jpg" />
           </div>


          <div class="small_case">     
            <div class="inner">
                  <div class="left">
                    <h3>您可以參考我們的<br/><span class="red">啟動專案</span></h3>
                    
                    <h4>立即下單可享 挑選您想要的版型</h4>  
                    <p>以不到四萬的價格擁有自己的網站</p>
                  </div> 
                  <div class="right">
                      <ul>
                        <li>內容型網站 - 可用於公司，個人網站</li>
                        <li>全後台可以自行修改</li>
                        <li>包含網頁主機(一年)</li>
                        <li>SSL 安全憑證(一年)</li>
                        <li>搜尋引擎容易搜尋</li>
                        <li>一次買斷，無需月付</li>
                      </ul>
                  </div>
                </div>
            </div>
          </div>  

          <div  id="content">   


<div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >

                    <h3>聯絡我們</h3>          
                    <Form />          
                  </div>

        </main>
      <Footer />

    </div>
  )
}


export async function getStaticProps() {
  //  const allPosts = await getAllPostsForHome()
  
    return {
        props: {
          allPosts:[1,3,4,5],
          form_name:'x'
        },
      }
  }
