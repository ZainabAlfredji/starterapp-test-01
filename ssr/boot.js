
import { createHookApp } from 'lib/hooks'

require('es6-promise').polyfill()
require('isomorphic-fetch')

const sessionDuration = '10y'

export default createHookApp({
    trace: process.env.NODE_ENV === 'development',
    services: [
        require('./services/service-env'),
        require('./services/service-logger'),
        // require('./services/service-hash'),
        // require('./services/service-jwt'),
        require('./services/service-express'),
        require('./services/service-express-graphql'),
        require('./services/service-express-cookies'),
        require('./services/service-express-ssr'),
        // require('./services/service-postgres'),
    ],
    features: [],
    settings: async ({ setConfig, getEnv }) => {
        setConfig('service.express-cookies', {
            scope: getEnv('REACT_APP_ID'),
            httpOnly: true,
            duration: sessionDuration,
        })

        // setConfig('service.jwt', {
        //     secret: getEnv('JWT_SECRET'),
        //     duration: sessionDuration,
        // })

        // setConfig('service.hash', {
        //     rounds: getEnv('HASH_ROUNDS'),
        // })

        // setConfig('service.postgres.connections', [
        //     {
        //         connectionName: 'default',
        //         connectionString: getEnv('PG_STRING'),
        //         schemas: [],
        //         enablePubSub: true,
        //     },
        // ])
    },
})
