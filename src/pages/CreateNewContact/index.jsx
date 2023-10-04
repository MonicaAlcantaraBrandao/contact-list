import { Link } from "react-router-dom";
import api from "../../axios/axios"

import { useState } from "react"

function CreateNewContact(){
    const [name, setName] = useState();
    const [number, setNumber] = useState();
    const [address, setAddress] = useState();

    async function createContact(){
        await api.post("/contacts", {
        id:0,
        name:name,
        address:address,
        number:number,
        })
    }
    return(
    <div>
        <form onSubmit={(e) => createContact(e)}>
            <label>Nome:</label>
            {/*e.target.value = um evento que acessa o elemento e seu valor */}
            <input required type="text" onChange={(e) => setName(e.target.value)}/>

            <label>Endereço:</label>
            <input required type="text" onChange={(e) => setAddress(e.target.value)}/>

            <label>Telefone:</label>
            <input required type="text" onChange={(e) => setNumber(e.target.value)}/>

            <button type="submit">Salvar</button>
            <Link to={"/"}>Voltar</Link>
        </form>
    </div>
)
}

export default CreateNewContact