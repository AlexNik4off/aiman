import styles from "./Development.module.scss"
import annotate from "../../img/9.png"
import manage from "../../img/manage.png"
import {MdKeyboardBackspace} from "react-icons/md"

function Development() {
    return (
        <>
        <h1 className={styles.development__title}>THE DEVELOPMENT OF AI</h1>
        <div className={styles.development__container}>
            <div className={styles.development__content}>
                <img src={annotate} alt="img"></img>
                <div className={styles.development__content__text}>
                <p>Annotate</p>
                <p>Annotate large volumes of 3D sensor, image, and video data.</p>
                </div>
            </div>
            <MdKeyboardBackspace />
            <div>
                <img src={manage} alt="img"></img>
                <p>Manage</p>
                <p>Retrieve human insights for search relevance, ecommerce.</p>
            </div>
        </div>
        </>
    )
}

export default Development