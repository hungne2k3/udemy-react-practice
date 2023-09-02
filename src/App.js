import './App.scss';
import Header from './components/Header';
import Container from 'react-bootstrap/Container';
import TableUser from './components/TableUser';
import ModalAddNewUser from './components/ModalAddNewUser';
import { useState } from 'react';

function App() {

  const [isShowModalAdd, setIsShowModalAdd] = useState(false);

  const handleClose = () => {
    setIsShowModalAdd(false)
  }

  return (
    <div className='app-container'>
      <Container>
        <Header />

        <div className='my-3 add-new'>
          <span><p>List User: </p></span>
          <button 
            className='btn btn-success'
            onClick={() => setIsShowModalAdd(true)}
          >
          Add new user
          </button>
        </div>
        <TableUser />
      </Container>

      <ModalAddNewUser
        show={isShowModalAdd}
        handleClose = {handleClose}
      />
    </div>
  );
}

export default App;
