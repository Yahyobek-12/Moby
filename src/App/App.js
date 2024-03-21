import { Routes, Route } from 'react-router-dom';
import { Home, Navbar, Task } from '../constants';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/tasks' element={<Task />} />
      </Routes>
    </div>
  )
}

export default App
