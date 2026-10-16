import { Skeleton } from "../ui/skeleton";
import Card from "../cards/Card";

type Props = {};

export default function HourlySkeleton({}: Props) {
  return (
    <Card
      title="Hourly Forecast (48 hours)"
      childrenClassName="flex gap-6 overflow-x-scroll"
    >
      {Array.from({ length: 48 }).map((_, index) => (
        <div
          key={index}
          className="flex shrink-0 flex-col items-center gap-2 p-2"
        >
          <Skeleton className="h-6 w-20" />
          <Skeleton className="size-8 2xl:size-10" />
          <Skeleton className="h-6 w-12" />
        </div>
      ))}
    </Card>
  );
}
