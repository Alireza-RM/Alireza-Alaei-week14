import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { IoPersonRemove } from "react-icons/io5";
import { PiArrowBendUpLeftBold } from "react-icons/pi";
import { FaPlus } from "react-icons/fa6";

import styles from "./Header.module.css"

function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.search}>
                <label htmlFor="search">جستجو در مخاطبین :</label>
                <input type="text" id="search" />
            </div>
            <div className={styles.icons}>
                <div>
                    <div className={styles.icon}>
                        <IoCheckmarkDoneSharp />
                    </div>
                    {/* <span className={styles.icon}>
                        <IoPersonRemove />
                    </span>
                    <span className={styles.icon}>
                        <PiArrowBendUpLeftBold />
                    </span> */}
                </div>
                <div className={styles.icon}>
                    <FaPlus />
                </div> 
            </div>
        </div>
    )
}

export default Header