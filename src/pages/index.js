import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import HomepageFeatures from '../components/homepage-features/HomepageFeatures';
import HomepageDeveloperLinks from '../components/homepage-developer-links/HomepageDeveloperLinks';
import HomepagePreFooter from '../components/homepage-prefooter/HomepagePreFooter';
import HomepageFooter from '../components/homepage-footer/HomepageFooter';
import StartImage from '../../static/img/start-image.svg';

function HomepageHeader() {
    return (
        <header className={clsx('page-container', styles.headerWrap)}>
            <h1 className={styles.mainTitle}>Documentation Portal</h1>
            <div className={styles.searchWrap}>Search</div>
        </header>
    );
}

export default function Home() {
    document.addEventListener('scroll', function (e) {
        const scrollPosition = window.scrollY;
        const navbar = window.document.getElementsByClassName('navbar')[0];

        if (scrollPosition > 0) {
            navbar.classList.add('navbarFixed');
        } else {
            navbar.classList.remove('navbarFixed');
        }
    });


    return (
        <Layout pageClassName={styles.mainLayout}
                title="1inch Network | Leading high capital efficient DeFi protocols"
                description="The 1inch Network unites decentralized protocols whose synergy enables the most lucrative, fastest and protected operations in the DeFi space.">
            <StartImage className={styles.bgImage}/>
            <HomepageHeader/>
            <main>
                <div className={styles.section}>
                    <HomepageFeatures/>
                </div>
                <div className={styles.section2}>
                    <HomepageDeveloperLinks/>
                </div>
                <div className={styles.section3}>
                    <HomepagePreFooter/>
                </div>
                <HomepageFooter/>
            </main>
            {/*<img src="../../static/img/bottom-gradient.png" alt="Bottom gradient" className={styles.bottomGradient} />*/}
        </Layout>
    );
}