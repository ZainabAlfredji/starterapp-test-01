
import PropTypes from 'prop-types'
import icon from 'resources/images/instagram-icon.png'

const InstagramIcon = ({ size }) => {
    return (
        <img
            src={icon}
            width={size}
            height={size}
        />
    )
}

InstagramIcon.propTypes = {
    size: PropTypes.number,
}

InstagramIcon.defaultProps = {
    size: 25,
}

export default InstagramIcon
