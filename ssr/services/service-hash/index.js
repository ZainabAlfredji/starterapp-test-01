/**
 * this is a wrapper service around the hashing problem
 * using MD5 is ok in development but can have serious vulnerabilities.
 *
 * the "encode" function is supposed to be used asyncronousluy so to be
 * open to further development using a better method
 */

import bcrypt from 'bcrypt'
import * as hooks from './hooks'

let rounds = null

export const compare = (input, hash) => bcrypt.compare(String(input), hash)

export const encode = input => bcrypt.hash(String(input), rounds)

export default ({ registerAction }) =>
    registerAction({
        hook: '$INIT_SERVICE',
        name: hooks.SERVICE_NAME,
        trace: __filename,
        handler: async ({ getConfig }, ctx) => {
            rounds = Number(getConfig('service.hash.rounds'))

            // Decorate the context with helper methods
            ctx.hash = { encode, compare }
        },
    })
