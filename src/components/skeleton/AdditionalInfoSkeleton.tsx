import Card from "../cards/Card";
import { Skeleton } from "../ui/skeleton";

type Props = {};

export default function AdditionalInfoSkeleton({}: Props) {
  return (
    <Card
      title="Additional Weather Info"
      childrenClassName="grid grid-cols-1 flex-1 min-h-0 md:grid-cols-2 gap-8"
    >
      {[
        ["w-28", "w-12"],
        ["w-20", "w-12"],
        ["w-28", "w-8"],
        ["w-28", "w-12"],
        ["w-16", "w-20"],
        ["w-16", "w-20"],
      ].map(([labelWidth, valueWidth], index) => (
        <div className="flex justify-between" key={index}>
          <div className="flex gap-4">
            <Skeleton className={`h-7 ${labelWidth}`} />
            <Skeleton className="size-8 rounded-full" />
          </div>
          <Skeleton className={`h-7 ${valueWidth}`} />
        </div>
      ))}
    </Card>
  );
}
