class Entree {
    constructor(tag, text) {
      this.entreeTag = tag;
      this.entreeTextURL = text;
  
      this.element = null;
    }
  }
  
  const entreeSet = new Set();
  
  function addNewEntree(tag, text) {
    const entree = new Entree(tag, text);
  
    entreeSet.add(entree);
  
    return entree;
  }
  
  function createElement(entree) {
    const template = document.querySelector("#entree-template");
    const clone = template.content.cloneNode(true);
  
    entree.element = clone.querySelector(".entree");
  
    const entreeListElement = document.querySelector("#entree-list");
    entreeListElement.prepend(entree.element);
  
    updateElement(entree);
  }
  
  function updateElement(entree) {
    const entreeTagElement = entree.element.querySelector(".nentree-tag");
    const entreeTextElement = entree.element.querySelector(".entree-text");
  
    entreeTagElement.innerText = entree.entreeTag;
    entreeTextElement.innerText = entree.entreeText;
  }
  
  function submitEntree() {
    const entreeEditorTag = document.querySelector("#editor-tag");
    const editorTagText = entreeEditorTag.value;
  
    const entreeEditorBody = document.querySelector("#editor-body");
    const editorBodyText = entreeEditorBody.value;
  
    const entree = addNewEntree(editorTagText, editorBodyText);
    createElement(entree);
  
    saveToLocalStorage();
  }
  
  function saveToLocalStorage() {
    const entreeArray = Array.from(entreeSet);
    console.log(entreeArray);
  
    const entreeArrayString = JSON.stringify(entreeArray);
    console.log(entreeArrayString);
  
    localStorage.setItem("storedEntrees", entreeArrayString);
  }
  
  function retrieveFromLocalStorage() {
    const entreeArrayString = localStorage.getItem("storedEntrees");
    const entreeArray = JSON.parse(entreeArrayString);
    for (const entreeData of entreeArray) {
      const entree = addNewEntree(entreeData.noteTitle, entreeData.noteBody);
      createElement(entree);
    }
  }
  
  if (localStorage.getItem("storedEntrees") != null) {
    retrieveFromLocalStorage();
  }
  
  function showDiv() {
    document.getElementById('confirmation').style.display = "block";
    document.getElementById('note-editor').style.display="none";
 }