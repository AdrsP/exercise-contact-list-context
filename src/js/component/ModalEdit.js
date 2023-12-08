import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";

export const ModalEdit = props => {
	const [state, setState] = useState({
		//initialize state here
	});

	const [inputName, setInputName] = useState("");
	const [inputEmail, setInputEmail] = useState("");
	const [inputPhone, setInputPhone] = useState("");
	const [inputAddress, setInputAddres] = useState("");

	const { actions, store } = useContext(Context);

	useEffect(() => {
		actions.getContactIndividual(props.id);
	}, []);

	console.log(store.contact);

	return (
		<div className="modal" tabIndex="-1" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Are you sure?</h5>
						{props.onClose ? (
							<button
								onClick={() => props.onClose()}
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						) : (
							""
						)}
					</div>
					<div className="modal-body">
						{/* <p>Warning: unknown consequences after this point... Kidding!</p> */}
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
							{/* <button type="button" className="btn btn-primary form-control" onClick={saveContact}>
								save
							</button>
							<Link className="mt-3 w-100 text-center" to="/">
								or get back to contacts
							</Link> */}
						</form>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-primary">
							Oh no!
						</button>
						<button
							type="button"
							className="btn btn-secondary"
							onClick={() =>
								actions.editarContacto(inputName, inputEmail, inputPhone, inputAddress, props.id)
							}
							data-dismiss="modal">
							Do it!
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
/**
 * Define the data-types for
 * your component's properties
 **/
ModalEdit.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	id: PropTypes.string
};

/**
 * Define the default values for
 * your component's properties
 **/
ModalEdit.defaultProps = {
	show: false,
	onClose: null
};
