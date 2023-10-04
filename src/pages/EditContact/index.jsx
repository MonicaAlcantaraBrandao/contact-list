import {  useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import api from "../../axios/axios";

function EditContact(){
    const [contact, setContact] = useState({
        id: 0,
        name:"",
        address:"",
        number:"",
    });

    const params = useParams("/contacts/:id")
    const {id} = params

    const getContact = async() => {
        try {
            const response = await api.get(`/contacts/${id}`)
            setContact(response.data)

        } catch (error) {
            alert("falha ao encontrar contato.")
        }
    } 

    useEffect(() => {
        getContact()
    },[])

    const handleEdit = async ()=> {
        await api.put(`/contacts/${id}`, {
        id:0,
        name:contact.name,
        address:contact.address,
        number:contact.number,
        })
    }

    return(
        <div>
            <h1>Editando contato</h1>

            <form action="">
                <label>Nome:</label>
                <input type="text" value={contact.name} onChange={(e)=>setContact({...contact, name: e.target.value})}/>

                <label>Endereço:</label>
                <input type="text" value={contact.address} onChange={(e)=>setContact({...contact, address: e.target.value})}/>

                <label>Telefone:</label>
                <input type="text" value={contact.number} onChange={(e)=>setContact({...contact, number: e.target.value})}/>

                <button onClick={handleEdit}>Salvar</button>
                <Link to={"/"}>Voltar</Link>

            </form>
        </div>
    )
}

export default EditContact


// vc precisa pegar seu server.json e ter ele aqui pra vc pesquisar nele

// fazer uma busca nele onde o id que ta chegando seja igual o id do seu json
// https://pt.stackoverflow.com/questions/238056/localizar-o-id-dentro-do-array-em-json

// pesquise sobre userParams https://backefront.com.br/como-usar-useparams-react/