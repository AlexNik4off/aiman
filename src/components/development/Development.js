import styles from "./Development.module.scss"
import annotate from "../../img/9.png"
import manage from "../../img/manage.png"
import evaluate from "../../img/evaluate.png"
import automate from "../../img/automate.png"
import collect from "../../img/collect.png"
import generate from "../../img/generate.png"
import {MdKeyboardBackspace} from "react-icons/md"

function Development() {
    return (
        <>
        <h1 className={styles.development__title}>THE DEVELOPMENT OF AI</h1>
        <div className={styles.development__container}>
            <div className={styles.development__content}>
                <img src={annotate} alt="img"></img>
                <div className={styles.development__content__text}>
                <p className={styles.development__content__title}>Annotate</p>
                <p className={styles.development__content__desc}>Annotate large volumes of 3D sensor, image, and video data.</p>
                </div>
            </div>
            <MdKeyboardBackspace className={styles.development__arrow}/>
            <div className={styles.development__content}>
                <img src={manage} alt="img"></img>
                <div className={styles.development__content__text}>
                <p className={styles.development__content__title}>Manage</p>
                <p className={styles.development__content__desc}>Retrieve human insights for search relevance, ecommerce.</p>
                </div>
            </div>
            <div className={styles.development__content}>
                <img src={evaluate} alt="img"></img>
                <div className={styles.development__content__text}>
                <p className={styles.development__content__title}>Evaluate</p>
                <p className={styles.development__content__desc}>Quickly choose what data to label with active learning.</p>
                </div>
            </div>
            <MdKeyboardBackspace className={styles.development__arrow__rev}/>
            <div className={styles.development__content}>
                <img src={automate} alt="img"></img>
                <div className={styles.development__content__text}>
                <p className={styles.development__content__title}>Automate</p>
                <p className={styles.development__content__desc}>Achieve robust document understanding and extraction.</p>
                </div>
            </div>
            <div className={styles.development__content}>
                <img src={collect} alt="img"></img>
                <div className={styles.development__content__text}>
                <p className={styles.development__content__title}>Collect</p>
                <p className={styles.development__content__desc}>Collect and generate, image representative device, video.</p>
                </div>
            </div>
            <MdKeyboardBackspace className={styles.development__arrow}/>
            <div className={styles.development__content}>
                <img src={generate} alt="img"></img>
                <div className={styles.development__content__text}>
                <p className={styles.development__content__title}>Generate</p>
                <p className={styles.development__content__desc}>Augment ground-truth training data with infinite varieties.</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Development