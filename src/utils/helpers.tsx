import { saveAs } from "file-saver";
import * as XLSX from "xlsx";

export const exportToExcel = async (cb: () => void) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileName = "data.xlsx";

  fetch("https://form-5m0m.onrender.com/api/v1/users")
    .then((response) => response.json())
    .then((data) => {
      const newUser = data.data.map((e: any) => {
        return {
          "Staff Id": e.id,
          Sex: e.sex,
          "Phone Number": e.phoneNumber,
          "PEN Number": e.penNumber,
          LGA: e.LGA,
          PFA: e.pfa,
        };
      });

      const ws = XLSX.utils.json_to_sheet(newUser);
      const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
      const excelBuffer = XLSX.write(wb, {
        bookType: "xlsx",
        type: "array",
      });

      const excelBlob = new Blob([excelBuffer], { type: fileType });
      saveAs(excelBlob, fileName);
      cb();
    })
    .catch((error) => {
      console.log(error);
      cb();
    });
};
