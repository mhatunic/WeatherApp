import Card from "../cards/Card";
import { Skeleton } from "../ui/skeleton";

type Props = {};

export default function DailySkeleton({}: Props) {
  return (
    <Card
      title="Daily Forecast"
      className="2xl:h-full"
      childrenClassName="flex flex-col gap-4 2xl:justify-between"
    >
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="flex justify-between">
          <Skeleton className="w-9 h-8" />
          <Skeleton className="size-8 rounded-full" />
          <Skeleton className="h-7 w-12" />
          <Skeleton className="h-7 w-12" />
          <Skeleton className="h-7 w-12" />
        </div>
      ))}
    </Card>
  );
}
