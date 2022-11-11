import styles from "./Partners.module.scss"
import flexport from "../../img/flexport.png"
import paypal from "../../img/paypal.png"
import nvidia from "../../img/nvidia.png"
import instacart from "../../img/instacart.png"
import brex from "../../img/brex.png"
import globaldata from "../../img/globaldata.png"
import spacex from "../../img/spacex.png"

function Partners() {
    return (
        <div className={styles.partners__container}>
            <h1>SUPPORTED BY</h1>
            <div className={styles.partners__buttons}>
                <button className={styles.partners__button}><img src={flexport} alt="img" className={styles.partners__img}></img></button>
                <button className={styles.partners__button}><img src={paypal} alt="img" className={styles.partners__img}></img></button>
                <button className={styles.partners__button}><img src={nvidia} alt="img" className={styles.partners__img}></img></button>
                <button className={styles.partners__button}><img src={instacart} alt="img" className={styles.partners__img}></img></button>
                <button className={styles.partners__button}><img src={brex} alt="img" className={styles.partners__img}></img></button>
                <button className={styles.partners__button}><img src={globaldata} alt="img" className={styles.partners__img}></img></button>
                <button className={styles.partners__button}><img src={spacex} alt="img" className={styles.partners__img}></img></button>
            </div>
        </div>
    )
}

export default Partners