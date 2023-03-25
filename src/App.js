import {useEffect, useState} from "react";
import UserComponent from "./components/UserComponent";
import {getUsers} from "./services/userService";

function App() {
    // let users = [
    //     {name: 'vasyl', age: 31, status: false},
    //     {name: 'petro', age: 30, status: true},
    //     {name: 'mykola', age: 29, status: true},
    //     {name: 'olya', age: 28, status: false},
    //     {name: 'max', age: 30, status: true},
    //     {name: 'ganna', age: 31, status: false},
    //     {name: 'oleg', age: 28, status: false},
    //     {name: 'andriy', age: 29, status: true},
    //     {name: 'maria', age: 30, status: true},
    //     {name: 'olya', age: 31, status: false},
    //     {name: 'max', age: 31, status: true},
    // ];
    //
    // return (
    //     <div>
    //         {
    //             users.map((user) => {
    //                 return <div>name - {user.name}; status - {user.status.toString()}</div>
    //             })
    //         }
    //     </div>
    // )


    // let [counter, setcounter] = useState(0);
    // const increment = () => {
    //     setcounter(++counter);
    // }
    //
    // return (
    //     <div>
    //         <h1>{counter}</h1>
    //         <button onClick={increment}>increment me</button>
    //     </div>
    // );
    //



        let [users, setUsers] = useState ([]);
        useEffect(() =>  {
            getUsers().then(value => setUsers([...value]));

        }, [])


    return (
        <div>
            {
                users.map(value => <UserComponent
                    key ={value.id}
                    item = {value}  />)
            }


        </div>
    );

}

export default App;
