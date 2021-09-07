import '../css/main.css'
import cross from '../images/exit.svg'
import menu from '../images/menu.svg'

export default function Navbar(){
    return(
        <div class="navbar">
        <div class="container">
            <a class="logo" href="#"><span>Landkit.</span></a>

            <img id="mobile-cta" class="mobile-menu" src={menu} alt="Open Navigation"/>

            <nav>
                
                <img id="mobile-exit" class="mobile-menu-exit" src={cross} alt="Close Navigation"/>
                
                <ul class="primary-nav">
                    <li><a href="#">Landing</a></li>
                    <li><a href="#">Pages</a></li>
                    <li><a href="#">Account</a></li>
                    <li><a href="#">Documentaion</a></li>
                </ul>

                <ul class="secondary-nav">
                    <li class="go-premium-cta"><a href="#">Buy now</a></li>
                </ul>
            </nav>
        </div>
    </div>
    );
}