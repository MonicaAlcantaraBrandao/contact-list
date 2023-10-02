import { Link } from "react-router-dom"
import api from "../../axios/axios"
import { useEffect } from "react"

function EditContact(){
    const getContact = async(index) => {
        try {
            const response = await api.get(`/contacts/${index}`)
            const data = response.data

        } catch (error) {
            alert("falha ao encontrar contatos.")
        }
    } 

    useEffect(()=>{
        getContact()
    })

    return(
        <div>
            <h1>Editando contato</h1>

            <form action="">
                <label>Nome:</label>
                <input type="text" name="" id="" value={'teste'}/>

                <label>Endereço:</label>
                <input type="text" name="" id="" />

                <label>Telefone:</label>
                <input type="text" name="" id="" />

                <Link to={"/"}>Voltar</Link> <button>Editar</button>

            </form>
        </div>
    )
}

export default EditContact