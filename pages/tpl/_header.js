
import Head from 'next/head'
import React from 'react'
import Menu from './_menu'

class Header extends React.Component{
  constructor(props){
      super(props)
      this.state = {
          menuOpen:0
      }    
  }


  ToggleMenu = () =>{
     console.log("FUCK");
    //  this.setState({menuOpen:!this.state.menuOpen});
  }

  home = () =>{
    window.alert("xxx");
  }


  render(){

    return(
        <>
        
       <Head>
        <title>Aloha Tech Software</title>

        <meta name="description" content="" />
        <meta name="keywords" content="" />

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
            <a href="/" onClick={this.home}>
              <img src="http://api.aloha-tech.com/wp-content/uploads/2021/06/aloha_logo_2w.svg" />
            </a>
          </div>          
        </header>
        
        <div className={(this.state.menuOpen)? "menuBg is-open":"menuBg" } id="menuBg">        
          <Menu />
        </div>

        <div id="menuBtn" className="menuBtn" onClick={this.ToggleMenu}>
            <div className="menuBtn-inner">
              <div className="menuBtn-line"></div>
              <div className="menuBtn-line"></div>
              <div className="menuBtn-line"></div>
            </div>
        </div>   




      </>
    )
}
}

export default Header