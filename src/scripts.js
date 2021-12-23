loverCaseBtn = document.getElementById("lower-case");
upperCaseBtn = document.getElementById("upper-case");
properCaseBtn = document.getElementById("proper-case");
sentenceCaseBtn = document.getElementById("sentence-case");
textarea = document.getElementById("input-area");
saveBtn = document.getElementById("save-text-file");

loverCaseBtn.onclick = () => {
  return textarea.value = textarea.value.toLowerCase();
}

upperCaseBtn.onclick = () => {
  return textarea.value = textarea.value.toUpperCase();
}

properCaseBtn.onclick = () => {
  textarea.value = textarea.value.replace(/\w\S*/g, (text) => text.charAt(0).toUpperCase() + text.substr(1).toLowerCase());
  return textarea.value;
}

sentenceCaseBtn.onclick =() => {
  const sentenceArray = textarea.value.split(". ");
  let changedArray = [];

  sentenceArray.forEach((element) => {
    changedArray.push(element.charAt(0).toUpperCase() + element.substr(1).toLowerCase())
    return changedArray
  });

  textarea.value = changedArray.join(". ");
}

const saveData = (data) => {
  const date = new Date();
  let element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
  element.setAttribute('download', `text.txt`);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

saveBtn.onclick = () => {
  saveData(textarea.value);
}