import PropTypes from 'prop-types'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Drawer from '@material-ui/core/Drawer'
import { isIOS } from 'react-device-detect'

const PageDrawer = ({ open, onClose, onOpen, direction, children, zIndex, disableSwipe }) => {
    if (disableSwipe) {
        return (
            <Drawer
                anchor={direction}
                open={open}
                onClose={onClose}
                children={children}
                style={{
                    zIndex: `${zIndex + 1250}`,
                }}
                transitionDuration={{
                    enter: 225,
                    exit: 225,
                    appear: 225,
                }}
                // ModalProps={{
                //     // BackdropProps: { invisible: true },
                // }}
            />
        )
    }

    return (
        <SwipeableDrawer
            anchor={direction}
            open={open}
            onClose={onClose}
            onOpen={onOpen}
            children={children}
            disableBackdropTransition={!isIOS}
            disableDiscovery={isIOS}
            style={{
                zIndex: `${zIndex + 1250}`,
            }}
            transitionDuration={{
                enter: 225,
                exit: 225,
                appear: 225,
            }}
            // disableBackdropTransition
            // disableDiscovery
            // ModalProps={{
            //     BackdropProps: { invisible: true },
            // }}
        />
    )
}

PageDrawer.propTypes = {
    open: PropTypes.bool.isRequired,
    children: PropTypes.any.isRequired,
    onClose: PropTypes.func.isRequired,
    disableSwipe: PropTypes.bool,
    direction: PropTypes.string,
    onOpen: PropTypes.func,
    zIndex: PropTypes.number,
}

PageDrawer.defaultProps = {
    zIndex: 0,
    direction: 'right',
    onOpen: () => null,
    disableSwipe: false,
}

export default PageDrawer
