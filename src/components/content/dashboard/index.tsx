import { h } from "preact";
import FilePicker from "./filepicker";
import { useState } from "preact/hooks";


export interface Batch {
  id: string;
  status: 'pending' | 'completed' | 'failed';
  files: {
    name: string;
  }[];
}

const BindingContent = () => {
  const [batch, setBatch] = useState<Batch[]>([]);

  const getStatus = (id: string) => {
    fetch(`http://localhost:3000/api/status?id=${id}`).then(async (response) => {
      const json = await response.json();

      const { status, files } = json;
      
      if (status === 'completed') {
        setBatch(prev => {
          return prev.map(item => {
            if (item.id == id) {
              return {
                ...item,
                status,
              };
            }
            return item;
          });
        });
      }
    });
  }

  const handleRefresh = () => {
    batch.forEach((b) => {
      getStatus(b.id.toString());
    });
  }

  return (
    <div class="oj-web-applayout-max-width oj-web-applayout-content">
      <h2 class="oj-typography-heading-sm">File Picker</h2>
      <FilePicker batch={batch} setBatch={setBatch} />

      <oj-button
        label={"Refresh"}
        chroming="callToAction"
        class="oj-button-full-width"
        onojAction={handleRefresh}></oj-button>

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
