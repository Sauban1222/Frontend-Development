import { ArrowRight, BadgeCheck, BookOpen, Gift, Share2, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import BannerCard from '../BannerCard/BannerCard.jsx'
import BannerFooter from '../BannerCard/BannerFooter.jsx'
import BannerVisual from '../BannerVisual/BannerVisual.jsx'
import styles from './ReferEarnBanner.module.css'
import referralArtwork from '../../../images/Referral.jpeg'

export default function ReferEarnBanner() {
  return (
    <BannerCard className={styles.card} aria-labelledby="refer-title">
      <div className={styles.main}>
        <div className={styles.copy}>
          <span className={styles.pill}><Users size={15} aria-hidden="true" />REFERRAL REWARDS</span>
          <h2 id="refer-title" className={styles.title}>
            Invite Friends
            <span className={styles.grad}>and Earn Rewards</span>
          </h2>
          <p className={styles.text}>
            Share your invite with friends and explore rewards for referrals that meet program criteria.
          </p>
          <div className={styles.actions}>
            <Link to="/refer" className={styles.cta}>
              Invite Friends
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link to="/refer#how-it-works" className={styles.howItWorks}>
              <BookOpen size={16} aria-hidden="true" />
              How It Works
            </Link>
          </div>
        </div>
        <BannerVisual
          className={styles.visual}
          src={referralArtwork}
          alt="Two connected profiles share an invite around a reward gift"
          width={521}
          height={415}
          loading="eager"
        />
      </div>
      <BannerFooter
        label="Referral program highlights"
        items={[
          { icon: Share2, title: 'Easy sharing', detail: 'Send your referral link' },
          { icon: BadgeCheck, title: 'Clear criteria', detail: 'Program criteria apply' },
          { icon: Gift, title: 'Earn rewards', detail: 'For eligible referrals' },
        ]}
      />
    </BannerCard>
  )
}
