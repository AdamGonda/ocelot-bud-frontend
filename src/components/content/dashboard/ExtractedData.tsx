import { h } from "preact";

interface ProcessedPriorAuthForm {
    data: any;
    validation: any;
    input_filename: string;
    output_filename: string;
}

interface Props {
    extractedData: ProcessedPriorAuthForm;
}

const ExtractedData = ({extractedData}: Props) => {

    const renderKeyValuePairs = (data: any, depth = 0) => {
      return Object.entries(data).map(([key, value]) => {
        if (typeof value === 'object' && value !== null) {
          return (
            <li key={`${depth}_${key}`}>
              <strong>{key}:</strong>
              <ul>{renderKeyValuePairs(value, depth + 1)}</ul>
            </li>
          );
        } else {
          return (
            <li key={`${depth}_${key}`}>
              <strong>{key}:</strong> {String(value)}
            </li>
          );
        }
      });
    };
  
    return (
      <div>
        <h3>Extracted data:</h3>
        <ul>{renderKeyValuePairs(extractedData.data)}</ul>
        <hr />
        <h3>Validation errors:</h3>
        <ul>{renderKeyValuePairs(extractedData.validation)}</ul>
      </div>
    );
  };
  
  export default ExtractedData;
  