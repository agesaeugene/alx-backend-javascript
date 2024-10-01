export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  /* eslint-disabled no-unused-vars in the function */
  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}
