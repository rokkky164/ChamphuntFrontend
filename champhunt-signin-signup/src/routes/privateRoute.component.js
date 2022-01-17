import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { isUserLoggedIn } from '../commons/helpers/userAuth.helper';


class RedirectToLogin extends React.Component {
    constructor(props) {
        super();
        this.state = { ...props };
    }
    UNSAFE_componentWillMount() {
        window.location = '/log-in';
    }
    render() {
        return (<section>{'Authentication required...'}</section>);
    }
}


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => (
            isUserLoggedIn() ? (
                <div>
                    <div className={'container'}>
                        <Component {...props} />
                    </div>
                </div>
            ) : (
                <RedirectToLogin />
            )
        )}
    />
);

PrivateRoute.propTypes = {
    component: PropTypes.instanceOf(React.Component).isRequired,
};

export default PrivateRoute;
