const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			//Aqui vamos a guarda todos los estados globales de nuestra app
			contact: [],
				},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			agregarContacto: (name, email, phone, address) =>{
			//objeto con la informacion para enviar en el fetch
			let datos = {
				full_name: name,
                email: email,
                agenda_slug: "Andres", // nombre de la agenda 
                address: address,
                phone: phone
			}
			fetch("https://playground.4geeks.com/apis/fake/contact/",{
				method: "POST",
				body: JSON.stringify(datos),
				headers: {"Content-Type":"application/json"}
			})
			.then(response => response.json())
			.then(data => console.log(data))
			.catch(error => console.log(error))  //
			}, 
		}
	};
};

// .then(data => setStore({contact: data})) store.contact

export default getState;
