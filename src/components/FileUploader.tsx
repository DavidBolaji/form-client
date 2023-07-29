import React from "react";
import * as XLSX from "xlsx";

const FileUploader: React.FC = () => {
  const processFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      alert("Please select a file.");
      return;
    }

    const reader = new FileReader();

    reader.onload = (event) => {
      const data = event.target?.result as string;
      const workbook = XLSX.read(data, { type: "binary" });
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      const columnData: { value: string; label: string }[] = [];

      for (let rowIndex = 1; ; rowIndex++) {
        const cellAddress = "A" + rowIndex;
        const cell = worksheet[cellAddress];
        if (!cell || !cell.v) break;

        const rowValue = cell.v.toString();
        columnData.push({ value: rowValue, label: rowValue });
      }

      // Convert to JSON
      const jsonData = JSON.stringify(columnData);

      // Create a Blob with the JSON data
      const blob = new Blob([jsonData], { type: "application/json" });

      // Create a URL for the Blob
      const url = URL.createObjectURL(blob);

      // Create a link element and set the download attribute to specify the filename
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "id.json");

      // Append the link to the document and click it to trigger the download
      document.body.appendChild(link);
      link.click();

      // Remove the link from the document after the download
      document.body.removeChild(link);
    };

    reader.readAsBinaryString(file);
  };

  return (
    <div>
      <input type="file" onChange={processFile} />
    </div>
  );
};

export default FileUploader;
