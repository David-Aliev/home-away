import { Skeleton } from "../ui/skeleton";

function LoadingCards() {
  return (
    <div className="mt-4 gap-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
}

export function SkeletonCard() {
  return (
    <div>
      <Skeleton className="h-[300px] rounded-md"></Skeleton>
      <Skeleton className="h-4 mt-2 w-3/4"></Skeleton>
      <Skeleton className="h-4 w-1/2"></Skeleton>
    </div>
  );
}

export default LoadingCards;
