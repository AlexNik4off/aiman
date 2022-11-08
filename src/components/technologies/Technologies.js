import styles from "./Technologies.module.scss"
import aiImg from "../../img/16.png"
import {MdCheckCircleOutline, MdCallMade} from "react-icons/md"

function Technologies() {
    return (
        <>
        <h1 className={styles.technologies__title}>OUR TECHNOLOGIES</h1>
        <div className={styles.technologies__container}>           
            <div className={styles.technologies__nav}>
                <button>RILLCUY</button>
                <button>TRUKAHH</button>
                <button>ASELII</button>
                <button>KOCKGMG</button>
                <button>MDITURU</button>
            </div>
            <div className={styles.technologies__content}>
                <h2>RILLCUY <span className={styles.technologies__ai__recolor}>AI.</span></h2>
                <p className={styles.technologies__desc}>Annotate large volumes of 3D sensor, image, and video data at high throughput. ML-powered pre-labeling and an automated quality assurance system ensure high quality annotations.</p>
                <p className={styles.technologies__info}><span className={styles.technologies__icon}><MdCheckCircleOutline /></span>Manage Your Datasets</p>
                <p className={styles.technologies__info}><span className={styles.technologies__icon}><MdCheckCircleOutline /></span>Automate Document Processing</p>
                <p className={styles.technologies__info}><span className={styles.technologies__icon}><MdCheckCircleOutline /></span>Scale Advanced Annotations</p>
                <button className={styles.technologies__button}>LEARN MORE <span className={styles.technologies__button__icon}><MdCallMade /></span></button>
            </div> 
            <img src={aiImg} alt="img" className={styles.technologies__aiImg}></img>
        </div>
        </>
    )
}

export default Technologies