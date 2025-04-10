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
  const [selectedFiles, setSelectedFiles] = useState<Array<File>>(); // State for storing file details
  const [uploading, setUploading] = useState<boolean>(false);

  const selectListener = (event: FilePickerElement.ojSelect) => {
    const files = event.detail.files;
    setSelectedFiles(Array.from(files));
  };

  const invalidSelectListener = (event: any) => {
    const message = event.detail.messages;
    setSelectedFiles([]);
    alert(
      `${
        message[0].severity.charAt(0).toUpperCase() +
        message[0].severity.slice(1)
      } \n ${message[0].summary}`
    );
  };

  const handleOjAction = (event: ButtonElement.ojAction) => {
    if (selectedFiles && selectedFiles.length > 0) {
      setUploading(true);
      const formData = new FormData();
      selectedFiles.forEach((file, index) => {
        formData.append(`file${index}`, file);
      });

      fetch("http://localhost:3000/api/upload", {
        method: "POST",
        body: formData,
      }).then(async (response) => {

        const json = await response.json();

        setBatch(prev => {
          return [...prev, {
            id: json.id,
            status: json.status,
          }]
        })

        setUploading(false);
        setSelectedFiles([]);

        alert("File uploaded successfully");
      });
    }
  };

  return (
    <>
      <oj-file-picker
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
                <br />
                {`Size: ${file.size} bytes`}
              </li>
            ))}
          </ul>
        )}
      </div>
      <oj-button
        label={uploading ? "Loading..." : "Upload files"}
        chroming="callToAction"
        class="oj-button-full-width"
        onojAction={handleOjAction}></oj-button>
    </>
  );
};

export default FilePicker;
