// MUI
import { Container } from "@mui/material";

// Hooks
import { useGetProfileAPI } from "../../../hooks/api/useGetProfile";

// Components
import ProfileSettingsSkeleton from "./ProfileSettingsSkeleton";
import ProfileSettingsGrid from "./ProfileSettingsGrid";

export default function ProfileSettings() {
  const { data: userDetails, isPending: isLoading } = useGetProfileAPI();

  return (
    <Container maxWidth="lg">
      {isLoading ? (
        <ProfileSettingsSkeleton />
      ) : (
        <ProfileSettingsGrid userDetails={userDetails} />
      )}
    </Container>
  );
}
