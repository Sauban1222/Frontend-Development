import { ArrowRight, BadgeCheck, Info, RefreshCw } from 'lucide-react'
import { Link } from 'react-router-dom'
import BannerCard from '../BannerCard/BannerCard.jsx'
import BannerFooter from '../BannerCard/BannerFooter.jsx'
import BannerVisual from '../BannerVisual/BannerVisual.jsx'
import styles from './SwapCenterBanner.module.css'
import swapArtwork from '../../../images/Swap Center.jpeg'

function SwapCenterBanner() {
  return (
    <BannerCard className={styles.card} aria-labelledby="swap-banner-title">
      <div className={styles.main}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}><RefreshCw size={14} aria-hidden="true" />BALANCE CONVERSION</span>
          <h2 id="swap-banner-title" className={styles.title}>
            <span>Swap</span> Center
          </h2>
          <p className={styles.text}>Convert between supported VE balances and review the details before confirming.</p>
          <Link to="/swap" className={styles.cta}>
            Open Swap Center
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <BannerVisual
          className={styles.visual}
          src={swapArtwork}
          alt="Illustration of two reward balances being converted with swap arrows"
          width={529}
          height={384}
        />
      </div>
      <BannerFooter
        label="Swap details"
        items={[
          { icon: RefreshCw, title: 'Choose balances', detail: 'See supported options' },
          { icon: BadgeCheck, title: 'Review details', detail: 'Check before confirming' },
          { icon: Info, title: 'Preview rates', detail: 'Illustrative values only' },
        ]}
      />
    </BannerCard>
  )
}

export default SwapCenterBanner
