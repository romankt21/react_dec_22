
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

    const click2 = () => {
        console.log('click2 test');
    }

return (
    <div>
        <button onClick={()=> console.log('click')}>click me</button>

        <button onClick={click2}>click me2</button>

    </div>


    );


}

export default App;
