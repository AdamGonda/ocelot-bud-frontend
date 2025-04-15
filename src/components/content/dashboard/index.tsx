import { h } from "preact";
import FilePicker from "./filepicker";
import { useRef, useState, useCallback } from "preact/hooks";
import "ojs/ojdialog";
import { ojDialog } from "ojs/ojdialog";
import "ojs/ojbutton";
import { ojButton } from "ojs/ojbutton";

// upload file(s) -> don't use response
// get status of file(s) -> {"code":"ObjectNotFound"} or validation json
export interface Batch {
  id: string;
  status: 'pending' | 'completed' | 'failed';
  files: {
    name: string;
    status: 'pending' | 'completed' | 'failed';
  }[];
}

const Dashboard = () => {
  const [batch, setBatch] = useState<Batch[]>([]);
  console.log('batch', batch)

  // const getStatus = async (name: string) => {
  //   const response = await fetch(`http://localhost:3000/api/status?name=${name}`)
  //   const json = await response.json();

  //   const { status, files } = json;

  //   console.log(status)

  //   if (status === 'completed') {
  //     setBatch(prev => {
  //       return prev.map(item => {
  //         if (item.id == name) {
  //           return {
  //             ...item,
  //             status,
  //             files: files.map((f: any) => ({
  //               ...f,
  //             }))
  //           };
  //         }
  //         return item;
  //       });
  //     });
  //   }

  // }

  // const handleRefresh = useCallback(async () => {
  //   setBatch(currentBatch => {
  //       currentBatch.map((b) => getStatus(b.id));
  //       return currentBatch;
  //   });
  // }, [batch]);

  return (
    <div class="oj-web-applayout-max-width oj-web-applayout-content">
      <h2 class="oj-typography-heading-sm">Prior Authorization Form Check</h2>
      <FilePicker setBatch={setBatch} />

      <oj-button
        style={{ marginTop: '10px' }}
        label={"Refresh"}
        chroming="callToAction"
        class="oj-button-full-width"
        onojAction={() => {}}>
        </oj-button>

      <div class="batch-container">
        {[...batch].reverse().map((b) => (
          <div key={b.id} class="batch-item" style={{ background: b.status === 'pending' ? 'rgba(193, 169, 0, 0.2)' : 'rgba(0, 138, 0, 0.2)' }}>
            <p><b>Status:</b> {b.status}</p>
            {
              b.files.map((f: any) => (
                <div style={{ 
                  border: '1px solid #ccc', 
                  borderRadius: '5px', 
                  padding: '10px',
                  background: f.status === 'failed' ? 'rgba(255, 0, 0, 0.2)' : 'transparent'
                }}>
                  <p><b>File name:</b> {f.name}</p>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <p style={{ marginBottom: '0px', marginRight: '10px' }}><b>Status:</b></p>
                    {/* @ts-ignore */}
                    <FileStatus id={b.id} status={f.status as 'pending' | 'completed' | 'failed'} />
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
export default Dashboard;

function FileStatus({ id, status }: {
  id: number, status: 'pending' | 'completed' | 'failed'
}) {
  const diag1 = useRef<ojDialog>(null);

  const open = (event: ojButton.ojAction) => {
    diag1.current?.open();
  };

  const close = () => {
    diag1.current?.close();
  };

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
        onojAction={open}></oj-button>
      <oj-dialog
        id="dialog1"
        dialog-title="Validation errors"
        aria-describedby="desc"
        ref={diag1}
      >
        <div slot="body">
          <p id="desc">
            {JSON.stringify({foo: 'bar'})}
          </p>
        </div>
        <div slot="footer">
          <oj-button id="okButton" onojAction={close}>
            OK
          </oj-button>
        </div>
      </oj-dialog>
    </div>
  }

  return null;
}
