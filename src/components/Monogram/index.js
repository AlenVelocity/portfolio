import classNames from 'classnames'
import { useId } from 'hooks'
import './index.css'

function Monogram({ highlight, className, ...props }) {
    const id = useId()
    const clipId = `monogram-clip-${id}`

    return (
        <svg
            aria-hidden
            className={classNames('monogram', className)}
            width="46"
            height="29"
            viewBox="0 0 46 29"
            {...props}
        >
            <defs>
                <clipPath id={clipId}>
                    <path d="m 29.95294,35.43161 c -0.07,0.19 -3.554998,-8.767815 -3.733998,-8.671815 -0.406,0.22 -16.5771841,0.132476 -16.5771841,0.132476 L 6.066214,35.399395 C 5.999214,35.276395 0,35.404595 0,35.26456 0,34.80156 8.261542,15.640436 8.261542,15.640436 l 6.037189,0.04053 -2.163373,5.411693 11.703245,-0.02075 -8.972749,-21.05989791 c 0,0 3.634962,-0.03952 6.355054,0.0248 L 36.357721,35.262982 Z" />
                </clipPath>
            </defs>
            <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
            {highlight && (
                <g clipPath={`url(#${clipId})`}>
                    <rect className="monogram__highlight" width="100%" height="100%" />
                </g>
            )}
        </svg>
    )
}

export default Monogram
