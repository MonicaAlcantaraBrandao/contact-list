import api from "../../axios/axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Contacts(){
    const [contacts, setContacts] = useState([]);
    const [searchContact, setSearchContact] = useState("");
    const [contact, setContact] = useState({
        name:"",
        address:"",
        number:"",
    })

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


    const handleSearch = async (e) => {
        e.preventDefault()

       let condition = '?name=';

       if(setSearchContact != "") {
        condition + searchContact
        try {
            const response = await api.get(`/contacts/${condition + searchContact}`);
            if (response.status === 200) {
              setContacts(response.data);
            }
          } catch (error) {
            console.log('err')
          }
       }
    }
    
    return(
        <div>
            <h1>Contatos</h1>
            
        <form>
            <input onChange={(e)=>{setSearchContact(e.target.value)}} type="text" placeholder="Pesquisar pelo nome..." />
            <button onClick={handleSearch}>Pesquisar</button>
            
            <table>
                <tbody>
                {contacts.map(contact=>{return(
                <tr key={contact.id}>
                    <td>{contact.name} <Link to={"/info-contact"}>Info</Link> </td>
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