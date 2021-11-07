import useSWR from 'swr'

import { fetcher } from 'libs/fetcher'
import { apiCounter } from 'constants/paths'

function useCounter() {
  const { data, error } = useSWR(apiCounter, fetcher)

  return {
    urls: data?.urls + 100 || 0,
    users: data?.users + 17 || 0, 
    isLoading: !error && !data,
    isError: Boolean(error)
  }
}

export default useCounter
