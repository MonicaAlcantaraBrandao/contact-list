import { Link } from "react-router-dom"

function InfoContact(){
    return(
        <div>
        <h1>teste</h1>
        <Link to={"/edit-contact"}>teste</Link>
        </div>
        
    )
}

export default InfoContact

//<button onClick={()=> handleDeleteContact(contact.id)}>Apagar</button>
//
//const handleDeleteContact = async (index) => {
//     await api.delete(`/contacts/${index}`)
// }