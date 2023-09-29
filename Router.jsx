import { Routes, Route } from "react-router-dom";
import Contacts from "./src/pages/contacts";
import AddNewContact from "./src/pages/AddNewContact";

function Router(){
    return(
        <Routes>
            <Route path="/" element={<Contacts/>}/>
            <Route path="/add-new-contact" element={<AddNewContact/>}/>
        </Routes>
    )
}

export default Router