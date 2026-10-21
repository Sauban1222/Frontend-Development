import styles from './BannerVisual.module.css'

function BannerVisual({ className = '', src, alt = '', width, height, loading = 'lazy', ...props }) {
  return (
    <div {...props} className={`${styles.visual} ${className}`}>
      <img className={styles.artwork} src={src} alt={alt} width={width} height={height} loading={loading} />
    </div>
  )
}

export default BannerVisual
