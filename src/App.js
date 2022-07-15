
import { Switch, Route } from 'react-router-dom'

import { HomePage } from './pages/AuthPages'
import StackLayout from './containers/StackLayout'

const App = () => {
    return (
        <>
            <Switch>
                <Route
                    path={'/'}
                    component={HomePage}
                />
            </Switch>
            <StackLayout />
        </>
    )
}

export default App
