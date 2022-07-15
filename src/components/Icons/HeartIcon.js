
import PropTypes from 'prop-types'
import GenerateIcon from './GenerateIcon'

const HeartIcon = ({ filled, color, size }) => {
    const body = () => {
        if (filled) {
            return (
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.675295 5.76569C0.0493788 3.81152 0.780879 1.57794 2.83246 0.917021C3.91163 0.568771 5.1028 0.774104 5.99996 1.44902C6.84871 0.792771 8.08363 0.571104 9.16163 0.917021C11.2132 1.57794 11.9494 3.81152 11.324 5.76569C10.3499 8.86319 5.99996 11.249 5.99996 11.249C5.99996 11.249 1.68213 8.89935 0.675295 5.76569Z"
                    fill={color}
                />
            )
        } else {
            return null
        }
    }

    return (
        <GenerateIcon
            viewBox={filled ? '0 0 12 12' : '0 0 0 0'}
            size={size}
            cmp={body()}
        />
    )
}

HeartIcon.propTypes = {
    filled: PropTypes.bool,
    color: PropTypes.string,
    size: PropTypes.number,
}

HeartIcon.defaultProps = {
    filled: false,
    color: '#1B1F27',
    size: 25,
}

export default HeartIcon
