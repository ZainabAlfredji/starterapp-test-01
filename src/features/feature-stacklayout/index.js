
/**
 * Synchronous Feature API
 * every resource listed here will partake into the main bundle
 * (reducers are required for correct SSR)
 */

import reducer from './stacklayout.reducer'
import listener from './stacklayout.listener'
import * as service from './stacklayout.service'

export const reducers = {
    stacklayout: reducer,
}

export const services = [
    service,
]

export const listeners = [
    listener,
]

export const stacklayoutService = service
