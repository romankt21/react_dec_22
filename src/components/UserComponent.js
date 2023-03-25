import '../App.css';

export default function UserComponent(props) {
    let{item: {id, name, email}} = props
return (
    <div>

        <h2>{id}{name} </h2>
        <p>{email}</p>

    </div>
)
}