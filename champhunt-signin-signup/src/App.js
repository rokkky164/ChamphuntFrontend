import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './stores/app.store'
import { Provider } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SignIn from './components/signin-signup/signin/signin.component';
import ConfirmationPage from './components/signin-signup/confirmation/confirmation.component';
import Onboarding from './containers/onboarding';
import PitchPage from './containers/pitch';
import SearchPage from './containers/search';
import DealsPage from './containers/deals';
import SignUp from './components/signin-signup/signup/signup.component';
import CollectUserInfo from './components/signin-signup/collect-userInfo/collect-userInfo.component';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

function App() {
    return (
        <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <div>
            {/* <HomePageSection /> */}
            <Routes>
              <Route path={'/confirmation'} element={<ConfirmationPage />} />
              <Route path={'/search'} element={<SearchPage />} />
              <Route path={'/pitch'} element={<PitchPage />} />
              <Route path={'/deals'} element={<DealsPage />} />
              <Route path={'/onboarding'} element={<Onboarding />} />
              <Route path={'/login'} element={<SignIn />} />
              <Route path={'/signup'} element={<SignUp />} />
              <Route path={'/userinfo'} element={<CollectUserInfo />} />
              <Route path={'/'} exact element={<SignIn />} />
              <Route path={'*'} element={<SignIn />} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </Provider>
    );
}
export default App;