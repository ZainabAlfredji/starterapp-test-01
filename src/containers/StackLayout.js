import { createElement } from 'react'
import { connect } from 'react-redux'

import PageDrawer from 'components/PageDrawer'
import { stacklayoutService } from 'features/feature-stacklayout'

const mapState = ({ stacklayout }) => ({
    stack: stacklayout.stack,
})

const mapDispatch = (dispatch, { history }) => ({
    close: () => dispatch(stacklayoutService.handleClose()),
    open: (cmp, props) => dispatch(stacklayoutService.handleOpen(cmp, props)),
})

const StackLayout = ({ stack, close, open }) => {
    return stack.map((item, idx, stackList) => {
        const { direction, ...cmpProps } = item.props
        const componentProps = {
            ...cmpProps,
            key: idx,
            stackLayout: {
                index: idx,
                close,
                open,
                isActive: idx === (stackList.length - 1),
            },
        }

        return (
            <div key={item.id} style={{ zIndex: idx + 1 }}>
                <PageDrawer
                    key={item.id}
                    direction={direction}
                    open={item.isVisible}
                    onClose={close}
                    children={createElement(item.component, componentProps)}
                    zIndex={idx + 1}
                />
            </div>
        )
    })
}

export default connect(mapState, mapDispatch)(StackLayout)
