/**
 * Listen to the login/logout status to activate or deactivate the
 * snaps subscriptions
 */

import { handleOpen, handleClose } from './stacklayout.service'

export default [
    {
        type: '@stacklayout::open',
        handler: ({ payload }) => async (dispatch, getState) => {
            dispatch(handleOpen(payload.component, payload.props))
        },
    },
    {
        type: '@stacklayout::close',
        handler: ({ payload }) => async (dispatch, getState) => {
            dispatch(handleClose())
        },
    },
]
