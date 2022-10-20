import { useRouter } from 'next/router'

import styles from './Pricing.module.scss'

const Pricing = () => {
    const router = useRouter()

    const onQuoteClick = () => router.push('/contact')

    return (
        <section className={styles.PricingPageContent}>
            <div className="contentSize">
                <h2>OUR PRICING</h2>
                <div className={`${styles.mainServiceCard} ${styles.baseCard}`}>
                    <div className={styles.cardContent}>
                        <div className={styles.priceDisplay}>
                            <span className={styles.priceMessage}>
                                *LIMITED TIME OFFER*
                            </span>
                            <div className={styles.prices}>
                                <span className={styles.strikethroughPrice}>
                                    $2500
                                </span>
                                <span className={styles.limitedPrice}>
                                    $1500
                                </span>
                            </div>
                        </div>
                        <div className={styles.packageItems}>
                            <div className={styles.included}>
                                <h4>This pricing includes the following</h4>
                                <ul>
                                    <li>Home Page</li>
                                    <li>Content Management System (CMS)</li>
                                    <li>Newsletter</li>
                                </ul>
                            </div>
                            <div className={styles.divider} />
                            <div className={styles.optional}>
                                <h4>With your choice of 3 of these</h4>
                                <ul>
                                    <li>Services</li>
                                    <li>Pricing & Packages</li>
                                    <li>Testimonials</li>
                                    <li>Blog</li>
                                    <li>Contact Form/Calendar</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.additionalPricingInfo}>
                            Above is our standard package, which suites most of
                            our clients. If you are interested in a more
                            customized package
                        </div>
                        <button onClick={onQuoteClick}>Get your quote</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing
