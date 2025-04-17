import {h} from "preact";
import { useEffect, useState } from "preact/hooks";

export const FilePreview = ({file, thumbNail}: {file: File, thumbNail: boolean}) => {
    const [filePreview, setFilePreview] = useState<string>("");
    const [fileType, setFileType] = useState<string>("");

    useEffect(() => {
        if (!file) return;

        const type = file.type;
        if (type.startsWith('image/') || type === 'application/pdf') {
            setFilePreview(URL.createObjectURL(file));
            setFileType(type);
        } else {
            alert('Unsupported file type. Please upload an image or PDF file.');
            setFilePreview("");
            setFileType("");
        }

        return () => {
            handleFileRemove();
        }
    }, [file]);

    const handleFileRemove = () => {
        if (filePreview) {
            URL.revokeObjectURL(filePreview);
            setFilePreview("");
            setFileType("");
        }
    };

    const renderPreview = () => (
        <div class="preview" style={{display: "flex", height: "100%", justifyContent: "center"}}>{
            fileType.startsWith("image/") ? (
                <img
                    src={filePreview}
                    alt="Uploaded preview"
                    style={{
                        //maxWidth: '100%',
                        maxHeight: thumbNail ? "250px": "500px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                    }}
                />
            ) : (
                <embed
                    src={filePreview}
                    type="application/pdf"
                    width="100%"
                    height="100%"
                    style={{ border: "1px solid #ccc", borderRadius: "0.25rem" }}
                />
            )
        }</div>
    )

    return (
        <div class="image-preview" style={{height: "100%"}}>
            {renderPreview()}
        </div>
    )

}
