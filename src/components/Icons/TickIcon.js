
import PropTypes from 'prop-types'
import { animated } from '@react-spring/web'

const TickIcon = ({ color, size, animate }) => {
    const params = {
        fill: 'none',
        stroke: color,
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 18 13',
        height: String(size) + 'px',
        width: String(size) + 'px',
    }

    const body = (
        <>
            <path d="M1 6.5L6.33483 12L17 1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </>
    )

    return animate
        ? <animated.svg {...params} children={body} />
        : <svg {...params} children={body} />
}

TickIcon.propTypes = {
    color: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string,
    ]),
    size: PropTypes.number,
    animate: PropTypes.bool,
}

TickIcon.defaultProps = {
    color: '#1B1F27',
    size: 25,
    animate: false,
}

export default TickIcon
