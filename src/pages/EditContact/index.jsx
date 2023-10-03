import { Link } from "react-router-dom"

function EditContact(){
    

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