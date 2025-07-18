import { useEffect, useState } from "react";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import AddFormContact from "./components/AddFormContact";
import Modal from "./components/Modal";
import toastComponenet from "./constants/toastComponent";
import { Toaster } from "react-hot-toast";
import { getLocalStorageFn, setLocalStorageFn } from "./utility/localStorage";

function App() {

  const [search, setSearch] = useState("")
  const [filterSearch, setFilterSearch] = useState([])
  const [contacts, setContacts] = useState(getLocalStorageFn() || [])

  const [isAddContact, setIsAddContact] = useState(false)
  const [isEditContact, setIsEditContact] = useState(false)
  const [isDeleteGroup, setIsDeleteGroup] = useState(false)
  const [isModalDelete, setIsModalDelete] = useState(false)
  const [deletesId, setDeletesId] = useState([])


  const [formContact, setFormContact] = useState({
    name: "",
    email: "",
    job: "",
    phone: "",
    id: Date.now()
  })


  useEffect(() => {
    // if(!contacts.length()) return
    const newContacts = contacts.filter(c => c.name.includes(search.trim()))
    setFilterSearch(newContacts)

  }, [search, contacts])




  const formContactHandler = (e) => {
    const name = e.target.name
    const value = e.target.value
    setFormContact(prev => ({ ...prev, [name]: value }))
  }




  const addContactHandler = (e, newError) => {
    e.preventDefault()
    if (Object.keys(newError).length) {
      toastComponenet("error", "red", "فرم را با دقت پر کنید")
      return
    }
    console.log(contacts)
    const newContact = contacts.filter(c => c.id !== formContact.id)
    console.log(newContact)


    setContacts([...newContact, formContact])
    setLocalStorageFn([...newContact, formContact])
    // setContacts(prev => [...prev, formContact])

    setFormContact({
      name: "",
      email: "",
      job: "",
      phone: "",
      id: Date.now()
    })

    closeAddFormHandler()

    isEditContact ?
      toastComponenet("success", "blue", "مخاطب ویرایش شد !!")
      :
      toastComponenet("success", "green", "مخاطب به لیست مخاطبین اضافه شد")

  }


  const deleteContactHandler = () => {
    if (!deletesId.length) {
      return
    }
    const newContact = contacts.filter(c => !deletesId.includes(c.id))

    setContacts(newContact)
    setLocalStorageFn(newContact)
    setIsModalDelete(false)
    setDeletesId([])

    toastComponenet("success", "orange", `(${deletesId.length}) مخاطب حذف شد   `)
  }




  const closeAddFormHandler = () => {
    if (isAddContact) {
      setIsAddContact(false)
    }
    setIsModalDelete(false)
    setIsEditContact(false)
    setDeletesId([])

  }


  return (
    <>
      <Header search={search} setSearch={setSearch} contacts={contacts} setIsAddContact={setIsAddContact} isDeleteGroup={isDeleteGroup} setIsDeleteGroup={setIsDeleteGroup}
        deleteContactHandler={deleteContactHandler} setDeletesId={setDeletesId} />

      <Contacts filterSearch={filterSearch} contacts={contacts} isDeleteGroup={isDeleteGroup} setIsModalDelete={setIsModalDelete} setDeletesId={setDeletesId}
        setIsEditContact={setIsEditContact} setFormContact={setFormContact} />


      {
        isAddContact && <Modal closeAddFormHandler={closeAddFormHandler}>
          <AddFormContact formContact={formContact} formContactHandler={formContactHandler} addContactHandler={addContactHandler} />
        </Modal>
      }


      {
        isEditContact && <Modal closeAddFormHandler={closeAddFormHandler}>
          <AddFormContact formContact={formContact} formContactHandler={formContactHandler} addContactHandler={addContactHandler} />
        </Modal>
      }



      {isModalDelete && <Modal closeAddFormHandler={closeAddFormHandler}>
        <div style={{
          width: "100%", height: "100%", display: "flex", flexDirection: "column"
          , gap: "20px", alignItems: "center"
        }}>

          <p className="" style={{ width: "100%", textAlign: "center" }} >شما در حال حذف یکی از مخاطبین هستید !</p>
          <p className="" style={{ width: "100%", textAlign: "center" }}>آیا مطمئن هستید ؟</p>
          <div className="buttons" style={{ marginTop: "60px" }}>
            <span className="button delete" onClick={() => deleteContactHandler()}>حذف</span>
            <span className="button cancel" onClick={() => closeAddFormHandler()}>انصراف</span>
          </div>
        </div>
      </Modal>}

      <Toaster />
    </>
  );
}

export default App;


