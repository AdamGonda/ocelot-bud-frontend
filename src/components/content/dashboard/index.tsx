import { h } from "preact";
import FilePicker from "./filepicker";
import { useRef, useState, useCallback } from "preact/hooks";
import "ojs/ojdialog";
import { ojDialog } from "ojs/ojdialog";
import "ojs/ojbutton";
import { ojButton } from "ojs/ojbutton";

// upload file(s) -> don't use response
// get status of file(s) -> 404 or validation json

type Status = 'pending' | 'completed' | 'failed';

export interface Batch {
  id: string;
  status: Status;
  files: {
    name: string;
    status: Status;
    json: any;
  }[];
}

function getFileStatus(json: any) {
  // return completed if there is no "required field" string in the json
  const stringContent = JSON.stringify(json)

  if (!stringContent.includes('required field')) {
    return 'completed'
  }

  return 'failed'
}

const Dashboard = () => {
  const [batchs, setBatchs] = useState<Batch[]>([]);
  console.log('batchs', batchs)

  async function handleRefresh() {
    // map each batchs and each file and get status
    // https://lovd4dycqhagxjh7jskvgryic4.apigateway.eu-frankfurt-1.oci.customer-oci.com/v4/api/status/IMG_0603.JPEG.json

    const newBatchs = await Promise.all(batchs.map(async (b) => {
      await Promise.all(b.files.map(async (f) => {
        const response = await fetch(`https://lovd4dycqhagxjh7jskvgryic4.apigateway.eu-frankfurt-1.oci.customer-oci.com/v4/api/status/${f.name}${f.name.toLowerCase().endsWith('.pdf') ? '.jpg' : ''}.json`)

        if (response.status === 404) {
          f.status = 'pending'
        } else {
          const json = await response.json();
          f.status = getFileStatus(json)
          f.json = json
        }
      }))

      return b
    }))

    

    setBatchs(newBatchs.map(batch => ({
      ...batch,
      status: batch.files.every(f => f.status !== 'pending') ? 'completed' : 'pending'
    })))
  }

  return (
    <div class="oj-web-applayout-max-width oj-web-applayout-content">
      <h2 class="oj-typography-heading-sm">Prior Authorization Form Check</h2>
      <FilePicker setBatch={setBatchs} />

      <oj-button
        style={{ marginTop: '10px' }}
        label={"Refresh"}
        chroming="callToAction"
        class="oj-button-full-width"
        onojAction={handleRefresh}>
        </oj-button>

      <div class="batch-container">
        {[...batchs].reverse().map((b) => (
          <div key={b.id} class="batch-item" style={{ background: b.status === 'pending' ? 'rgba(193, 169, 0, 0.2)' : 'rgba(0, 138, 0, 0.2)' }}>
            <p><b>Status:</b> {b.status}</p>
            {
              b.files.map((f: any) => (
                <div style={{ 
                  border: '1px solid #ccc', 
                  borderRadius: '5px', 
                  padding: '10px',
                  background: f.status === 'failed' ? 'rgba(255, 0, 0, 0.2)' : 
                             f.status === 'completed' ? 'rgba(0, 138, 0, 0.2)' : 
                             'transparent'
                }}>
                  <p><b>File name:</b> {f.name}</p>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <p style={{ marginBottom: '0px', marginRight: '10px' }}><b>Status:</b></p>
                    {/* @ts-ignore */}
                    <FileStatus id={b.id} status={f.status} json={f.json} />
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

function FileStatus({ id, status, json }: {
  id: number, status: Status, json: any
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
            {JSON.stringify(json.validation)}
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
