import './style.css'
// import './Components/Header/Header.css'
// import './Pages/Home/Home.css'

import Title from './Components/Header/Title';
import RouteComp from './Utility/Routes'
import Nav from './Components/Header/Nav'
import Details from './Utility/Details';
function App() {
  return (
    <div className='Bodywrap'>
      <Details>
    <Title/>
    <Nav/>    
    <RouteComp/>
    </Details>
    </div>
  );
}

export default App;
