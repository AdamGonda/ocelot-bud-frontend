import "ojs/ojdialog";
import { ojDialog } from "ojs/ojdialog";
import "ojs/ojbutton";
import { ojButton } from "ojs/ojbutton";
import ExtractedData from "./ExtractedData";
import { useRef } from "preact/hooks";
import { Status } from ".";

export function FileStatus({ status, json }: { status: Status, json: any}) {
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
        <div slot="body">
          <p id="desc">
            <ExtractedData extractedData={json} />
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
  