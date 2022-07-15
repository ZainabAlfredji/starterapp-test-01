/**
 * Server Entry Point
 * -------------------
 *
 * This code runs in NodeJS only and you can count on that.
 *
 * The most important stuff here is the `StaticRouter` that will
 * handle SSR routing with location/context provided by `react-ssr`.
 */

import React from 'react'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'
import { createSSRRender } from 'lib/create-ssr-render'

// project specific modules
import App from './App'
import { createState } from './app.state'

// eslint-disable-next-line
const Root = ({ store, location, context, ...props }) => {

    return (
        <StaticRouter location={location} context={context}>
            <Provider store={store}>
                <App {...props} />
            </Provider>
        </StaticRouter>
    )
}

export const staticRender = createSSRRender(Root, { createState })
