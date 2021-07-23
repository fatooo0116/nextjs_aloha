import Header from '../tpl/_header'
import Footer from '../tpl/_workFooter'
import { useRouter } from 'next/router';

import styles from '../../styles/Home.module.css'




export default function WorkId(props) {

  const router = useRouter();

  console.log(router.query.workId);

  return (
    <div className={styles.container}>

      <Header />      
      <main className="page_contents">
    
          <div id="single_post" >
              <h1>{router.query.workId}</h1>
          </div>
      </main>
      <Footer />

    </div>
  )
}


