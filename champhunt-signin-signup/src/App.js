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
import NewsPage from './containers/news';
import AboutUs from './containers/aboutus';
import ArticlePage from './components/news/articles';
import ProfileDetailsPage from './containers/profile';
import SignUp from './components/signin-signup/signup/signup.component';
import NotFound from './components/notfound';
import ResetPassword from './components/signin-signup/fgt-pwd/resetpwd.component'
import ForgotPassword from './components/signin-signup/fgt-pwd/fgtpwd.component'
import CollectUserInfo from './components/signin-signup/collect-userInfo/collect-userInfo.component';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
  typography: {
    fontFamily: [
      "Poppins", 
      "sans-serif",
    ].join(","),
  },
});

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
              <Route path={'/news'} element={<NewsPage />} />
              <Route path={'/news/:article_id'} element={<ArticlePage />} />
              <Route path={'/profile'} element={<ProfileDetailsPage />} />
              <Route path={'/onboarding'} element={<Onboarding />} />
              <Route path={'/login'} element={<SignIn />} />
              <Route path={'/signup'} element={<SignUp />} />
              <Route path={'/userinfo'} element={<CollectUserInfo />} />
              <Route path={'/reset-pwd'} element={<ResetPassword />} />
              <Route path={'/reset-pwd/:activation_token'} element={<ForgotPassword />} />
              <Route path={'/about-us'} element={<AboutUs />} />
              <Route path={'/'} exact element={<PitchPage />} />
              <Route path={'*'} element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </Provider>
    );
}
export default App;