// Components
import { ErrorField } from "../../components/form";
import { TErrorMessagesField } from "./type";

export default function ErrorMessagesField({
  isError,
  isMobileError,
  isPasswordMatchError,
  isPasswordError,
}: TErrorMessagesField) {
  return (
    <>
      {isError && <ErrorField text="The email is already in use" />}
      {isMobileError && (
        <ErrorField text="The mobile number is invalid, it should be 05*-*******" />
      )}
      {isPasswordMatchError && <ErrorField text="Passwords do not match" />}
      {isPasswordError && (
        <ErrorField text="Password length should be at least 8 characters" />
      )}
    </>
  );
}