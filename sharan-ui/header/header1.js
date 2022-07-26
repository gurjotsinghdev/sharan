import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import sharan from "../../public/sharan.png"

export default function Header1() {
    return (
        <>
            <div className="header1-container">
                <div>
                    <Image 
                        src={sharan}
                        alt="Sharan logo"
                        className="logo"
                        width={80}
                        height={80}
                
                    />
                </div>
                
                <div className="primary-menu">
                    <div className="hamburger" onClick={ () => { document.getElementsByClassName('primary-nav-desktop')[0].classList.toggle('active')  } }>
                        <span className="bar line1"></span>
                        <span className="bar line2"></span>
                        <span className="bar line3"></span>


                    </div>
                    <nav className="primary-nav-desktop">
                        <Link href="#"><a className="nav-link">Docs</a></Link>
                        <Link href="#"><a className="nav-link">Examples</a></Link>
                        <Link href="#"><a className="nav-link">Contributors</a></Link>

                    </nav>
                </div>

        
        
        <style jsx>{`
            .header1-container {
                margin: 20px 20px;
                display: grid;
                grid-template-columns: 1fr 1fr;
    
            }

            .logo {
                width: 10px;
            }

            .hamburger{
                width: 35px;
                display: block;
                position: absolute;
                top: 25px;
                right: 30px;
                flex-direction: column;
                justify-content: space-between;
                width: 30px;
                height: 22px;
            }

            .bar {
                display: block;
                height: 5px;
                width: 100%;
                border-radius: 20px;
                background: var(--primary);
                margin: 5px 0px;
            }

            .primary-menu, .primary-nav {
                display: flex;
                justify-content: end;
            }

            .primary-nav-desktop {
                display: none;
            }

           
            .primary-nav-desktop.active {
                display: grid;
                padding: 30px;
                margin-top: 50px;
                gap:25px;
                border: 2px solid black;
                border-radius: 8px;
                background-color: white;
            }

            .nav-link {
                transition: 0.7s ease;
            }


            

            

            /////////////////////////////////
            // CSS Styles for Desktop Screens
            /////////////////////////////////

            @media only screen and (min-width: 768px) {
                .header1-container {
                    margin: 20px 10vw;
                            
                }

                .primary-nav-desktop {
                    display: flex;
                    gap: 25px;
                    align-items: center;
                }

                .hamburger {
                    display: none;
                }

              }
            `}</style>
        </div>
        </>
    )
}
