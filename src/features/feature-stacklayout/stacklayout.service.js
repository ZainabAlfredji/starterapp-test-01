
import { setHiddenStack, setStack } from './stacklayout.reducer'

// open single stack item
export const handleOpen = (component, props = {}) => (dispatch, getState) => {
    const item = {
        id: Date.now(),
        component,
        props,
    }

    dispatch({ type: '@stacklayout::before::open', payload: { item } })

    const { stacklayout } = getState()

    const hiddenStack = [...stacklayout.hiddenStack]
    let currentState = [ ...stacklayout.stack, { ...item, isVisible: false } ]

    const stackLength = currentState.length
    if (currentState.length > 1) {
        currentState = currentState.map((i, idx) => {
            if (stackLength - idx > 2) {
                i && hiddenStack.push({
                    ...i,
                    isVisible: true,
                })

                return {
                    ...i,
                    isVisible: false,
                }
            }
            return i
        })
    }

    dispatch(setStack(currentState))
    dispatch(setHiddenStack(hiddenStack))

    setTimeout(() => {
        const lastItem = currentState.pop()

        dispatch(setStack([
            ...currentState,
            { ...lastItem, isVisible: true },
        ]))
    }, 10)
}

// close single stack item
export const handleClose = () => (dispatch, getState) => {
    const { stacklayout } = getState()

    let currentState = [...stacklayout.stack]
    const hiddenStack = [...stacklayout.hiddenStack]

    const stackLength = currentState.length
    if (!stackLength) return

    if (currentState[stackLength - 3] && hiddenStack.length) {
        const lastItem = hiddenStack.pop()
        currentState[stackLength - 3] = lastItem
    }

    const lastItem = currentState.pop()

    dispatch({ type: '@stacklayout::before::close', payload: { item: lastItem } })

    currentState = [
        ...currentState,
        { ...lastItem, isVisible: false },
    ]

    dispatch(setStack(currentState))
    dispatch(setHiddenStack(hiddenStack))

    setTimeout(() => {
        currentState.pop()
        dispatch(setStack(currentState))

        // // clearout stack if there is only null values
        // const hasValues = currentState.filter(i => i !== null)
        // if (!hasValues.length) dispatch(setStack([]))
    }, 250)
}

export const start = () => (dispatch, getState) => {
    window.addEventListener('popstate', function (event) {
        const { stacklayout } = getState()
        if (!stacklayout.stack.length) return
        window.history.go(1)
        setTimeout(() => dispatch(handleClose()), 0)
    })
}
