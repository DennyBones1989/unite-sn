import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { addPost, sendMessage } from './redux/store';


const App = (props) => {
  //debugger;
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar state={props.state.sidebarReducer}/>
        <div className='app-wrapper-content'>

          <Routes>
            <Route path='/' element={<Profile 
              store={props.store}/>} />

            <Route path='/profile' element={<Profile
              store={props.store}/>}/>

            <Route path='/dialogs/*' element={<DialogsContainer 
              store={props.store}
              />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>

        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
