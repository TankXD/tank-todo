const toDoForm = document.querySelector(".todo-form");

const toDoInput = document.querySelector(".todo-form input");

const toDoList = document.querySelector(".todo-list");

const TODOS_KEY = "toDos";

let toDos = [];

function saveToDo(newToDo) {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const parentList = event.currentTarget.parentElement;

  parentList.remove();
  toDos = toDos.filter((item) => item.id !== parseInt(parentList.id));
  saveToDo();
}

function checkToDo(event) {
  const checkList = event.currentTarget;
  checkList.classList.toggle("todo-check");
}

function addToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerHTML = newToDo.text;
  const checkBtn = document.createElement("button");
  checkBtn.innerHTML = "🤍";
  const deleteBtn = document.createElement("button");
  const deleteIcon = document.createElement("i");
  deleteIcon.className = "fa-solid fa-trash-can";
  deleteBtn.appendChild(deleteIcon);

  li.appendChild(span);
  li.prepend(checkBtn);
  li.appendChild(deleteBtn);
  toDoList.appendChild(li);

  checkBtn.addEventListener("click", checkToDo);
  deleteBtn.addEventListener("click", deleteToDo);
}

function submitToDo(event) {
  event.preventDefault();
  const newToDo = {
    id: Date.now(),
    text: toDoInput.value,
  };
  toDos.push(newToDo);
  toDoInput.value = "";
  addToDo(newToDo);
  saveToDo(newToDo);
}

toDoForm.addEventListener("submit", submitToDo);

const localToDos = JSON.parse(localStorage.getItem(TODOS_KEY));

if (localToDos !== null) {
  localToDos.forEach(addToDo);
  toDos = localToDos;
  //맨위에 toDos를 계속 빈 배열로 생성하기때문에, 새로 고침 후
  //새 toDods를 추가하면 빈 toDos에 추가하는게 되기때문에
  //이전 toDos가 삭제되는 것.
  //그것을 방지하기위해 새로고침 후 로컬스토리지에 toDos값이 존재하면
  //toDos에 로컬스토리지에있는 이전 ToDos 값을 다시 넣어주는 작업
}
