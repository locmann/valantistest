import ArrowLeft from '@/svg/ArrowLeft.svg?react'
import styles from './Pagination.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { updatePages } from '@/store/pagesSlice.ts'
import { selectPages } from '@/store/selectors.ts'
import { useEffect, useState } from 'react'
import { ButtonPage } from '@/components/ButtonPage/ButtonPage.tsx'
export const Pagination = () => {
  const [pages, setPages] = useState<number[]>([])
  const dispatch = useDispatch()
  const { current, total } = useSelector(selectPages)

  const handleClickOnPage = (page: number) => {
    dispatch(updatePages(page))
  }

  const handleClickOnPrev = () => {
    dispatch(updatePages(current - 1))
  }
  const handleClickOnNext = () => {
    dispatch(updatePages(current + 1))
  }

  useEffect(() => {
    setPages([...pages, 1])
  }, [total])

  return (
    <div className={styles.wrapper}>
      <ArrowLeft className={styles.btn} onClick={handleClickOnPrev} />
      {pages.map((_, index) => {
        /*if (pages.length > 10) {
          switch (index) {
            case 0:
              return (
                <ButtonPage
                  key={index}
                  page={index + 1}
                  clickOnPage={handleClickOnPage}
                  current={current}
                />
              )
            case pages.length - 1:
              return (
                <ButtonPage
                  key={index}
                  page={index + 1}
                  clickOnPage={handleClickOnPage}
                  current={current}
                />
              )
            case Math.floor(pages.length / 2):
              return (
                <ButtonPage
                  key={index}
                  page={index + 1}
                  clickOnPage={handleClickOnPage}
                  current={current}
                />
              )
            case Math.floor(pages.length / 2) - 1:
              return <span>...</span>
            case Math.floor(pages.length / 2) + 1:
              return <span>...</span>
          }
        }
        return (
          <ButtonPage
            key={index}
            page={index + 1}
            clickOnPage={handleClickOnPage}
            current={current}
          />
        )*/
        if (
          index + 1 === 1 ||
          index + 1 === pages.length ||
          (index + 1 >= current - 2 && index + 1 <= current + 2)
        ) {
          return (
            <ButtonPage
              key={index}
              page={index + 1}
              clickOnPage={handleClickOnPage}
              current={current}
            />
          )
        } else if (index + 1 === current - 3 || index + 1 === current + 3) {
          return <span key={index}>...</span>
        } else {
          return null
        }
      })}
      <ArrowLeft onClick={handleClickOnNext} className={`${styles.reverse} ${styles.btn}`} />
    </div>
  )
}
