// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:dark:via-black/60 before:to-transparent';

export function BlogSectionSkeleton() {
  return (
    <section className="container my-8 flex flex-col p-2 gap-8">
      <div className="flex flex-wrap gap-6 items-end justify-between px-4">
        <div className={`${shimmer} relative overflow-hidden w-24 h-14 rounded skeletonbg`} />

        <div className={`${shimmer} relative overflow-hidden w-full h-12 max-w-[500px] rounded-md skeletonbg`} />
      </div>

      <BlogSkeleton />
    </section>
  );
}

export function BlogSkeleton() {
  return (
    <article
      className={`my-6 flex flex-col gap-8 justify-center items-center dark:bg-black bg-white p-4 py-6 container border border-red-50 dark:border-gray-600 rounded-md`}
    >
      <p className={`${shimmer} relative overflow-hidden w-full max-w-[400px] h-4 skeletonbg`} />

      <div className="flex flex-wrap gap-8">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <Pagination />
    </article>
  );
}

const Card = () => (
  <div
    className={`${shimmer} relative overflow-hidden h-full border border-gray-100 dark:border-gray-800 rounded-md min-w-[200px] sm:min-w-[500px] md:min-w-[200px] xl:md:min-w-[500px] flex flex-col sm:flex-row md:flex-col xl:flex-row gap-2`}
  >
    <div className="w-full h-[125px] skeletonbg" />

    <div className="p-2 sm:pt-4 w-full flex flex-col gap-5">
      <p className="w-11/12 h-2 skeletonbg" />
      <div className="grid gap-2">
        <p className="w-full h-2 skeletonbg" />
        <p className="w-full h-2 skeletonbg" />
        <p className="w-full h-2 skeletonbg" />
      </div>
      <div className="flex flex-wrap gap-3 mb-2">
        <div className="flex items-center justify-center gap-1">
          <div className="w-4 h-4 skeletonbg rounded-full" />
          <span className="w-[60px] h-2 skeletonbg" />
        </div>

        <div className="flex items-center justify-center gap-1">
          <div className="w-4 h-4 skeletonbg rounded-full" />
          <span className="w-[60px] h-2 skeletonbg" />
        </div>
      </div>
    </div>
  </div>
);

const Pagination = () => (
  <div className={`${shimmer} relative overflow-hidden flex items-center gap-3`}>
    <div className="w-10 h-10 rounded-md skeletonbg" />
    <div className="w-40 h-10 rounded-md skeletonbg" />
    <div className="w-10 h-10 rounded-md skeletonbg" />
  </div>
);
