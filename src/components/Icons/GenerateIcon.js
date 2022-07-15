import PropTypes from 'prop-types'

const GenerateIcon = ({ viewBox, size, cmp }) => {
    const params = {
        fill: 'none',
        stroke: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox,
        height: String(size) + 'px',
        width: String(size) + 'px',
    }

    return <svg {...params} children={cmp} />
}

GenerateIcon.propTypes = {
    viewBox: PropTypes.string,
    size: PropTypes.number,
    cmp: PropTypes.element,
}

GenerateIcon.defaultProps = {
    viewBox: '0 0 24 24',
    size: 25,
    cmp: null,
}

export default GenerateIcon
