export default function getStudentIdsSum(students) {
	if (Array.isArray(students)) {
		return students.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
	}
	return [];
}
