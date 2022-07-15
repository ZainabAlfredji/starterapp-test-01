
import PropTypes from 'prop-types'
import { animated } from '@react-spring/web'

const CrossIcon = ({ color, size, animate }) => {
    const params = {
        fill: 'none',
        stroke: color,
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 18 18',
        height: String(size) + 'px',
        width: String(size) + 'px',
    }

    const body = (
        <>
            <path d="M17 1L1 17" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17 17L1 1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </>
    )

    return animate
        ? <animated.svg {...params} children={body} />
        : <svg {...params} children={body} />
}

CrossIcon.propTypes = {
    color: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string,
    ]),
    size: PropTypes.number,
    animate: PropTypes.bool,
}

CrossIcon.defaultProps = {
    color: '#1B1F27',
    size: 25,
    animate: false,
}

export default CrossIcon
