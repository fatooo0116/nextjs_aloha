
import Link from 'next/link'

export default function Menu() {
    return (
            <div className="global_menu">
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