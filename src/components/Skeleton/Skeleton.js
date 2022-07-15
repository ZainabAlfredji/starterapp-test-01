/*
    Docs: https://v4.mui.com/api/skeleton/
    props: https://v4.mui.com/api/skeleton/
*/

/* eslint-disable react/require-default-props */
import { forwardRef } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { alpha, withStyles } from '@material-ui/core/styles'

export const styles = (theme) => {
    return {
        /* Styles applied to the root element. */
        root: {
            display: 'block',
            // Create a "on paper" color with sufficient contrast retaining the color
            backgroundColor: alpha(
                'rgba(0, 0, 0, 0.87)',
                0.11,
            ),
            height: '1.2em',
        },
        /* Styles applied to the root element if `animation="pulse"`. */
        pulse: {
            animation: '$pulse 1.5s ease-in-out 0.5s infinite',
        },
        '@keyframes pulse': {
            '0%': {
                opacity: 1,
            },
            '50%': {
                opacity: 0.4,
            },
            '100%': {
                opacity: 1,
            },
        },
    }
}

const Skeleton = forwardRef(function Skeleton (props, ref) {
    const { classes, style } = props

    return (
        <span
            ref={ref}
            className={clsx(
                classes.root,
                classes.pulse,
            )}
            style={style}
        />
    )
})

Skeleton.propTypes = {
    classes: PropTypes.object.isRequired,
    style: PropTypes.object,
}

export default withStyles(styles, { name: 'MuiSkeleton' })(Skeleton)
