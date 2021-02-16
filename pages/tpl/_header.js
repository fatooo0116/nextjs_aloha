
import Head from 'next/head'
import React from 'react'
import Menu from './menu'

class Header extends React.Component{
  constructor(props){
      super(props)
      this.state = {
          menuOpen:true
      }
      this.ToggleMenu = this.ToggleMenu.bind(this);
  }
  ToggleMenu(){
      alert('xx');
      this.setState({menuOpen:!this.state.menuOpen});
  }
  render(){

    return(
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
          <div id="global_logo">
            <a href="/">
              <img src="https://api.aloha-tech.com/wp-content/uploads/2021/02/aloha_logo_w.svg" />
            </a>
          </div>          
        </header>
        <div class={(this.state.menuOpen)? "menuBg is-open":"menuBg" } id="menuBg"></div>
        
        <Menu />

        <div id="menuBtn" class="menuBtn" onClick={this.ToggleMenu}>
            <div class="menuBtn-inner">
              <div class="menuBtn-line"></div>
              <div class="menuBtn-line"></div>
              <div class="menuBtn-line"></div>
            </div>
        </div>   

        <div id="top" class="full_h  center_box">
          <h1>Website , Mobile App <br/>Software Development.</h1>
        </div>


      </>
    )
}
}

export default Header