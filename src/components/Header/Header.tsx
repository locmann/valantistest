import styles from './Header.module.css'
import { Pagination } from '@/components/Pagination/Pagination.tsx'
export const Header = () => {
  return (
    <div className={styles.header}>
      <Pagination />
    </div>
  )
}
