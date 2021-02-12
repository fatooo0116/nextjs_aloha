
import Head from 'next/head'
export default function Header() {
    return (
        <>
        
       <Head>
        <title>Aloha Tech Software</title>
        
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="./main.css" />
        
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-157417377-2"></script>
        <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());            
              gtag('config', 'UA-157417377-2');`
            }}
          />




      </Head>


        
        <header>
        <div id="global_logo">logo</div>
        <div id="menu_btn">
            menu_btn
        </div>
      </header>
      </>
    )
}