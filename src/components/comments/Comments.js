import styles from "./Comments.module.scss"
import {MdKeyboardBackspace, MdRemove} from "react-icons/md"

function Comments() {
    return (
        <div className={styles.comments__container}>
            <h1>WHAT THEY SAY</h1>
            <p className={styles.comments__comment}><span className={styles.comments__comment__recolor}>It was easy to get started with AI-MAN</span> because they had the platform and the people with the skillset to perform the annotation tasks we needed.</p>
            <div className={styles.comments__person}>
                <button className={styles.comments__button__left}><MdKeyboardBackspace className={styles.comments__arrow}/></button>
                <p className={styles.comments__order}><span className={styles.comments__name}>Anakin Dripwalker</span><MdRemove className={styles.comments__divider}/>Chief Data Scient, AI Order</p>
                <button className={styles.comments__button__right}><MdKeyboardBackspace className={styles.comments__arrow__rev}/></button>
            </div>
        </div>
    )
}

export default Comments