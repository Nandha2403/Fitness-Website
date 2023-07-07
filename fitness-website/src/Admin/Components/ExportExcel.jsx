import { Button, Tooltip } from "@chakra-ui/react";
import * as FileSaver from "file-saver";
import XLSX from "sheetjs-style";

const ExportExcel = ({csvData,fileName})=>{
    const fileType = `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8`;
    const fileExtension = '.xlsx';

    const exportToCSV = (csvData, fileName) => {
        const ws = XLSX.utils.json_to_sheet(csvData);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], {type: fileType});
        FileSaver.saveAs(data, fileName + fileExtension);
    }
    

    return(
        <>
        <Tooltip title="Excel Export">
        <Button colorScheme="green" size={"sm"} variant="solid" onClick={(e)=>  exportToCSV(csvData,fileName)}>
        Export
        </Button>
        </Tooltip>
        </>
    )
}

export default ExportExcel;