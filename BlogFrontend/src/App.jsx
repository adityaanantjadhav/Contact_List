import { useEffect, useRef, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import { getContacts, saveContact, updatePhoto } from "./api/ContactService";

import {
  Routes,
  Route,
  Router,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import ContactList from "./components/ContactList";
import ContactDetail from "./components/ContactDetail";
import { ToastContainer, toast } from "react-toastify";
import { toastError, toastSuccess } from "./api/ToastService";

function App() {
  const [data, setData] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  const modalRef = useRef();

  const fileRef = useRef();
  const [file, setFile] = useState(undefined);
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    title: "",
    status: "",
  });

  const getAllContacts = async (page = 0, size = 8) => {
    try {
      setCurrentPage(page);
      const { data } = await getContacts(page, size);
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
      toastError(error);
    }
  };

  useEffect(() => {
    getAllContacts();
  }, []);

  const toggleModal = (show) =>
    show ? modalRef.current.showModal() : modalRef.current.close();

  const onchange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleNewContact = async (event) => {
    event.preventDefault();
    try {
      const { data } = await saveContact(values);
      const formdata = new FormData();
      formdata.append("file", file, file.name);
      formdata.append("id", data.id);
      const { data: photoUrl } = await updatePhoto(formdata);
      toggleModal(false);
      setFile(undefined);
      fileRef.current.value = null;

      setValues({
        id:"",
        name: "",
        email: "",
        phone: "",
        address: "",
        title: "",
        status: "",
      });
      getAllContacts();
    } catch (error) {
      console.log(error);
      toastError(error);
    }
  };

  const updateContact = async (contact) => {
    try {
      await saveContact(contact);
      toastSuccess("Contact has been updated")
    } catch (error) {
      console.log(error);
      toastError(error);
    }
  };

  const updateImage = async (formdata) => {
    try {
      const { data: photoUrl } = await updatePhoto(formdata);
      toastSuccess("Photo is updated");
    } catch (error) {
      console.log(error);
      toastError(error);
    }
  };
  return (
    <>
      <BrowserRouter>
        <Header toggleModal={toggleModal} nbOfContacts={data.totalElements} />
        <main className="main">
          <div className="container">
            <Routes>
              <Route path="/" element={<Navigate to={"/contacts"} />} />
              <Route
                path="/contacts"
                element={
                  <ContactList
                    data={data}
                    currentPage={currentPage}
                    getAllContacts={getAllContacts}
                  />
                }
              />
              <Route
                path="/contacts/:id"
                element={
                  <ContactDetail
                    updateContact={updateContact}
                    updateImage={updateImage}
                  />
                }
              />
            </Routes>
          </div>
        </main>

        <dialog ref={modalRef} className="modal" id="modal">
          <div className="modal__header">
            <h3>New Contact</h3>
            <i onClick={() => toggleModal(false)} className="bi bi-x-lg"></i>
          </div>
          <div className="divider"></div>
          <div className="modal__body">
            <form onSubmit={handleNewContact}>
              <div className="user-details">
                <div className="input-box">
                  <span className="details">Name</span>
                  <input
                    type="text"
                    value={values.name}
                    onChange={onchange}
                    name="name"
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Email</span>
                  <input
                    type="text"
                    value={values.email}
                    onChange={onchange}
                    name="email"
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Title</span>
                  <input
                    type="text"
                    value={values.title}
                    onChange={onchange}
                    name="title"
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Phone Number</span>
                  <input
                    type="text"
                    value={values.phone}
                    onChange={onchange}
                    name="phone"
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Address</span>
                  <input
                    type="text"
                    value={values.address}
                    onChange={onchange}
                    name="address"
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Account Status</span>
                  <input
                    type="text"
                    value={values.status}
                    onChange={onchange}
                    name="status"
                    required
                  />
                </div>
                <div className="file-input">
                  <span className="details">Profile Photo</span>
                  <input
                    type="file"
                    onChange={(event) => setFile(event.target.files[0])}
                    ref={fileRef}
                    name="photo"
                    required
                  />
                </div>
              </div>
              <div className="form_footer">
                <button
                  onClick={() => toggleModal(false)}
                  type="button"
                  className="btn btn-danger"
                >
                  Cancel
                </button>
                <button type="submit" className="btn">
                  Save
                </button>
              </div>
            </form>
          </div>
        </dialog>
        <ToastContainer/>
      </BrowserRouter>
    </>
  );
}

export default App;
