import Card from "../cards/Card";
import { Skeleton } from "../ui/skeleton";

type Props = {};

export default function SideCardSekeleton({}: Props) {
  return (
    <Card
      childrenClassName="flex flex-col gap-3"
      className="hover:scale-105 transition-transform duration-300 from-sidebar-accent to-sidebar-accent/60 gap-0!"
    >
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Skeleton className="h-7 w-12 bg-sidebar" />
          <Skeleton className="size-4 rounded-full bg-sidebar" />
        </div>
        <Skeleton className="h-7 w-16 bg-sidebar" />
      </div>
      <div className="relative h-1.5 w-full rounded-full bg-sidebar">
        <Skeleton className="absolute -top-[3px] left-0 size-3 rounded-full bg-sidebar" />
      </div>
      <div className="flex justify-between text-xs">
        <Skeleton className="h-4 w-2 bg-sidebar" />
        <Skeleton className="h-4 w-8 bg-sidebar" />
      </div>
      <div className="flex justify-between">
        {Array.from({ length: 5 }).map((_, index) => (
          <Skeleton key={index} className="h-6 w-15 bg-sidebar" />
        ))}
      </div>
    </Card>
  );
}
