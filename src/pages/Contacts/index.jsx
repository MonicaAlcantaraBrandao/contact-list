import api from "../../axios/axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Contacts(){
    const [contacts, setContacts] = useState([]);

    const getContacts = async() => {
        try {
            //biblioteca axios para utilizar a api
            // const response = await axios.get('http://localhost:3000/contacts')
            const response = await api.get('/contacts')

            // console.log(response.data) preciso do data para acessar os dados da api:
            const data = response.data
            
            //editar o contacts com informações da api
            setContacts(data)

        } catch (error) {
            alert("falha ao encontrar contatos.")
        }
    } 

    useEffect(() => {
        getContacts(); 
    }, [])

    return(
        <div>
            <h1>Contatos</h1>
        <form>
            <input type="text" placeholder="Pesquisar pelo nome..." />
            <button>Pesquisar</button>
            
            <table>
                <tbody>
                {contacts.map(contact=>{return(
                <tr key={contact.id}>
                    <td>{contact.name} <Link to={"/edit-contact"}>Editar</Link> <button>Apagar</button></td>
                </tr>
                    )
                })}
                </tbody>
            </table>
         
        </form>
        <Link to="/create-new-contact" className="btn ">Adicionar novo contato</Link>
        </div>

    )
}

export default Contacts