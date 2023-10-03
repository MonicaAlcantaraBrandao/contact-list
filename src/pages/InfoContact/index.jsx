import { Link } from "react-router-dom"

function InfoContact(){
    return(
        <div>
        <h1>Informações do contato</h1>

        <form >
            <label>Nome:</label>
       
            <label>Endereço:</label>
     
            <label>Telefone:</label>
          

            <button type="submit">Salvar</button>
            <Link to={"/"}>Voltar</Link>
        </form>

        <Link to={"/edit-contact"}>Editar</Link>
        </div>
        
    )
}

export default InfoContact

//<button onClick={()=> handleDeleteContact(contact.id)}>Apagar</button>
//
//const handleDeleteContact = async (index) => {
//     await api.delete(`/contacts/${index}`)
// }

//botão editar contato