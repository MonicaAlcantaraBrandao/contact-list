import { Link } from "react-router-dom"

function Contacts(){
    return(
        <div>
        <form>
            <input type="text" placeholder="Pesquisar pelo nome..." />
            <button>Pesquisar</button>
        
        <table>
            <tbody>
            <tr>
                <td>Contatos</td>
            </tr>
            <tr>
                <td>contato1</td>
            </tr>
            </tbody>
        </table>
        </form>
        <Link to="/add-new-contact" className="btn">Adicionar novo contato</Link>
        </div>

    )
}

export default Contacts