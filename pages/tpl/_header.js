
import Head from 'next/head'
import React from 'react'
import Menu from './_menu'
import Link from 'next/link'


class Header extends React.Component{
  constructor(props){
      super(props)
      this.state = {
          menuOpen:0,
          menuCloseAni:0
      }    
  }


  ToggleMenu = () =>{    
     this.setState({
       menuOpen:!this.state.menuOpen
      });
  }


  home = () =>{
    // window.alert("xxx");
  }


  MenuClose = () =>{
    this.setState({
      menuCloseAni:1
    });

    let me = this;
    setTimeout(function(){
      me.setState({
        menuOpen:0,
        menuCloseAni:0
      });
    },1100);
  }



  render(){

    return(
        <div id="aloha_header"   className={(this.state.menuCloseAni)? "closing":"" }>
        
          <Head>
            <title>Aloha Tech Software | 軟體設計 | 網頁設計 | APP建置 </title>

            <meta name="description" content="幫助各個企業主加速商品銷售，不論公司規模大小，我們提供各種銷售利器，讓您的訊息能迅速傳播，掌握各種商機，結合最新銷售管道像是 Line App ，FB行銷，線上直播等等，我們也能客制各種軟體ERP ,ios app android app wordpress, 各種API串接開發，簡化貴公司的事務處理流程，或者是優化網站加強SEO" />
            <meta name="keywords" content="軟體設計,網頁設計,APP建置,台北網頁設計,台北網頁推薦,web develope,website developement, ios app,flutter," />

            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <meta http-equiv="x-ua-compatible" content="ie=edge"></meta>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="/main.css" />


            
            
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
              <div id="global_logo">
                <Link href={'/'} className="is-current">
                  <img src="http://api.aloha-tech.com/wp-content/uploads/2021/06/aloha_logo_2w.svg" />
                </Link>
              </div>          
            </header>
            
            
        
              <div className={(this.state.menuOpen)? "menuBg is-open":"menuBg" } id="menuBg">        
                <Menu  MenuClose= {this.MenuClose}/>
              </div>
            

            <div id="menuBtn" className="menuBtn" onClick={this.ToggleMenu}>
                <div className="menuBtn-inner">
                  <div className="menuBtn-line"></div>
                  <div className="menuBtn-line"></div>
                  <div className="menuBtn-line"></div>
                </div>
            </div>   




      </div>
    )
}
}

export default Header