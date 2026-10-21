import { ArrowRight, Gem, ShieldCheck, Wallet } from 'lucide-react'
import { Link } from 'react-router-dom'
import BannerCard from '../BannerCard/BannerCard.jsx'
import BannerFooter from '../BannerCard/BannerFooter.jsx'
import BannerVisual from '../BannerVisual/BannerVisual.jsx'
import styles from './ExchangeCenterBanner.module.css'
import exchangeArtwork from '../../../images/Rewards banner.jpeg'

function ExchangeCenterBanner() {
  return (
    <BannerCard className={styles.card} aria-labelledby="exchange-banner-title">
      <div className={styles.main}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}><Gem size={14} aria-hidden="true" />REWARD REDEMPTION</span>
          <h2 id="exchange-banner-title" className={styles.title}>
            Exchange Your <span>Rewards</span>
          </h2>
          <p className={styles.text}>Browse eligible rewards and review the VE requirements before redeeming.</p>
          <Link to="/exchange" className={styles.cta}>
            Explore Rewards
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <BannerVisual
          className={styles.visual}
          src={exchangeArtwork}
          alt="Illustration of a reward balance beside redemption choices"
          width={491}
          height={404}
        />
      </div>
      <BannerFooter
        label="Redemption details"
        items={[
          { icon: Gem, title: 'Browse options', detail: 'Explore reward choices' },
          { icon: Wallet, title: 'Check VE needs', detail: 'Review requirements' },
          { icon: ShieldCheck, title: 'Review first', detail: 'Before confirming' },
        ]}
      />
    </BannerCard>
  )
}

export default ExchangeCenterBanner
