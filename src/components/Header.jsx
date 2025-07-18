import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { IoPersonRemove } from "react-icons/io5";
import { PiArrowBendUpLeftBold } from "react-icons/pi";
import { FaPlus } from "react-icons/fa6";

import styles from "./Header.module.css"

function Header({ search, setSearch, contacts, setIsAddContact, isDeleteGroup, setIsDeleteGroup, deleteContactHandler, setDeletesId }) {



    return (
        <div className={styles.container}>
            <div className={styles.search}>
                <label htmlFor="search">جستجو در مخاطبین :</label>
                <input type="text" id="search" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div className={styles.icons}>
                {!isDeleteGroup ?

                    <div className={styles.icon} style={{ display: `${!contacts.length ? "none" : ""}`}} onClick={() => setIsDeleteGroup(prev => !prev)}>
                        <IoCheckmarkDoneSharp />
                    </div>
                    :
                    <>
                        <span className={styles.icon}
                            onClick={() => {
                                deleteContactHandler()
                                setIsDeleteGroup(prev => !prev)
                            }
                            }>
                            <IoPersonRemove />
                        </span>
                        <span className={styles.icon}
                            onClick={() => setIsDeleteGroup(prev => {
                                !prev
                                setDeletesId([])
                            })}>
                            <PiArrowBendUpLeftBold />
                        </span>
                    </>
                }


                <div className={styles.icon} onClick={() => setIsAddContact(prev => !prev)} >
                    <FaPlus />
                </div>
            </div>
        </div >
    )
}

export default Header