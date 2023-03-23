import '../App.css';
export default function SimpsonComponent(props) {
    let {itemName, pict} = props
    let classNameItem = 'card'
    return (
        <div>
            <div className={classNameItem}>
                <h2>{itemName}</h2>
                <img src={pict} alt = {itemName}/>
            </div>


        </div>
    )
}