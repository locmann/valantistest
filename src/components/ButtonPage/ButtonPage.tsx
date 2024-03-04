import styles from './ButtonPage.module.css'

type PropsType = {
  page: number
  clickOnPage: (page: number) => void
  current: number
}

export const ButtonPage = ({ page, clickOnPage, current }: PropsType) => {
  const isActive = current === page ? styles.active : ''
  return (
    <span className={`${styles.btn} ${isActive}`} onClick={() => clickOnPage(page)}>
      {page}
    </span>
  )
}
