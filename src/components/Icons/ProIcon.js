
import PropTypes from 'prop-types'

import proBadge from 'resources/images/pro-badge.png'

const ProIcon = ({ size }) => {
    return (
        <img
            src={proBadge}
            style={{
                width: size,
                minWidth: size,
                maxWidth: size,
                height: size / 2.33,
                minHeight: size / 2.33,
                maxHeight: size / 2.33,
            }}
        />
    )
}

ProIcon.propTypes = {
    size: PropTypes.number,
}

ProIcon.defaultProps = {
    size: 49,
}

export default ProIcon
