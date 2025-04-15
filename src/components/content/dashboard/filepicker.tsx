import { ComponentProps } from "preact";
import { useState, useCallback } from "preact/hooks";
import "ojs/ojfilepicker";
import { FilePickerElement } from "ojs/ojfilepicker";
import { ButtonElement } from "ojs/ojbutton";
import { Batch } from ".";
type FilePickerProps = ComponentProps<"oj-file-picker">;

type modes = FilePickerProps["selectionMode"];

const FilePicker = ({ setBatch }: { setBatch: React.Dispatch<React.SetStateAction<Batch[]>> }) => {
  const [accept, setAccept] = useState<string[]>(["image/*", "application/pdf"]);
  const [selectionMode, setSelectionMode] = useState<modes>("multiple");
  const [disabled, setDisabled] = useState<boolean>(false);
  const [selectedFiles, setSelectedFiles] = useState<Array<File>>([]); // State for storing file details
  const [uploading, setUploading] = useState<boolean>(false);

  const selectListener = (event: FilePickerElement.ojSelect) => {
    const files = event.detail.files;
    setSelectedFiles(Array.from(files));
  };

  const invalidSelectListener = (event: any) => {
    const message = event.detail.messages;
    setSelectedFiles([]);
    alert(
      `${message[0].severity.charAt(0).toUpperCase() +
      message[0].severity.slice(1)
      } \n ${message[0].summary}`
    );
  };

  const handleUpload = (event: ButtonElement.ojAction) => {
    if (selectedFiles && selectedFiles.length > 0) {
      setUploading(true);
      const formData = new FormData();
      selectedFiles.forEach((file, index) => {
        formData.append(`file${index}`, file);
      });

      setBatch((prev: any) => {
        console.log('prev', prev)
        return [...prev, {
          id: Math.floor(Math.random() * 1000000),
          status: 'pending',
          files: selectedFiles.map(file => {
            return {
              name: file.name,
              status: 'pending',
            }
          }),
        }]
      })

      selectedFiles.forEach(async (file) => {
        await fetch(`https://objectstorage.eu-frankfurt-1.oraclecloud.com/p/-LeOAiq_Pl17ceVApHVBQLwsl3usmsnKFXVI2avJdbl84bsQK9Ipfark34Zu2vDb/n/ax2w5fadcgcx/b/bucket-20250410-1258_in/o/${file.name}`, {
          method: "PUT",
          headers: {
            'Content-Type': file.type,
          },
          body: file,
        })
      })

      setUploading(false)
      setSelectedFiles([]);
    }
  };

  return (
    <>
      <oj-file-picker
        style={{ maxWidth: '100%' }}
        accept={accept}
        selectionMode={selectionMode}
        onojSelect={selectListener}
        disabled={disabled}
        onojInvalidSelect={invalidSelectListener}></oj-file-picker>
      <div>
        {/* Display selected file details */}
        {selectedFiles && selectedFiles.length > 0 && (
          <ul>
            {selectedFiles.map((file, index) => (
              <li key={index}>
                {`Name: ${file.name} (${file.type})`}
              </li>
            ))}
          </ul>
        )}
      </div>
      <oj-button
        disabled={selectedFiles.length === 0}
        style={{ marginTop: '10px' }}
        label={uploading ? "Loading..." : "Upload files"}
        chroming="callToAction"
        class="oj-button-full-width"
        onojAction={handleUpload}></oj-button>
    </>
  );
};

export default FilePicker;
