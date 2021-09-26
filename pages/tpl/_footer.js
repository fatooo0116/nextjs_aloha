import { Parallax } from 'react-scroll-parallax';
import Link from 'next/link'



export default function Footer() {
    return (
        <footer className="">
            
            {/* 
        <Parallax className="parallax_img" y={[-20, 20]} tagOuter="figure">
            <img src="http://api.aloha-tech.com/wp-content/uploads/2021/07/group-people-holding-hand-assemble-togetherness.jpg" />
        </Parallax>
        */}

          
            <div  className="contactme ft-con__inner ">                
                <div className="" >
                    <ul className="footer_menu">
                        <li>
                                <Link href={'/'} className="is-current">
                                <a href="#">HOME</a>
                                </Link>
                        </li>                        
                        <li>
                                <Link href={'/blog'} >
                                <a href="#">BLOG</a>
                                </Link>
                        </li>
                        <li>
                                <Link href={'/about'} >
                                <a href="#">ABOUT</a>
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