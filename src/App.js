import React, {useState} from "react";

import Users from "./components/users/Users";



const App =() => {
    const [user, setUser] = useState(null)

    return (
        <div>
            {user&& <h1>{JSON.stringify(user)}</h1>}

            <Users getUser={setUser}/>



        </div>


    )


}

export default App;
