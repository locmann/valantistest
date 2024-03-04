import styles from './ItemCard.module.css'

type PropsType = {
  index: number
} & ItemType

export const ItemCard = ({ id, price, product, brand, index }: PropsType) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.section}>
        <span>{index}</span>
      </div>
      <div className={styles.section}>
        <span className={styles.title}>{id}</span>
      </div>

      <div className={styles.section}>
        <span className={styles.title}>{product}</span>
        <span>{brand}</span>
      </div>

      <div className={styles.section}>
        <span className={styles.title}>{price} р</span>
      </div>
    </div>
  )
}
