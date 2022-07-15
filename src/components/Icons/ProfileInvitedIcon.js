
import PropTypes from 'prop-types'
import GenerateIcon from './GenerateIcon'

const ProfileInvitedIcon = ({ filled, color, size }) => {
    const body = () => {
        if (filled) {
            return null
        } else {
            return (
                <>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.87651 15.2062C6.03251 15.2062 2.74951 15.7872 2.74951 18.1152C2.74951 20.4432 6.01251 21.0452 9.87651 21.0452C13.7215 21.0452 17.0035 20.4632 17.0035 18.1362C17.0035 15.8092 13.7415 15.2062 9.87651 15.2062Z"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke={color}
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.8766 11.8859C12.3996 11.8859 14.4446 9.84089 14.4446 7.31789C14.4446 4.79489 12.3996 2.74989 9.8766 2.74989C7.3546 2.74989 5.3096 4.79489 5.3096 7.31789C5.3006 9.83189 7.3306 11.8769 9.8456 11.8859H9.8766Z"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke={color}
                    />
                    <path
                        d="M17 10.3333L18.3337 11.6667L21 9"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke={color}
                    />
                </>
            )
        }
    }

    return (
        <GenerateIcon
            viewBox={filled ? '0 0 0 0' : '0 0 24 24'}
            size={size}
            cmp={body()}
        />
    )
}

ProfileInvitedIcon.propTypes = {
    filled: PropTypes.bool,
    color: PropTypes.string,
    size: PropTypes.number,
}

ProfileInvitedIcon.defaultProps = {
    filled: false,
    color: '#1B1F27',
    size: 25,
}

export default ProfileInvitedIcon
