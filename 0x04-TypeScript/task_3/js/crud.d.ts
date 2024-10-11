import { RowID, RowElement } from "./interface";
// https://www.typescriptlang.org/docs/handbook/declaration-files/by-example.html
declare function insertRow(row: RowElement): any;
declare function deleteRow(rowId: RowID): any;
declare function updateRow(rowId: RowID, row: RowElement): RowID;
