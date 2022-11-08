import styles from "./Main.module.scss"
import robotHand from "../../img/robothand1.png"
import robotHand2 from "../../img/robothand2.png"
import lightBall from "../../img/4.png"

function Main() {
    return (
        <div className={styles.main__container}>
                <h1>FASTER DATA WITH <span className={styles.main__ai__recolor}>AI.</span></h1>
            <div className={styles.main__content}>
                <img src={robotHand} alt="img" className={styles.main__background}></img>
                <img src={robotHand2} alt="img" className={styles.main__background__light}></img>
                <img src={lightBall} alt="img" className={styles.main__background__lightBall}></img>
                <div className={styles.main__stats}>
                <div className={styles.main__partners}>
                    <p className={styles.main__partners__quantity}>240+</p>
                    <p className={styles.main__partners__title}>PARTNERS</p>
                </div>
                <div className={styles.main__percent}>
                    <p className={styles.main__percent__quantity}>92%</p>
                    <p className={styles.main__percent__title}>FASTER TECHNOLOGY</p>
                </div>
                </div>
                <div className={styles.main__content__buttons}>
                    <p>Better data leads to more perfomance models.Performant models lead to faster deployment.</p>
                    <button className={styles.main__button__getStarted}>GET STARTED</button>
                    <button className={styles.main__button__talkToSales}>TALK TO SALES</button>
                </div>
            </div>
        </div>
    )
}

export default Main;