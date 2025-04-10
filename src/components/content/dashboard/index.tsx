import { h } from "preact";
import FilePicker from "./filepicker";
import { useState } from "preact/hooks";


export interface Batch {
  id: number;
  status: 'pending' | 'processing' | 'completed' | 'failed';
}

const BindingContent = () => {
  const [batch, setBatch] = useState<Batch[]>([]);

  return (
    <div class="oj-web-applayout-max-width oj-web-applayout-content">
      <h2 class="oj-typography-heading-sm">File Picker</h2>
        <FilePicker setBatch={setBatch} />

        <div>
          {batch.map((b) => (
            <div key={b.id}>
              <p>{b.status}</p>
            </div>
          ))}
        </div>
    </div>
  );
};
export default BindingContent;
