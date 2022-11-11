import styles from "./Support.module.scss"
import {MdKeyboardBackspace} from "react-icons/md"
import retail from "../../img/430.png"
import ai from "../../img/431.png"
import personalize from "../../img/432.png"
import reality from "../../img/433.png"

function Support() {
    return (
        <>
        <div className={styles.support__nav}>
                <h1>THINGS WE SUPPORT</h1>
                <div className={styles.support__buttons}>
                <button className={styles.support__button__black}><MdKeyboardBackspace className={styles.support__arrow__white}/></button>
                <button className={styles.support__button__white}><MdKeyboardBackspace className={styles.support__arrow__black}/></button>
                </div>
            </div>
        <div className={styles.support__container}>
            <div className={styles.support__content}>
                <div className={styles.support__content__item}>
                    <img src={retail} alt="img"></img>
                    <p className={styles.support__desc}>RETAIL AND THE E - COMMERCE</p>
                </div>
                <div className={styles.support__content__item}>
                    <img src={ai} alt="img"></img>
                    <p className={styles.support__desc}>AI FOR THE CONVERSATION</p>
                </div>
                <div className={styles.support__content__item}>
                    <img src={personalize} alt="img"></img>
                    <p className={styles.support__desc}>PERSONALIZE AND RELEVANCE</p>
                </div>
                <div className={styles.support__content__item}>
                    <img src={reality} alt="img"></img>
                    <p className={styles.support__desc}>AUGMENTED AND VIRTUAL REALITY</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Support