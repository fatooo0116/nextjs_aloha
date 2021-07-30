import React from 'react'
import Link from 'next/link'





function Menu(props) {

        

        return (
            <div id="menu" className="global_menu">
            <div id="menu-closeText" className="menu-closeText menu-close"  >
                <div><div className="menu-closeText-label avenir"    >close</div></div>
            </div>
            <div id="menu-closeBtn" className="menu-closeBtn menu-close is-clickable">
                <div className="menu-closeBtn-line"></div>
                <div className="menu-closeBtn-line"></div>
            </div>



            <div className="menu-inner">
                <div className="menu-body avenir">
                    <nav id="menu-nav" className="menu-nav">
                        
                        <Link href={'/'} className="is-current">
                            <a><div className="menu-nav-text split-text"><span>t</span><span>o</span><span>p</span></div></a>
                        </Link>                                                      
                        <Link href="/company/">
                            <a><div className="menu-nav-text split-text"><span>c</span><span>o</span><span>m</span><span>p</span><span>a</span><span>n</span><span>y</span></div></a>
                        </Link>          
                        <Link href="/work">
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
            <ul>
                <li>                       
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/news">
                        <a>News</a>
                    </Link>
                </li>
                
            </ul>
        </div>
        )
    }
export default Menu;