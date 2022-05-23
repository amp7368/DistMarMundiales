import { Route } from 'react-router-dom';

import { ContactPage } from './contact/ContactPage';
import { LandingPage } from './landing/LandingPage';

export function App() {
    return (
        <>
            <Route path={'/'} render={LandingPage}></Route>;
            <Route path={'/contact'} render={ContactPage}></Route>;
        </>
    );
}

export default App;
