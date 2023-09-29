function Contacts(){
    return(
        <div>
        <form>
            <input type="text" placeholder="Pesquisar pelo nome..." />
            <button>Pesquisar</button>
        </form>
        <table>
            <td> Contatos
            <tr>contato 1</tr>
            <tr>contato 2</tr>
            </td>
        </table>

        <button>Adicionar novo contato</button>
        </div>

    )
}

export default Contacts