import Card from "../cards/Card";
import { Skeleton } from "../ui/skeleton";

type Props = {};

export default function CurrentSkeleton({}: Props) {
  return (
    <Card
      title="Current weather"
      className="md:pb-11 2xl:h-full"
      childrenClassName="flex flex-col items-center gap-6 2xl:justify-between"
    >
      <div className="flex flex-col gap-2 items-center">
        <Skeleton className="w-30 h-15" />
        <Skeleton className="size-14 rounded-full" />
        <Skeleton className="h-7 w-32" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xl text-center ">Local time:</p>
        <Skeleton className="h-12 w-36" />
      </div>
      <div className="flex justify-between w-full">
        <div className="flex flex-col items-center gap-2">
          <p className="text-gray-500">Feels like</p>
          <Skeleton className="h-6 w-12" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-gray-500">Humidity</p>
          <Skeleton className="h-6 w-12" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-gray-500">Wind</p>
          <Skeleton className="h-6 w-12" />
        </div>
      </div>
    </Card>
  );
}
