import { useState } from "react"
import { Link } from "react-router-dom"

function EditdataEdit(){
    const [name, setName] = useState()
    const [number, setNumber] = useState();
    const [address, setAddress] = useState();

// pesquise sobre userParams https://backefront.com.br/como-usar-useparams-react/

// vc precisa pegar seu server.json e ter ele aqui pra vc pesquisar nele

// fazer uma busca nele onde o id que ta chegando seja igual o id do seu json
// https://pt.stackoverflow.com/questions/238056/localizar-o-id-dentro-do-array-em-json

    // const handleEdit = async (e)=> {
    //     e.preventDefault()
        
    //     await api.put(`/contacts/${id}`, {
    //     id:0,
    //     name:name,
    //     address:address,
    //     number:number,
    //     })
    // }

    return(
        <div>
            <h1>Editando contato</h1>

            <form action="">
                <label>Nome:</label>
                <input type="text" name="" id="" value={name} onChange={(e)=>setName(e.target.value)}/>

                <label>Endereço:</label>
                <input type="text" name="" id="" value={address} onChange={(e)=>setAddress(e.target.value)}/>

                <label>Telefone:</label>
                <input type="text" name="" id="" value={number} onChange={(e)=>setNumber(e.target.value)}/>

                <button onClick={handleEdit}>Salvar</button>
                <Link to={"/"}>Voltar</Link> <button>Editar</button>

            </form>
        </div>
    )
}

export default EditdataEdit