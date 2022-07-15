import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import { animated, useSpring } from '@react-spring/web'
import PropTypes from 'prop-types'

const styles = {
    modalWrapper: {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalInnerWrapper: {
        backgroundColor: '#FFFFFF',
        // margin: 15,
        width: '90vw',
        height: '90vh',
        borderRadius: 15,
        overflow: 'hidden',
    },
}

const Component = ({ open, onClose, children, innerStyles }) => {
    const contentProps = useSpring({
        config: { duration: 225 },
        opacity: open ? 1 : 0,
    })

    return (
        <Modal
            style={styles.modalWrapper}
            disableEnforceFocus
            disableAutoFocus
            open={open}
            onClose={() => setTimeout(onClose, 10)}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{ timeout: 500 }}
        >
            <animated.div style={contentProps}>
                <div
                    style={{
                        ...styles.modalInnerWrapper,
                        ...innerStyles,
                    }}>
                    {children}
                </div>
            </animated.div>
        </Modal>
    )
}

Component.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func,
    children: PropTypes.node,
    innerStyles: PropTypes.object,
}

Component.defaultProps = {
    open: false,
    onClose: () => null,
    children: null,
    body: null,
    footer: null,
    text: null,
    title: null,
    footerJustifyContent: 'center',
    innerStyles: {},
}

export default Component
