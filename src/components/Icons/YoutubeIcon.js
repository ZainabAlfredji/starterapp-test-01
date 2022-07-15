
import PropTypes from 'prop-types'
import GenerateIcon from './GenerateIcon'

const YoutubeIcon = ({ size }) => {
    const body = () => {
        return (
            <>
                <rect x="0.99646" width="20" height="20" rx="5" fill="#C4302B"/>
                <path
                    d="M14.1666 5.68628H8.77445C7.1568 5.68628 6.07837 6.76471 6.07837 8.38236V11.6177C6.07837 13.2353 7.1568 14.3137 8.77445 14.3137H14.1666C15.7842 14.3137 16.8627 13.2353 16.8627 11.6177V8.38236C16.8627 6.76471 15.7842 5.68628 14.1666 5.68628ZM12.4897 10.5554L11.1578 11.3534C10.6186 11.677 10.1764 11.4289 10.1764 10.798V9.19658C10.1764 8.5657 10.6186 8.31766 11.1578 8.64119L12.4897 9.43921C13.0019 9.75196 13.0019 10.248 12.4897 10.5554Z"
                    fill="white"
                />
            </>
        )
    }

    return (
        <GenerateIcon
            viewBox={'0 0 21 20'}
            size={size}
            animate={false}
            cmp={body()}
        />
    )
}

YoutubeIcon.propTypes = {
    size: PropTypes.number,
}

YoutubeIcon.defaultProps = {
    size: 25,
}

export default YoutubeIcon
