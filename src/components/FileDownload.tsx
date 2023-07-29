import { Button } from "antd";
import React from "react";
import { exportToExcel } from "../utils/helpers";

const FileDownload: React.FC = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Button color="success" onClick={() => exportToExcel()}>
        Download CSV
      </Button>
    </div>
  );
};

export default FileDownload;
