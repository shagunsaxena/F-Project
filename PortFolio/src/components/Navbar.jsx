import { useState } from "react";
import {Link} from "react-scroll";
import { MdMenu, MdClose } from "react-icons/md";

const Navbar = () => {
    const [menuOpen,setMenuOpen] = useState(false);

    const navItems = [
        "Home",
        "About",
        "Skills",
        "Experience",
        "Projects",
        "Testimonials",
        "Certifications",
        "Contact",
    ];

    return (
        <nav className="navbar">
            <div className="logo">
                Shagun R. Saxena
            </div>

            <ul className= {`nav-links ${menuOpen ? "active" : "" }`}>
                {navItems.map((item) => (
                    <li key={item}>
                        <Link 
                            to={item.toLowerCase()}
                            smooth={true}
                            duration={500}
                            offset={-80}
                            > 
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="nav-actions">
                            
                <button className="menu-btn" onClick={ () => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <MdClose /> : <MdMenu />}
                </button>

            </div>
        </nav>
    );
};

export default Navbar