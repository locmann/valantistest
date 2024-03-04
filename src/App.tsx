import './App.css'
import { Items } from '@/components/Items.tsx'
import { Header } from '@/components/Header/Header.tsx'
import { useSelector } from 'react-redux'
import { selectPages } from '@/store/selectors.ts'
import { useGetIdsQuery } from '@/api/Ids/idsApi.ts'
import { useAppDispatch } from '@/store/store.ts'
import { useEffect } from 'react'
import { uploadIds } from '@/store/idsSlice.ts'
import { removeDuplicates } from '@/utils/removeDuplicates.ts'

function App() {
  const { current } = useSelector(selectPages)
  const { data } = useGetIdsQuery({
    action: 'get_ids',
    params: { offset: 50 * (current - 1), limit: 50 },
  })
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (data) {
      dispatch(uploadIds(removeDuplicates(data.result)))
    }
  }, [data])

  return (
    <>
      <Header />

      <Items />
    </>
  )
}

export default App
