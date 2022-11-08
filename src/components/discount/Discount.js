import styles from "./Discount.module.scss"
import star from "../../img/star.png"

function Discount() {
    return (
        <div className={styles.discount__container}>
            <img src={star} alt="img" className={styles.discount__star}></img>
            <p>GET UP TO 20% DISCOUNT IF YOU REGISTER NOW</p>
            <img src={star} alt="img" className={styles.discount__star}></img>
        </div>
    )
}

export default Discount