import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { ContactCard } from "../components/ContactCard";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { getContacts, addContact, editContact, createAgenda } from './services/APIServices.js'

import { useEffect, useState } from "react";

export const Home = () => {


	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {
		getContacts(dispatch)
	}, [])

	return (
		<div className="container">
			<div className="contacts">
				{
					store.contacts.map(contact => (
						<ContactCard contact={contact} key={contact.id} />
					))
				}

			</div>


		</div>
	);
}; 