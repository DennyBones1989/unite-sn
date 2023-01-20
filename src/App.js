import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
//import UsersContainer from './components/Users/UsersContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import { addPost, sendMessage } from './redux/store';
import store from './redux/redux-store';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';


const App = (props) => {
  //debugger;
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer/>
        <Navbar />
        <div className='app-wrapper-content'>

          <Routes>
            <Route path='/' element={<ProfileContainer
            />} />
            <Route path='/profile/' element={<ProfileContainer
            />} />
            <Route path='/profile/:userId/' element={<ProfileContainer
            />} />

            <Route path='/dialogs/*' element={<DialogsContainer />} />
            <Route path='/users/' element={<UsersContainer />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/login' element={<Settings />} />
          </Routes>

        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
