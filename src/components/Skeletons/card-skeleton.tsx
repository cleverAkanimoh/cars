export default function CarsCardSkeleton() {

    return (
        <div className='overflow-hidden h-full'>
            <div
                className='border border-red-50 dark:border-red-950 rounded-md hover:shadow-sm h-full max-w-[220px] sm:max-w-[500px] md:max-w-[220px] xl:md:max-w-[500px] flex flex-col sm:flex-row md:flex-col xl:flex-row gap-1 overflow-hidden'>

                <div className='relative h-full w-full sm:w-2/5 md:w-full xl:w-2/5 overflow-hidden'>
                    <div />
                    <span />
                </div>

                <aside className='flex flex-col gap-3 p-2 py-3 w-full h-full sm:w-3/5 md:w-full xl:w-3/5'>

                    <span />

                    <div className='capitalize text-xs flex flex-wrap gap-2 mb-2'>
                        <p className='flex items-center justify-center gap-2' />

                        <p className='flex items-center justify-center gap-2'/>
                    </div>

                    <div className="flex gap-2 justify-between items-center">
                        <button />

                        <button />

                    </div>

                </aside>

            </div>
        </div>
    )
}