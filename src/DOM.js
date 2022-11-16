import User from './user';
import Project from './project'
import Item from './item';
import { format } from 'date-fns';


let user = new User();
if (localStorage.user) {
  user.project_list = JSON.parse(localStorage.user).project_list;
} else {
  user.appendProject(new Project('Default','Teste'));
}

console.log(user);


export default function component () {
  let content = document.createElement('div');
  content.id = 'content';
  document.body.appendChild(_navBar());
  document.body.appendChild(content);
  content.appendChild(_sideBar());
}

// Cria navbar
function _navBar(){
  let nav = document.createElement('nav');
  let title = document.createElement('h1');
  title.textContent = "ToDo List";
  nav.appendChild(title);
  return nav;
}

// Cria sidebar
function _sideBar(){
  let div = document.createElement('div');
  div.className = 'sidebar';
  div.appendChild(_newProject());
  div.appendChild(_showProjects());
  return div
}

// Botao de adição de novo projeto
function _newProject(){
  let button = document.createElement('input');
  button.className = 'new-project'
  button.type = 'button';
  button.value = "+ NOVO PROJETO";
  button.addEventListener('click', () => {
      let content = document.getElementById('content');
      content.appendChild(_showProjectForm());
  })
  return button;
}

// Cria e mostra div de criação de novo projeto
function _showProjectForm(){
  if (document.getElementsByClassName('project-form').length > 0) {
    return
  };
  let div  = document.createElement('div');
  div.className = 'project-form'
  let title = document.createElement('h3');
  title.textContent = 'CRIAR PROJETO';

  let closeButton = document.createElement('p');
  closeButton.textContent = 'X';
  closeButton.className = 'close-button' 

  closeButton.addEventListener('click', (e) => {
    _closeForm(e);
  })

  const projectNameLabel = document.createElement('label');
  projectNameLabel.innerText = 'Nome do projeto';
  const projectName = document.createElement('input');
  projectName.type = 'text';
  projectName.id = 'projectName';
  projectName.name = 'projectName';
  projectNameLabel.appendChild(projectName);

  const projectDescriptionLabel = document.createElement('label');
  projectDescriptionLabel.innerText = 'Descrição';
  const projectDescription = document.createElement('textarea');
  
  projectDescription.rows = 4;
  projectDescription.cols = 50;
  projectDescription.id = 'projectDescription';
  projectDescription.name = 'projectDescription';
  projectDescriptionLabel.appendChild(projectDescription);

  const inputButton = document.createElement('input');
  inputButton.type = 'button';
  inputButton.value = 'SALVAR';

  inputButton.addEventListener('click', (e)=> {
    let projectName = document.getElementById('projectName').value;
    if (projectName.length == 0 ){
      let content = document.getElementById('content');
      return content.appendChild(_errorModal('O projeto precisa ter um nome!'));
    }
    let projectDescription = document.getElementById('projectDescription').value;
    user.appendProject(new Project(projectName, projectDescription));
    alert('Projeto ' + projectName + ' criado!')
    _closeErrorModal();
    _closeForm(e);
    localStorage.user = JSON.stringify(user);
    let sidebar = document.getElementsByClassName('sidebar')[0];
    let list = document.getElementsByClassName('projects')[0];
    list.remove();
    sidebar.appendChild(_showProjects());
  });

  div.appendChild(title);
  div.appendChild(closeButton);
  div.appendChild(projectNameLabel);
  div.appendChild(projectDescriptionLabel);
  div.appendChild(inputButton)
  return div;
}

function _closeForm(e){
  let node = e.target.parentNode;
  return node.remove();
}


// Renderiza projeto na tela, contnedo o nome, descrição e os itens
function _renderProject(project){
  if (document.getElementsByClassName('main').length > 0) {
    let div = document.getElementsByClassName('main')[0];
    div.remove();
  };

  let div = document.createElement('div');
  div.className = 'main';
  let content = document.getElementById('content');
  let header = document.createElement('h3');
  let title = document.createElement('span');
  title.id = "actual-project"
  title.textContent = project.name;
  header.textContent = 'Projeto: '
  header.appendChild(title);
  let description = document.createElement('p');
  description.textContent = 'Descrição: '+ project.description;
  div.appendChild(_newItem());
  div.appendChild(header);
  div.appendChild(description);
  return content.appendChild(div)
}


