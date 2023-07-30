import { Button } from "antd";
import React, { useState } from "react";
import { exportToExcel } from "../utils/helpers";
import { Loading } from "react-loading-dot";

const FileDownload: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  if (loading) {
    return <Loading background="rgba(24, 189, 91, 1)" />;
  }

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Button
        color="success"
        onClick={() => {
          setLoading((prev) => !prev);
          exportToExcel(() => setLoading((prev) => !prev));
        }}
      >
        Download CSV
      </Button>
    </div>
  );
};

export default FileDownload;
