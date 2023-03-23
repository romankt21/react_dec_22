import logo from './logo.svg';
import SimpsonComponent from "./components/SimpsonComponent";

function App() {
    return (
        <div className="wrap">
<SimpsonComponent itemName={'bart'} pict={'https://static.simpsonswiki.com/images/thumb/6/65/Bart_Simpson.png/200px-Bart_Simpson.png'}/>
<SimpsonComponent itemName={'homer'} pict={'https://www.kindpng.com/picc/m/364-3640965_homer-simpson-png-transparent-png.png'}/>
<SimpsonComponent itemName={'marge'} pict={'https://w7.pngwing.com/pngs/176/337/png-transparent-bart-simpson-marge-simpson-homer-simpson-adidas-yeezy-simpson-family-simpsons-heroes-vertebrate-illustrator.png'}/>
        </div>
    )
  
}

export default App;
