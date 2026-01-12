import { useSystemStore } from '@/utils/store/systemStore'

type Props = {
    desktopComponent: React.ReactNode | undefined
    mobileComponent: React.ReactNode | undefined
    tabletComponent: React.ReactNode | undefined
}

const RenderingCase = ({ desktopComponent, mobileComponent, tabletComponent }: Props) => {
    const { size: appWidth } = useSystemStore()
    return (
        <>
            {appWidth === 'xs'
                ? mobileComponent
                : appWidth === 'xl' || appWidth === 'xxl'
                    ? desktopComponent
                    : tabletComponent}
        </>
    )
}
export default RenderingCase
