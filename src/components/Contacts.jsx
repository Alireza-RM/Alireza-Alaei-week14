

import styles from "./Contacts.module.css"
import Contact from "./Contact";

function Contacts({ filterSearch, contacts, isDeleteGroup, setIsModalDelete, setDeletesId, setIsEditContact, setFormContact }) {
    return (
        <div className={styles.container} >
            <div>

                {
                    filterSearch.length == 0 ?
                        <p className={styles.notContacts}>❌ هیچ مخاطبی وجود ندارد ❌</p> :
                        <>
                            {
                                filterSearch.map(data =>

                                    <Contact key={data.id} styles={styles} isDeleteGroup={isDeleteGroup}
                                        setIsModalDelete={setIsModalDelete} setDeletesId={setDeletesId}
                                        setIsEditContact={setIsEditContact} setFormContact={setFormContact} data={data}
                                    />
                                )
                            }

                            {/* <Contact styles={styles} isDeleteGroup={isDeleteGroup} /> */}
                            {/* <Contact styles={styles} isDeleteGroup={isDeleteGroup} /> */}


                        </>
                }
            </div>
        </div>
    )
}

export default Contacts