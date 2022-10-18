import { Card, Timeline } from 'antd'

import styles from './Pricing.module.scss'

const Separator = () => (
    <svg
        className={styles.separator}
        // width="100%"
        // height="120"
        viewBox="0.1 0.1 180 40"
        preserveAspectRatio="none">
        <g transform="translate(-18.298844,-77.973964)">
            <path
                // style="fill:#b5002b;"
                d="M 31.615583,86.351641 H 192.16499 v 26.901969 c 0,0 -32.03411,-14.237983 -59.62682,-12.72484 -22.34188,1.2252 -54.779359,9.72634 -54.779359,9.72634 0,0 -22.029534,3.62882 -34.471238,-1.88988 -12.441702,-5.51871 -11.67199,-22.013589 -11.67199,-22.013589 z"
            />
            <path
                // style="fill:#ff1a51;"
                d="M 18.441597,78.106256 H 198.58126 v 39.288614 c 0,0 -43.10672,-27.825245 -73.47599,-19.687823 -30.369264,8.137423 -46.832208,12.548653 -46.832208,12.548653 0,0 -32.775418,8.05972 -46.735258,0 C 17.577964,102.19598 18.441597,78.106256 18.441597,78.106256 Z"
            />
        </g>
    </svg>
)

const Pricing = () => {
    return (
        <section className={styles.PricingPageContent}>
            <h2>Pricing and Packages</h2>
            <Separator />
        </section>
    )
}

export default Pricing
