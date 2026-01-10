export const getContacts = async (dispatch) => {
    const response = await fetch("https://playground.4geeks.com/contact/agendas/JuanAbreu/contacts")
    console.log(response);
    if (!response.ok) {
        createAgenda()
        return
    }

    const data = await response.json()
    console.log(data);
    dispatch({ type: "set_contacts", payload: data.contacts })
}

export const createAgenda = async () => {
    const response = await fetch("https://playground.4geeks.com/contact/agendas/JuanAbreu", {
        method: "POST"
    })
    return response.ok
}

export const addContact = async(dispatch, contact) => {
    const response = await fetch("https://playground.4geeks.com/contact/agendas/JuanAbreu/contacts",{
        method:"POST",
        body: JSON.stringify(contact),
        headers: {
            "Content-Type": "application/json" 
        }
    })
    if (!response.ok) {
        alert("Error creando el contacto")
        return
    }
    
    const data = await response.json() 
    dispatch({type: "add_contacts", payload: data}) 
}

export const editContact = async (contact) => {
    const response = await fetch(`https://playground.4geeks.com/contact/agendas/JuanAbreu/contacts/${contact.id}`,{
        method:"PUT",
        body: JSON.stringify(contact),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const data = await response.json()
    console.log(data);
}