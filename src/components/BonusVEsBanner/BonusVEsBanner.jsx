import { ArrowRight, BadgeCheck, CalendarCheck, Gift } from 'lucide-react'
import { Link } from 'react-router-dom'
import BannerCard from '../BannerCard/BannerCard.jsx'
import BannerFooter from '../BannerCard/BannerFooter.jsx'
import BannerVisual from '../BannerVisual/BannerVisual.jsx'
import styles from './BonusVEsBanner.module.css'
import bonusArtwork from '../../../images/Earn VEs.jpeg'

function BonusVEsBanner() {
  return (
    <BannerCard className={styles.card} aria-labelledby="bonus-banner-title">
      <div className={styles.main}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}><CalendarCheck size={14} aria-hidden="true" />BONUS VEs</span>
          <h2 id="bonus-banner-title" className={styles.title}>
            Get Extra <span>VEs</span>
          </h2>
          <p className={styles.text}>Find available bonus activities and see what it takes to qualify for extra VEs.</p>
          <Link to="/bonus" className={styles.cta}>
            Explore Bonuses
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <BannerVisual
          className={styles.visual}
          src={bonusArtwork}
          alt="Premium gift box surrounded by gold VE coins and a bonus opportunity panel"
          width={565}
          height={429}
        />
      </div>
      <BannerFooter
        label="Bonus activity details"
        items={[
          { icon: CalendarCheck, title: 'Find activities', detail: 'Browse current options' },
          { icon: BadgeCheck, title: 'Check criteria', detail: 'Requirements vary' },
          { icon: Gift, title: 'Review terms', detail: 'Before you begin' },
        ]}
      />
    </BannerCard>
  )
}

export default BonusVEsBanner
