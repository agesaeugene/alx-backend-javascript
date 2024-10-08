/**
 * A buffer array is created with given possesions set to given values.
 * @param {Number} length - The buffers length.
 * @param (Number) position - Position to be changed
 * @param (Number) value - value to be stored in the position.
 * @return {DataView}
 */
export default function createInt8TypedArray(length, position, value) {
	if (position >= length) {
		throw new Error('Position outside range');
	}
	const buf = new DataView(new ArrayBuffer(length), 0, length);
	buf.setInt8(position, value);
	return buf;
}
