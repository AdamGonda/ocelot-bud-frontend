import { h } from "preact";
import FilePicker from "./filepicker";
import { useState } from "preact/hooks";

export interface Batch {
  id: number;
  status: 'pending' | 'completed' | 'failed';
  files: {
    name: number;
    status: 'pending' | 'completed' | 'failed';
  }[];
}

const BindingContent = () => {
  const [batch, setBatch] = useState<Batch[]>([]);

  const getStatus = (id: number) => {
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
                files: files.map((f: any) => ({
                  ...f,
                }))
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
      getStatus(b.id);
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
              b.files.map((f: any) => (
                <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}>
                  <p><b>File name:</b> {f.name}</p>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <p style={{ marginBottom: '0px', marginRight: '10px' }}><b>Status:</b></p>
                    {getFileStatus(f.status)}
                  </div>
                </div>
              ))
            }
          </div>
        ))}
      </div>
    </div>
  );
};
export default BindingContent;

function getFileStatus(status: string) {
  const openModal = () => {
    console.log('open modal');
  }

  if (status === 'pending') {
    return 'pending'
  }

  if (status === 'completed') {
    return 'completed'
  }

  if (status === 'failed') {
    return <div style={{ display: 'inline-block' }}>
      <oj-button
        label={"Fix problem"}
        chroming="callToAction"
        class="oj-button-full-width"
        onojAction={openModal}></oj-button>
    </div>
  }
}
