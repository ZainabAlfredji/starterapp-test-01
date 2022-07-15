
/*
    Check the "styles/iconly/demo.html" file for all the icons.
    From there you can find all the different icons and namings
*/

import PropTypes from 'prop-types'
import { forwardRef } from 'react'

// eslint-disable-next-line react/display-name
const Iconly = forwardRef(({ type, style, bold, onClick, onTouchEnd, onTouchStart }, ref) => {
    return (
        <i
            ref={ref}
            className={`iconly-${type} ${bold ? 'icbo' : ''}`}
            style={style}
            onClick={onClick}
            onTouchEnd={onTouchEnd}
            onTouchStart={onTouchStart}
        />
    )
})

Iconly.propTypes = {
    type: PropTypes.string.isRequired,
    style: PropTypes.object,
    onTouchEnd: PropTypes.func,
    onTouchStart: PropTypes.func,
    onClick: PropTypes.func,
    bold: PropTypes.bool,
}

Iconly.defaultProps = {
    bold: false,
    style: null,
    onClick: () => null,
    onTouchEnd: () => null,
    onTouchStart: () => null,
}

export default Iconly
