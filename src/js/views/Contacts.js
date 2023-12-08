import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";
import { Context } from "../store/appContext.js";
import propTypes from "prop-types";
import { ModalEdit } from "../component/ModalEdit.js";

export const Contacts = () => {
	const [state, setState] = useState({
		showModal: false,
		id: undefined
	});
	const [edit, setEdit] = useState({
		showModal: false,
		id: undefined
	});

	const { store, actions } = useContext(Context);

	useEffect(() => {
		// Your code here este use Effect es para hacer el fetch de contactos cada vez que ese entre en la vista Contacts
		actions.getContacts();
	}, []);

	// realizar un map con el store store.contact.map(...)

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.contacts.map((contact, index) => (
							<ContactCard
								key={contact.id}
								address={contact.address}
								email={contact.email}
								fullName={contact.full_name}
								phoneNum={contact.phone}
								onDelete={() => setState({ showModal: true, id: contact.id })}
								edit={() => setEdit({ showModal: true, id: contact.id })}
							/>
						))}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} id={state.id} onClose={() => setState({ showModal: false })} />
			<ModalEdit show={edit.showModal} id={edit.id} onClose={() => setEdit({ showModal: false })} />
		</div>
	);
};
