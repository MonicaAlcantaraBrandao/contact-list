import {  useState } from "react"
import { Link, useParams } from "react-router-dom"
import api from "../../axios/axios";

function EditContact(){
    const [name, setName] = useState()
    const [number, setNumber] = useState();
    const [address, setAddress] = useState();
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

    getContact()

    const handleEdit = async (e)=> {
        e.preventDefault()
        
        await api.put(`/contacts/${id}`, {
        id:0,
        name:name,
        address:address,
        number:number,
        })
    }

    return(
        <div>
            <h1>Editando contato</h1>

            <form action="">
                <label>Nome:</label>
                <input type="text" value={contact.name} onChange={(e)=>setName(e.target.value)}/>

                <label>Endereço:</label>
                <input type="text" value={contact.address} onChange={(e)=>setAddress(e.target.value)}/>

                <label>Telefone:</label>
                <input type="text" value={contact.number} onChange={(e)=>setNumber(e.target.value)}/>

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