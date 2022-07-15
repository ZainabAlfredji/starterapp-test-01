
export const initialState = {
    stack: [],
    hiddenStack: [],
}

/**
 * Actions
 */

export const SET_STACK = 'setStack@stacklayout'
export const SET_HIDDEN_STACK = 'setHiddenStack@stacklayout'
export const REGISTER_ROUTE = 'registerRoute@stacklayout'

export const setStack = (stack) => ({
    type: SET_STACK,
    payload: stack,
})

export const setHiddenStack = (stack) => ({
    type: SET_HIDDEN_STACK,
    payload: stack,
})

/**
 * Handlers
 */

export const actionHandlers = {
    '@reset': () => ({ ...initialState }),
    [SET_STACK]: (state, { payload }) => ({
        ...state,
        stack: [...payload],
    }),
    [SET_HIDDEN_STACK]: (state, { payload }) => ({
        ...state,
        hiddenStack: [...payload],
    }),
}

export const reducer = (state = initialState, action) => {
    const handler = actionHandlers[action.type]
    return handler ? handler(state, action) : state
}

export default reducer
