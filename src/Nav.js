import React, { useEffect, useState } from 'react'
import './nav.css'
function Nav() {
    const [show, handleshow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleshow(true)
            } else {
                handleshow(false)
            }
        });
        return () => {
            window.removeEventListener("scroll", null);
        }
    }, []);
    return (

        <div className={`nav ${show && "nav_black"}`}>
            <h1>Moviezz</h1>
        </div>
    )
}

export default Nav
