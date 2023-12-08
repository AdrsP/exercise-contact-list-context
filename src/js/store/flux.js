const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			//Aqui vamos a guardar todos los estados globales de nuestra app
			contacts: [],
			contact: {}
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			agregarContacto: (name, email, phone, address) => {
				//objeto con la informacion para enviar en el fetch, probablemente la use con el boton save
				let datos = {
					full_name: name,
					email: email,
					agenda_slug: "Andres", // nombre de la agenda se permanece constante es un identificador impuesto por la api que debe definirse por el usuario
					address: address,
					phone: phone
				};
				fetch("https://playground.4geeks.com/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify(datos),
					headers: { "Content-Type": "application/json" }
				})
					.then(response => response.json())
					.then(data => console.log(data))
					.catch(error => console.log(error)); //
			},
			getContacts: () => {
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/Andres")
					.then(response => response.json())
					.then(data => setStore({ contacts: data }));
			},
			deleteContact: id => {
				fetch("https://playground.4geeks.com/apis/fake/contact/" + id, {
					method: "DELETE",
					headers: { "Content-Type": "application/json" }
				})
					.then(response => response.json())
					.then(data => console.log(data))
					.catch(error => console.log(error));
				//getActions().getContacts();
			},
			editarContacto: (name, email, phone, address, id) => {
				//objeto con la informacion para enviar en el fetch, probablemente la use con el boton save
				let datos = {
					full_name: name,
					email: email,
					agenda_slug: "Andres", // nombre de la agenda se permanece constante es un identificador impuesto por la api que debe definirse por el usuario
					address: address,
					phone: phone
				};
				fetch("https://playground.4geeks.com/apis/fake/contact/" + id, {
					method: "PUT",
					body: JSON.stringify(datos),
					headers: { "Content-Type": "application/json" }
				})
					.then(response => response.json())
					.then(data => console.log(data))
					.catch(error => console.log(error)); //
			},
			getContactIndividual: id => {
				console.log(id);
				fetch("https://playground.4geeks.com/apis/fake/contact/39175455115")
					.then(response => response.json())
					//.then(data => setStore({ contact: data }));
					.then(data => console.log(data));
			}
		}
	};
};

// .then(data => setStore({contacts: data})) store.contact datos para el get
// necesito actualizar el contact

export default getState;
