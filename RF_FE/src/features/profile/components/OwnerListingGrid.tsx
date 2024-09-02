// Components
import OwnerListingGridSkeleton from "./OwnerListingGridSkeleton";

// Hooks
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
