import { useSelector } from 'react-redux'
import { selectIds, selectItems } from '@/store/selectors.ts'
import { useGetItemsQuery } from '@/api/Items/itemsApi.ts'
import { useEffect } from 'react'
import { useAppDispatch } from '@/store/store.ts'
import { uploadItems } from '@/store/itemsSlice.ts'
import { ItemCard } from '@/components/ItemCard/ItemCard.tsx'
import styles from './Items.module.css'
import { removeDuplicatesItems } from '@/utils/removeDuplicates.ts'
import { QueryStatus } from '@reduxjs/toolkit/query'
export const Items = () => {
  const ids = useSelector(selectIds)
  const { data, status } = useGetItemsQuery({
    action: 'get_items',
    params: {
      ids,
    },
  })

  const isLoading = status === QueryStatus.pending
  const isError = status === QueryStatus.rejected
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (data) {
      dispatch(uploadItems(removeDuplicatesItems(data.result)))
    }
  }, [data, dispatch])

  const items = useSelector(selectItems)

  return (
    <div className={styles.wrapper}>
      {isLoading ? (
        <span>Идет загрузка</span>
      ) : isError ? (
        <span>Ошибка</span>
      ) : (
        items.map((item, index) => (
          <ItemCard
            key={item.id}
            id={item.id}
            brand={item.brand}
            price={item.price}
            product={item.product}
            index={index + 1}
          />
        ))
      )}
    </div>
  )
}
