import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const AddContact = () => {
	const { actions, store } = useContext(Context);

	// hooks para los inputs intentar hacer esto despues con un solo hook que tenga un objeto para ahorrar codigo
	const [inputName, setInputName] = useState("");
	const [inputEmail, setInputEmail] = useState("");
	const [inputPhone, setInputPhone] = useState("");
	const [inputAddress, setInputAddres] = useState("");
	// fucion para usar en el boton save

	function saveContact() {
		actions.agregarContacto(inputName, inputEmail, inputPhone, inputAddress);
		setInputName("");
		setInputEmail("");
		setInputPhone("");
		setInputAddres("");
	}

	// realizar un map con el store store.contact.map(...) esto en la vista contatcs
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							value={inputName}
							onChange={e => setInputName(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							value={inputEmail}
							onChange={e => setInputEmail(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							value={inputPhone}
							onChange={e => setInputPhone(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							value={inputAddress}
							onChange={e => setInputAddres(e.target.value)}
						/>
					</div>
					<button type="button" className="btn btn-primary form-control" onClick={saveContact}>
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
