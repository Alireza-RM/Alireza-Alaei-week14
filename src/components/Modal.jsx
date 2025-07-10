
import styles from "./Modal.module.css"

function Modal() {
    return (
        <div className={styles.modal}>
            <div className={styles.modalBackground}>smjmkksjjk</div>
            <div className={styles.modalCenter}>
                <p>شما در حال حذف یکی از مخاطبین هستید !</p>
                <p>آیا مطمئن هستید ؟</p>
                <div className={styles.buttons}>
                    <span className={`${styles.button} ${styles.delete}`}>حذف</span>
                    <span className={`${styles.button} ${styles.cancel}`}>انصراف</span>
                </div>
            </div>
        </div>
    )
}

export default Modal