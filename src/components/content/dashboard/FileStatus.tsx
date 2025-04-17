import "ojs/ojdialog";
import { ojDialog } from "ojs/ojdialog";
import "ojs/ojbutton";
import { ojButton } from "ojs/ojbutton";
import ExtractedData from "./ExtractedData";
import { useRef } from "preact/hooks";
import { Status } from ".";
import { FilePreview } from "./FilePreview";

export function FileStatus({ file, status, json }: { status: Status, json: any, file: File}) {
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
  
    return <div style={{ display: 'inline-block' }}>
      <oj-button
        label={"Check result"}
        chroming="callToAction"
        class="oj-button-full-width"
        onojAction={open}></oj-button>
      <oj-dialog
        id="dialog1"
        dialog-title="Data extraction results"
        aria-describedby="desc"
        style={{width: "80%"}}
        ref={diag1}
      >
        <div style={{overflow: "visible"}} slot="body">
          <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem"}}>
            <div style={{position: "sticky", top: "1.5rem", height: "fit-content"}}>
              <FilePreview file={file} thumbNail={false} />
            </div>
            
            <ExtractedData extractedData={json} />
          </div>
        </div>
        <div slot="footer">
          <oj-button id="okButton" onojAction={close}>
            OK
          </oj-button>
        </div>
      </oj-dialog>
    </div>
  }
  