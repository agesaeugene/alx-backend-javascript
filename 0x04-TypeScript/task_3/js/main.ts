/// <reference path="crud.d.ts" />
import * as CRUD from "./crud";
import { RowID, RowElement, MiString } from "./interface";

const row: RowElement = { firstName: "Gillaume", lastName: "Salva" };
// create row with the data
const newRowID: RowID = CRUD.insertRow(row); // in newRowID store the random id returned by the JS function insertRow
const updateRow: RowElement = { age: 23, ...row };
// in a constant save data to update the id of newRowID with its new data
CRUD.updateRow(newRowID, updateRow);
CRUD.deleteRow(newRowID);

