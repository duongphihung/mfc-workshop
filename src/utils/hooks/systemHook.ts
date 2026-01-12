import {  useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

// export function useTransformCatalog(data) {
  
// }
/**
 *
 * @returns return list of customizeParam{type/id}
 */
export function useSplitParam(): string[] {
  const { id } = useParams()
  return String(id).split('&')
}
