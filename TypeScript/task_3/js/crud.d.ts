import { RowID, RowElement } from "./interface"

export function insertRow(row: RowElement): RowID;
export function deleteRow(RowID: RowID): void;
export function updateRow(RowID: RowID, row: RowElement): RowID;
