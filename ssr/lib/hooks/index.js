/**
 * ES5 Interface for the NPM Module
 */

// Simple implementation of a trace boot service
import { FINISH, SERVICE } from './lib/constants'
import { logBoot } from './lib/tracer'

export { traceHook, logTrace, logBoot } from './lib/tracer'
export { createHook } from './lib/create-hook'
export { registerAction } from './lib/register-action'
export { createHookApp, runHookApp } from './lib/create-hook-app'
export { createHookContext } from './lib/create-hook-context'
export { getHook } from './lib/create-hooks-registry'
export * from './lib/constants'

export const traceBoot = [
    FINISH,
    () => logBoot(),
    {
        name: `${SERVICE} traceBoot`,
    },
]

