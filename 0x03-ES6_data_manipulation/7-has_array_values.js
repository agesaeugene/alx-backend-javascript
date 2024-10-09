/**
 * change quality of unique grocery items to 100.
 * @param (map<string, number> map - Map of the 
 * grocery name and its quantity
 */
export default function hasValuesFromArrays(set, array) {
	return array.every((value) => set.has(value));
}
