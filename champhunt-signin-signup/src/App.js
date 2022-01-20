import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './stores/app.store'
import { Provider } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SignIn from './components/signin-signup/signin/signin.component';
import Onboarding from './containers/onboarding';
import PitchPage from './containers/pitch';
import SignUp from './components/signin-signup/signup/signup.component';
import CollectUserInfo from './components/signin-signup/collect-userInfo/collect-userInfo.component';

const theme = createTheme();

const AllRotes = () => {
  return (
    <ul>
      <li><a href='/'>Home</a></li>
      <li><a href='/login'>signin</a></li>
      <li><a href='/signup'>signup</a></li>
      <li><a href='/userinfo'>userinfo</a></li>
      <li><a href='/onboarding'>onboarding</a></li>
      <li><a href='/pitch'>pitch</a></li>
    </ul>
  )
}

const Dummy = ({ label = 'No page found' }) => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <p style={{ margin: 'auto' }}>
        {label}
        <AllRotes />
      </p>
    </div>
  )
}

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <div>
            {/* <HomePageSection /> */}
            <Routes>
              <Route path={'/pitch'} element={<PitchPage />} />
              <Route path={'/onboarding'} element={<Onboarding />} />
              <Route path={'/login'} element={<SignIn />} />
              <Route path={'/signup'} element={<SignUp />} />
              <Route path={'/userinfo'} element={<CollectUserInfo />} />
              <Route path={'/'} exact element={<Dummy label='Home' />} />
              <Route path={'*'} element={<Dummy />} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}
export default App;
