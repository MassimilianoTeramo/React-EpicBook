import './App.css';
import {MyNav, MyFooter, Welcome} from './component/myfile';
import {Container} from 'react-bootstrap'
import FantasyBooks from './component/GetJson';
import CommentArea from '.component/Modal';



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
          <CommentArea />
          
        </Container>

        <footer>
          <MyFooter />
        </footer>
      </div>
    </>

  );
}

export default App;
