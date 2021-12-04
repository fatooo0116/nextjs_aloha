
import Link from 'next/link'

export default function workFooter() {
    return (
        <footer className="">

            <div className="work_nav">            
                <div class="works-pager__inner u-inner">
                    <ul class="works-pager__list">
                        <li class="works-pager__item  ">
                            <a href="#" class="prev">prev</a>
                        </li>
                        <li class="works-pager__item is-back">
                        <Link href={`/`}>
                        list
                        </Link>
                        </li>
                        <li class="works-pager__item  ">
                        <a href="#" class="next">next</a>
                        </li>
                    </ul>
                </div>
            </div> 


          
            <div  className="contactme ft-con__inner ">                
                <div className="" >
                    <ul className="footer_menu">
                    <li>
                                <Link href={'/'} className="is-current">
                                <a href="#">HOME</a>
                                </Link>
                        </li>                        
                        <li>
                                <Link href={'/myblog'} >
                                <a href="#">BLOG</a>
                                </Link>
                        </li>
                 
                        <li>
                                <Link href={'/services'} >
                                <a href="#">SERVICE</a>
                                </Link>
                        </li>                                      
                        <li>
                                <Link href={'/contact'} >
                                <a href="#">CONTACT</a>
                                </Link>
                        </li> 
                    </ul>
                </div>
                <small>©Aloha-tech, Inc.</small>   
            </div>

            <div className="js-pagetop"><a herf="#" className="backtop">TOP</a></div>   
        </footer>
    )
}