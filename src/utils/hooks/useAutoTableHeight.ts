import { useEffect, useRef, useState } from 'react'

export const useAutoTableHeight = (offset = 0) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const headerRef = useRef<HTMLDivElement>(null)
    const [height, setHeight] = useState<number>(0)

    useEffect(() => {
        if (!containerRef.current) return

        const observer = new ResizeObserver(() => {
            const containerHeight = containerRef.current?.clientHeight || 0
            const headerHeight = headerRef.current?.clientHeight || 0

            setHeight(containerHeight - headerHeight - offset)
        })

        observer.observe(containerRef.current)

        return () => observer.disconnect()
    }, [offset])

    return { containerRef, headerRef, tableHeight: height }
}
