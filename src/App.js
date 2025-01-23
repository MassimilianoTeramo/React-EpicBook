import './App.css';
import {MyNav, MyFooter, Welcome} from './component/myfile';
import {Container} from 'react-bootstrap'
import FantasyBooks from './component/GetJson';



function App() {
  return (
    <>
      <div className="App">
      <div>
        <MyNav className="mb-3" />
      </div>
       
        <Container className='mt-5'>
           <Welcome className='mt-5'/>
          <FantasyBooks />
          
        </Container>

        <footer>
          <MyFooter />
        </footer>
      </div>
    </>

  );
}

export default App;
