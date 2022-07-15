
import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { colors } from 'styles'

const fontWeights = {
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
}

const fontSize = {
    h1: 32,
    h2: 26,
    h3: 22,
    h4: 20,
    h5: 18,
    h6: 16,
    p: 14,
    p2: 12,
}

const truncate = {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
}

const multiline = {
    whiteSpace: 'pre-wrap',
}

const Text = forwardRef(({ size, children, color, wrapperStyle, weight, truncated, onClick, multilined }, ref) => {
    return (
        <div style={wrapperStyle || {}} onClick={onClick}>
            <div
                style={{
                    fontSize: fontSize[size],
                    color: colors[color],
                    fontWeight: fontWeights[weight],
                    padding: 0,
                    margin: 0,
                    lineHeight: 1.33,
                    ...(multilined ? multiline : {}),
                    ...(truncated ? truncate : {}),
                }}
                children={children}
            />
        </div>
    )
})

Text.displayName = 'Text'

Text.propTypes = {
    size: PropTypes.string,
    children: PropTypes.any,
    color: PropTypes.string,
    weight: PropTypes.string,
    truncated: PropTypes.bool,
    wrapperStyle: PropTypes.object,
    onClick: PropTypes.func,
    multilined: PropTypes.bool,
}

Text.defaultProps = {
    size: 'h6',
    children: 'Text',
    color: 'black',
    weight: 'normal',
    wrapperStyle: {},
    truncated: false,
    onClick: () => null,
    multilined: false,
}

export default Text
