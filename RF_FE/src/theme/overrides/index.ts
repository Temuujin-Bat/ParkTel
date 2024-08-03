// Third party
import merge from "lodash/merge";

// Components
import Textfield from "./TextField";

export default function ComponentsOverrides() {
  return merge(Textfield());
}