// Cria lista de projetos do usuario em uma div
function _showProjects(){
  let div = document.createElement('div');
  div.className = 'projects'
  let ul = document.createElement('ul');
  ul.className = 'project-list'
  for(let i = 0 ; i < user.project_list.length; i++) {
    let projectName = document.createElement('li');
    projectName.textContent = user.project_list[i].name;
    projectName.addEventListener('click', () => {
      _renderProject(user.project_list[i]);
      _renderItems(projectName.textContent);
    })
    ul.appendChild(projectName);
  }
  div.appendChild(ul);
  return div;
  // ATUALIZAR RENDERIZACAO DOS ITENS AQUI!
}


// Botão para criar novo item
function _newItem(){
  let button = document.createElement('input');
  button.className = 'new-item'
  button.type = 'button';
  button.value = "+ NOVO ITEM";
  button.addEventListener('click', () => {
    let content = document.getElementById('content');
    content.appendChild(_showItemForm());
  })
  return button;
}


// Cria e mmostra div para criação de novo item
function _showItemForm(){
  if (document.getElementsByClassName('item-form').length > 0) {
    return
  };
  const element = document.createElement('div');
  element.classList.add('item-form');

  const h3 = document.createElement('h3');
  h3.textContent = 'CRIAR ITEM'

  let closeButton = document.createElement('p');
  closeButton.textContent = 'X';
  closeButton.className = 'close-button' 

  closeButton.addEventListener('click', (e) => {
    _closeForm(e);
  })

  const titleLabel = document.createElement('label');
  titleLabel.innerText = 'Nome';
  const title = document.createElement('input');
  title.type = 'text';
  title.id = 'title';
  title.name = 'title';
  titleLabel.appendChild(title);

  const descriptionLabel = document.createElement('label');
  descriptionLabel.innerText = 'Descrição';
  const description = document.createElement('textarea');
  description.rows = 2;
  description.columns = 30;
  description.id = 'description';
  description.name = 'description';
  descriptionLabel.appendChild(description);

  
  const dueDateLabel = document.createElement('label');
  dueDateLabel.innerText = 'Data alvo';
  const dueDate = document.createElement('input');
  dueDate.type = 'date';
  dueDate.id = 'dueDate';
  dueDate.name = 'dueDate';
  dueDateLabel.appendChild(dueDate);

  const priorityLabel = document.createElement('label');
  priorityLabel.innerText = 'Prioridade'
  const priority = document.createElement('select');
  priority.add(_priorityOptions().low);
  priority.add(_priorityOptions().medium);
  priority.add(_priorityOptions().high);
  priorityLabel.appendChild(priority);

  const inputButton =  document.createElement('input');
  inputButton.type = 'button';
  inputButton.id = 'createTodo';
  inputButton.value = 'SALVAR';
  

  inputButton.addEventListener('click', (e)=> {
    if (title.value.length == 0 || dueDate.value.length == 0) {
      let content = document.getElementById('content');
      return content.appendChild(_errorModal('A tarefa precisa ter no mínimo um nome e uma data!'));
    }
    let projectName = document.getElementById('actual-project').textContent;
    let obj = user.searchProject(projectName);
    obj.items.push(new Item(title.value, description.value, dueDate.value, priority.value));
    alert('Item criado no projeto ' + projectName)

    _closeErrorModal();
    _closeForm(e);
    // ATUALIZAR RENDERIZACAO DOS ITENS AQUI!
    _renderItems(projectName)
    localStorage.user = JSON.stringify(user);
    });


  element.appendChild(h3);
  element.appendChild(closeButton);
  element.appendChild(titleLabel);
  element.appendChild(descriptionLabel);
  element.appendChild(dueDateLabel);
  element.appendChild(priorityLabel);
  element.appendChild(inputButton);
  return element;
}


