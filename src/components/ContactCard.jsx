import { Link } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { deleteContact } from "../pages/services/APIServices"
import avatarImg from "../assets/img/img1.jpeg"

export const ContactCard = ({ contact }) => {

    const { store, dispatch } = useGlobalReducer()

    const handleDelete = () => {
        
        if (window.confirm(`¿Estás seguro de eliminar a ${contact.name}?`)) {
            deleteContact(dispatch, contact.id)
        }
    }

    return (
        <li className="row contact">

            <div className="col-md-3 photo">
                <img src={avatarImg} className="rounded-circle" alt={contact.name} srcSet="" style={{ width: "150px", height: "150px", objectFit: "cover" }} />
            </div>
            <div className="col-md-7 col-10 my-auto">
                <div className="name fw-bold fs-3 text">{contact.name.toUpperCase()}</div>
                <div className="email"><i className="fa-solid fal-location-dot me-2"></i>{contact.email}</div>
                <div className="phone"><i className="fa-solid fal-location-dot me-2"></i>{contact.phone}</div>
                <div className="address"><i className="fa-solid fal-location-dot me-2"></i>{contact.address}</div>

            </div>
            <div className="col-md-2 col-2">
                <Link to={`/edit/${contact.id}`}>
                    <button type="button" className="btn p-0 border-0 bg-transparent me-2"> <i className="fa-solid fa-pen-to-square"></i></button>
            <button type="button" className="btn p-0 border-0 bg-transparent" onClick={handleDelete}><i className="fa-solid fa-trash"></i></button>
                </Link>
            </div>
        </li>

    )
}




