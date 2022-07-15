
import PropTypes from 'prop-types'
import GenerateIcon from './GenerateIcon'

const PlusIcon = ({ color, size }) => {
    const body = () => {
        return (
            <>
                <path d="M20 10.5H1" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.5 20V1" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
            </>
        )
    }

    return (
        <GenerateIcon
            viewBox={'0 0 21 21'}
            size={size}
            cmp={body()}
        />
    )
}

PlusIcon.propTypes = {
    color: PropTypes.string,
    size: PropTypes.number,
}

PlusIcon.defaultProps = {
    color: '#1B1F27',
    size: 25,
}

export default PlusIcon
