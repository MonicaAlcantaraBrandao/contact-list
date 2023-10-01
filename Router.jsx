import { Routes, Route } from "react-router-dom";
import Contacts from "./src/pages/contacts";
import CreateNewContact from "./src/pages/CreateNewContact";
import EditContact from "./src/pages/EditContact";

function Router(){
    return(
        <Routes>
            <Route path="/" element={<Contacts/>}/>
            <Route path="/create-new-contact" element={<CreateNewContact/>}/>
            <Route path="/edit-contact" element={<EditContact/>}/>
        </Routes>
    )
}

export default Router