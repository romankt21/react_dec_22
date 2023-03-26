export default function UserComponent({item, clickChooseUser}) {
    return (
        <div>
            <h2>{item.id} - {item.name}</h2>
            <button onClick={()=>{clickChooseUser(item.id)}}>details</button>
        </div>
    )
}