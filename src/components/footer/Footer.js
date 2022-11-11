import styles from "./Footer.module.scss"

function Footer() {
    return (
        <>
        <div className={styles.footer__container}>
            <div className={styles.footer__logo}>
                <p><span className={styles.logo__recolor}>AI.</span>MAN</p>
            </div>
            <div className={styles.footer__menu}>
                <button>PRODUCTS</button>
                <button>SOLUTIONS</button>
                <button>CUSTOMER</button>
                <button>PRICING</button>
                <button>RESOURCES</button>
            </div>
        </div>
        <div className={styles.footer__content}>
        <p className={styles.footer__info}>Better data leads to more performance models. Performant models lead to faster deployment.</p>
        <p className={styles.footer__add__info}>© 2022 AI-MAN. All RIGHT RESERVED</p>
        <p className={styles.footer__add__info}>TERMS AND CONDITIONS</p>
        <p className={styles.footer__add__info}>PRIVACY POLICY</p>
        </div>
        </>
    )
}

export default Footer