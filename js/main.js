let input = document.querySelector(".input")
let add = document.querySelector(".add")
let taskContainer = document.querySelector(".repos")

add.onclick = function()
{
  if(input.value === "")
  {
    taskContainer.innerHTML = "Please Insert Github UserName"
  }
  else
  {
    addrepos();
  }
}

function addrepos() 
{
  fetch(`https://api.github.com/users/${input.value}/repos`)
  .then((result) => 
  {
    let data = result.json();
    return data;
    })
    .then((data)=>{
      taskContainer.innerHTML = "";

      data.forEach( repo => {
        let repos = document.createElement("div")
        let reponame = document.createTextNode(repo.name)
        repos.appendChild(reponame)
        repos.className = "repositres"
        taskContainer.appendChild(repos)

        let link = document.createElement("a")
        let linkText = document.createTextNode("Visit")
        link.appendChild(linkText)
        link.setAttribute("target", "_blank")
        link.href = `https://github.com/${input.value}/${repo.name}`
        repos.appendChild(link)
      });
    })
}
