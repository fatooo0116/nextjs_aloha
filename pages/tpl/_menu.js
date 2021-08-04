import React from 'react'
import Link from 'next/link'





function Menu(props) {

        

        return (
            <div id="menu" className="global_menu">
            <div id="menu-closeText" className="menu-closeText menu-close" onClick={props.MenuClose}  >
                <div><div className="menu-closeText-label avenir"    >close</div></div>
            </div>

            <div id="menu-closeBtn" className="menu-closeBtn menu-close is-clickable" onClick={props.MenuClose}>
                <div className="menu-closeBtn-line"></div>
                <div className="menu-closeBtn-line"></div>
            </div>



            <div className="menu-inner">
                <div className="menu-body avenir">
                    <nav id="menu-nav" className="menu-nav">
                        
                        <Link href={'/blog'} className="is-current">
                            <a><div className="menu-nav-text split-text"><span>B</span><span>L</span><span>O</span><span>G</span></div></a>
                        </Link>                                                      
                        <Link href="/about/">
                            <a><div className="menu-nav-text split-text"><span>A</span><span>B</span><span>O</span><span>U</span><span>T</span></div></a>
                        </Link>          
                        <Link href="/works">
                            <a><div className="menu-nav-text split-text"><span>w</span><span>o</span><span>r</span><span>k</span></div></a>
                        </Link>                                                 
                        <Link href="/services/">
                            <a><div className="menu-nav-text split-text"><span>s</span><span>e</span><span>r</span><span>v</span><span>i</span><span>c</span><span>e</span><span>s</span></div></a>
                        </Link>

                        <Link href="/contact/">
                            <a><div className="menu-nav-text split-text"><span>c</span><span>o</span><span>n</span><span>t</span><span>a</span><span>c</span><span>t</span></div></a>
                        </Link>
                    </nav>
                </div>
            </div> 
  
        </div>
        )
    }
export default Menu;