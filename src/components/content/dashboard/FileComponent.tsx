import { h } from "preact"

import { FileStatus } from "./FileStatus";

export const FileComponent = ({ file, batch }: { file: any, batch: any }) => {
    return (
        <div style={{
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '10px',
            background: file.status === 'completed' ? 'rgba(0, 138, 0, 0.2)' : 'transparent'
        }}>
            <p><b>File name:</b> {file.name}</p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <p style={{ marginBottom: '0px', marginRight: '10px' }}><b>Status:</b></p>
                {/* @ts-ignore */}
                <FileStatus id={batch.id} status={file.status} json={file.json} file={file.file} />
            </div>
        </div>
    )

}