function _priorityOptions(){
  let low = document.createElement('option')
  low.value = "low";
  low.text  = "Baixa";

  let medium = document.createElement('option')
  medium.value = "medium";
  medium.text  = "Média";

  let high = document.createElement('option')
  high.value = "high";
  high.text  = "Alta";

  return {low, medium, high}
}


function _renderItems(projectName){
  if (document.getElementsByClassName('items-table').length > 0) {
    let div = document.getElementsByClassName('items-table')[0];
    div.remove();
  };
  let project = user.searchProject(projectName);
  let main = document.getElementsByClassName('main')[0];
  main.appendChild(_createTable());
  let table = document.getElementsByClassName('items-table')[0];

  project.items.forEach( (e,i) => {
    let tr = document.createElement('tr');
    tr.dataset.index = i;
    let td1 = document.createElement('td');
    td1.textContent = e.title;
    let td2 = document.createElement('td');
    td2.textContent = e.description;
    let td3 = document.createElement('td');
    
    let year = e.dueDate.slice(0,4);
    let month = e.dueDate.slice(5,7);
    let day = e.dueDate.slice(8,10);

    let dateFormat = format(new Date(year, month-1, day), 'dd/MM/yyyy')
    td3.textContent = dateFormat;

    let td4 = document.createElement('td');
    td4.className = 'flex';
    let signaling = document.createElement('div')

    switch(e.priority){
      case 'low':
        signaling.className = 'low';
        break;
      case 'medium':
        signaling.className = 'medium'
        break;  
      case 'high':
        signaling.className = 'high';
        break
    }
    td4.appendChild(signaling);
    if (e.finished == true) {
      td1.classList.add('finished');
      td2.classList.add('finished');
      td3.classList.add('finished');
      td4.classList.add('finished');
    } else {
      td1.classList.remove('finished');
      td2.classList.remove('finished');
      td3.classList.remove('finished');
      td4.classList.remove('finished');
    }

    
    let td5 = document.createElement('td');

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = e.finished
    e.finished == true ? checkbox.checked = true : checkbox.checked = false;
    checkbox.addEventListener('change', () => {
      e.finished == false ? e.finished = true : e.finished = false;
      return _renderItems(projectName);
    })
    td5.appendChild(checkbox);
    let td6 = document.createElement('td')

    let deleteButton = document.createElement('input');
    deleteButton.type = 'button';
    deleteButton.value = 'EXCLUIR'
    deleteButton.addEventListener('click', () => {  
      project.items.splice(tr.dataset.index,1);
      localStorage.user = JSON.stringify(user);
      _renderItems(projectName);
    })
    td6.appendChild(deleteButton);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    
    table.append(tr);
  });
}

function _createTable(){
  let table = document.createElement('table');
  table.className = 'items-table';
  let tr = document.createElement('tr');
  let th1 = document.createElement('th');
  th1.textContent = 'Tarefa'
  let th2 = document.createElement('th')
  th2.textContent = 'Descrição'
  let th3 = document.createElement('th')
  th3.textContent = 'Data limite';
  let th4 = document.createElement('th')
  th4.textContent = 'Prioridade'
  let th5 = document.createElement('th')
  th5.textContent = 'Status'
  let th6 = document.createElement('th')
  th6.textContent = ' '
  tr.appendChild(th1);
  tr.appendChild(th2)
  tr.appendChild(th3);
  tr.appendChild(th4);
  tr.appendChild(th5);
  tr.appendChild(th6);
  table.appendChild(tr);
  return table
}

function _errorModal(message){
  if (document.getElementsByClassName('error-modal').length > 0) {
    return
  };
  let div = document.createElement('div')
  let closeButton = document.createElement('p');
  closeButton.textContent = 'X';
  closeButton.className = 'close-button' 
  closeButton.addEventListener('click', (e) => {
    _closeForm(e);
  })
  div.className = 'error-modal';
  let text = document.createElement('p')
  text.className = 'error-text';
  text.textContent = message;
  div.appendChild(text);
  div.appendChild(closeButton);
  return div
} 

function _closeErrorModal(){
  let errorModal = document.getElementsByClassName('error-modal')[0];
  if (errorModal) {
    return errorModal.remove();
  }
}

function _cacheInfo(){
  localStorage.user = JSON.stringify(user);

  
}