import './style.css'
import Title from './Components/Header/Title';
import RouteComp from './Utility/Routes'
import Nav from './Components/Header/Nav'
import Details from './Utility/Details';
function App() {
  return (
    <div >
      <Details>
    <Title/>
    <Nav/>    
    <RouteComp/>
    </Details>
    </div>
  );
}

export default App;
