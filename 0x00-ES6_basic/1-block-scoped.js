export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  /* eslint-disabled no-unused-vars in the function */
 if (trueOrFalse) {
    let task = true;
    let task2 = false;
  }

  return [task, task2];
}
