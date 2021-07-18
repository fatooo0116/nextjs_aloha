
import styles from '../styles/Home.module.css'
import Header from './tpl/_header'
import Footer from './tpl/_footer'




export default function Home(props) {
  return (
    <div className={styles.container}>

      <Header />      
        <main className="page_contents">

          <div id="intro" class="works-intro">
            <div class="works-intro__inner u-inner">
              <div class="works-intro__txt-wrap txtWrap">
                <h1 class="works-intro__head tit c-head01 u-poppins">works</h1>
                <ul class="works-intro__tab tab">
                  <li class="works-intro__item item u-poppins is-current"><a class="works-intro__link" href="https://www.m-hand.co.jp/works/">all</a></li>
                  <li class="works-intro__item item u-poppins"><a class="works-intro__link" href="https://www.m-hand.co.jp/works/cat/service">SERVICE</a></li>
                  <li class="works-intro__item item u-poppins"><a class="works-intro__link" href="https://www.m-hand.co.jp/works/cat/corporate">CORPORATE</a></li>
                  <li class="works-intro__item item u-poppins"><a class="works-intro__link" href="https://www.m-hand.co.jp/works/cat/recruit">RECRUIT</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div id="archive" >
            <div class="_innerbox" >
              <ul >
              {props.allPosts.map((post , key) => (
                    <li key={key} >{post}</li>
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

 
    return {
        props: {
          allPosts:[1,2,3]
        },
      }
  }
