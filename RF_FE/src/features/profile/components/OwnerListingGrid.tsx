// Components
import OwnerListingGridSkeleton from "./OwnerListingGridSkeleton";
import OwnerListingGridList from "./OwnerListingGridList";

export default function OwnerListingGrid({
  isPending,
}: {
  isPending: boolean;
}) {
  return (
    <>{isPending ? <OwnerListingGridSkeleton /> : <OwnerListingGridList />}</>
  );
}
