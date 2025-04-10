import { h } from "preact";
import FilePicker from "./filepicker";
import { useState } from "preact/hooks";


export interface Batch {
  id: number;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  files: {
    name: string;
  }[];
}

const BindingContent = () => {
  const [batch, setBatch] = useState<Batch[]>([
    {
      id: 1,
      status: 'pending',
      files: [{ name: 'file1.jpg' }, { name: 'file2.jpg' }],
    },
  ]);

  return (
    <div class="oj-web-applayout-max-width oj-web-applayout-content">
      <h2 class="oj-typography-heading-sm">File Picker</h2>
      <FilePicker setBatch={setBatch} />

      <div class="batch-container">
        {batch.map((b) => (
          <div key={b.id} class="batch-item">
            <p><b>Status:</b> {b.status}</p>
            {
              b.files.map((f) => (
                <p><b>File name:</b> {f.name}</p>
              ))
            }
          </div>
        ))}
      </div>
    </div>
  );
};
export default BindingContent;
