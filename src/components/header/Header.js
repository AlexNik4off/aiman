import styles from "./Header.module.scss"
import {FaArrowRight} from "react-icons/fa"


function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.header__logo}>
                <p><span className={styles.logo__recolor}>AI.</span>MAN</p>
            </div>
            <div className={styles.header__menu}>
                <ul>
                    <li>PRODUCTS</li>
                    <li>SOLUTIONS</li>
                    <li>CUSTOMER</li>
                    <li>PRICING</li>
                    <li>RESOURCES</li>
                </ul>
            </div>
            <div className={styles.register}>
                <p>REGISTER NOW <span><FaArrowRight className={styles.arrow}/></span></p>
            </div>
        </div>
    )
}

export default Header;