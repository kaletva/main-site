import styles from '../Footer/Footer.module.scss'

function Footer({mouseEnter, mouseLeave}) {
    return ( 
        <footer className={styles.footer}>
            <div className={styles.footer__col}>
                <li>
                    <a onMouseEnter={()=> mouseEnter()} onMouseLeave={()=> mouseLeave()} href='https://github.com/kaletva'>Git</a>
                </li>
                <li>
                    <a onMouseEnter={()=> mouseEnter()} onMouseLeave={()=> mouseLeave()} href='https://t.me/kaletva'>Telegram</a>
                </li>
                <li>
                    <a onMouseEnter={()=> mouseEnter()} onMouseLeave={()=> mouseLeave()} href='https://www.linkedin.com/in/kaletva/'>Linkedn</a>
                </li>
                
                
            </div>
        </footer>
     );
}

export default Footer;