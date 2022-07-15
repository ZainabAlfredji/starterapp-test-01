import PropTypes from 'prop-types'
import { useState } from 'react'

import { colors } from 'styles'

import Skeleton from 'components/Skeleton'

const failedImages = {}
const loadedImages = {}

const fallbacks = {
    profile: 'https://dwu26uvbjm2sv.cloudfront.net/fallback-profile-v2.jpeg',
    contentV1: 'https://dwu26uvbjm2sv.cloudfront.net/broken-image-v1.png',
}

const Image = ({ src, width, height, borderRadius, border, objectFit, loaderColor, onClick, fallbackType, fallbackSrc }) => {
    const [ loaded, setLoaded ] = useState(loadedImages[src])
    const fallback = fallbacks[fallbackType] ? fallbacks[fallbackType] : fallbackSrc
    const source = failedImages[src] ? fallback : src

    return (
        <div>
            {!loaded
                ? (
                    <Skeleton
                        style={{
                            borderRadius,
                            width,
                            height,
                            ...(loaderColor ? { backgroundColor: colors[loaderColor] } : {}),
                        }}
                    />
                )
                : null}
            <div
                style={{
                    display: loaded ? 'block' : 'none',
                    width,
                    height,
                    backgroundColor: '#F4F4F4',
                    borderRadius,
                }}
            >
                <img
                    src={source}
                    alt={'image'}
                    onError={() => {
                        failedImages[src] = true
                        !loaded && setLoaded(true)
                        loadedImages[src] = true
                    }}
                    onLoad={() => {
                        !loaded && setLoaded(true)
                        loadedImages[src] = true
                    }}
                    style={{
                        width,
                        height,
                        minWidth: width,
                        maxWidth: width,
                        minHeight: height,
                        maxHeight: height,
                        borderRadius,
                        border,
                        ...(objectFit ? { objectFit } : {}),
                    }}
                    onClick={onClick}
                />
            </div>
        </div>
    )
}

Image.propTypes = {
    src: PropTypes.string,
    onClick: PropTypes.func,
    fallbackType: PropTypes.string,
    fallbackSrc: PropTypes.string,
    loaderColor: PropTypes.string,

    objectFit: PropTypes.string,
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    height: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    borderRadius: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    border: PropTypes.string,
}

Image.defaultProps = {
    src: '',
    fallbackType: 'profile',
    fallbackSrc: fallbacks.profile,
    onClick: () => null,
    width: 50,
    height: 50,
    borderRadius: '100%',
    objectFit: null,
    loaderColor: null,
    border: null,
}

export default Image
