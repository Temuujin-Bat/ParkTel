// Third party
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

// Components
import { SpaceListController } from "../../services";

export function useAddSpaceList(
  setActiveStep: React.Dispatch<React.SetStateAction<number>>
) {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const { mutate, isPending, isError } = useMutation({
    mutationFn: SpaceListController,
    onSuccess: () => {
      enqueueSnackbar("Space list added successfully!", {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
        autoHideDuration: 3000,
      });
      navigate("/");
    },
    onError: (err) => {
      console.error(
        `ERROR! invite add space list request threw an Exception! ${err}`
      );
      setActiveStep(0);
      enqueueSnackbar("Please fill out all the required forms.", {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
        autoHideDuration: 3000,
      });
    },
  });

  return { mutate, isPending, isError };
}
