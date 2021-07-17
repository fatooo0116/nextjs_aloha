

import { Parallax } from 'react-scroll-parallax';

export default function Footer() {
    return (
        <footer className="">

        <Parallax className="parallax_img" y={[-20, 20]} tagOuter="figure">
            <img src="http://api.aloha-tech.com/wp-content/uploads/2021/07/group-people-holding-hand-assemble-togetherness.jpg" />
        </Parallax>

          
            <div  class="contactme ft-con__inner ">                
                <div className="" >
                    <ul className="footer_menu">
                        <li><a href="#">COMPANY</a></li>
                        <li><a href="#">SERVICE</a></li>
                        <li><a href="#">WORKS</a></li>
                        <li><a href="#">BLOG</a></li>
                        <li><a href="#">CONTACT</a></li>
                    </ul>
                </div>
                <small>©Aloha-tech, Inc.</small>   
            </div>

            <div className="js-pagetop"><a herf="#" className="backtop">TOP</a></div>   
        </footer>
    )
}