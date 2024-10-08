export default function getStudentByLocation(students, city) {
	if (Array.isArray(students)) {
		return students.filter((items) => items.location === city);
	}
	return [];
}
