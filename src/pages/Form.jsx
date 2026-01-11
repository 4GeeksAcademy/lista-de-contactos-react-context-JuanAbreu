import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { editContact, addContact } from "./services/APIServices";

export const Form = () => {
    
    const navigate = useNavigate()

    const { store, dispatch } = useGlobalReducer()

    const { id } = useParams()

    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    })

    const [isEditing, setIsEditing] = useState(false)

    const [showAlert, setShowAlert] = useState(false);

    const handlerInputsChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        })
    }

    const handlerSubmit = (e) => {
        e.preventDefault();
        if (!contact.name || !contact.email || !contact.phone || !contact.address) {
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 2000);
            return;
        }
        //peticion al api  para agregar o editar el contacto
        if (isEditing) {
            editContact(dispatch, contact)
            navigate("/")
        } else {
            addContact(dispatch, contact)
            navigate("/")
        }


    }

    const contactToEdit = () => {
        const contactFinded = store.contacts.find(contact => {

            return contact.id === Number(id)

        })
        console.log(contact.id, id);
        setContact(contactFinded)
    }

    useEffect(() => {
        if (id) {
            console.log("estoy editando");
            setIsEditing(true)
            contactToEdit()
        } else {
            console.log("estoy creando un contacto");
            setIsEditing(false)

        }

    }, [])
    return (
        <div className="container">
            <form onSubmit={handlerSubmit}>
                {showAlert && (
                    <div className="alert alert-warning" role="alert">
                        Todos Los Campos Son Necesarios
                    </div>
                )}
                <input type="text" className="form-control mb-3" placeholder="Name" name="name" value={contact.name} onChange={handlerInputsChange} />
                <input type="text" className="form-control mb-3" placeholder="Email" name="email" value={contact.email} onChange={handlerInputsChange} />
                <input type="text" className="form-control mb-3" placeholder="Phone" name="phone" value={contact.phone} onChange={handlerInputsChange} />
                <input type="text" className="form-control mb-3" placeholder="address" name="address" value={contact.address} onChange={handlerInputsChange} />

                <button type="submit" className="btn btn-primary">
                    {isEditing ? "Actualizar Contacto" : "Crear Contacto"}
                </button> 

            </form>

        </div>
    )
}