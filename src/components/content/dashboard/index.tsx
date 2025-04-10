import { h } from "preact";
import FilePicker from "./filepicker";


const BindingContent = () => {
  return (
    <div class="oj-web-applayout-max-width oj-web-applayout-content">
      <h2 class="oj-typography-heading-sm">File Picker</h2>
          <FilePicker />
    </div>
  );
};
export default BindingContent;
