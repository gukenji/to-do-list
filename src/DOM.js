import User from './user';
import Project from './project'
import Item from './item';

let user = new User();
user.appendProject(new Project('Default','Teste'));

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
    let projectDescription = document.getElementById('projectDescription').value;
    user.appendProject(new Project(projectName, projectDescription));
    _closeForm(e);
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
    })
    ul.appendChild(projectName);
  }
  div.appendChild(ul);
  return div;
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


  inputButton.addEventListener('click', ()=> {
    let projectName = document.getElementById('actual-project').textContent;
    let teste = user.searchProject(projectName);
    console.log(teste);
    
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