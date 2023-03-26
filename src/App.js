import {useEffect, useState} from "react";
import {getUser, getUsers} from "./services/user.service";
import {logDOM} from "@testing-library/react";
import UserComponent from "./components/UserComponent";


function App() {
let [users, setUsers] = useState([])
    useEffect(() => {
        getUsers().then(value => setUsers(value.data));
    }, [])

    const chooseUser = (id) => {
        getUser(id).then(value => console.log(value.data))
    }

    return (
        <div>
            {users.map(value => <
                UserComponent
                key={value.id}
                item = {value}
            clickChooseUser = {chooseUser}
            />)}

        </div>
    );

  
}

export default App;

// 17.29
