var newTable = document.createElement("table");
newTable.style.borderCollapse = "collapse";
newTable.appendChild(document.createElement("thread"));
newTable = newTable.firstElementChild;
newTable.appendChild(document.createElement("tr"));
newTable = newTable.firstElementChild;
for (var i = 1; i < 5; i++)
{
  var newItem = document.createElement("th");
  newItem.textContent = "Header " + i;
  newItem.style.textAlign = "left";
  newItem.style.padding = "3px", "8px";
  newItem.style.borderStyle = "solid";
  newItem.style.borderWidth = "1px";
  newTable.appendChild(newItem);
}

newTable = newTable.parentNode;
newTable.appendChild(document.createElement("tbody"));
newTable = newTable.lastElementChild;

for(var x = 1; x < 4; x++)
{
  newTable.appendChild(document.createElement("tr"));
  newTable = newTable.lastElementChild;
  for(var y = 1; y < 5; y++)
  {
    var newItem = document.createElement("td");
    newItem.textContent = x + ", " + y;
    newItem.style.textAlign = "center";
    newItem.style.padding = "3px", "8px";
    newItem.style.borderStyle = "solid";
    newItem.style.borderWidth = "1px";
    newTable.appendChild(newItem);
  }
  newTable = newTable.parentNode;
}

newTable = newTable.parentNode;
div1 = document.createElement("div");
document.body.appendChild(div1);
var current = document.body.lastElementChild;
current.appendChild(newTable);

var selected = newTable.lastElementChild;
selected = selected.firstElementChild;
selected = selected.firstElementChild;
var x = 1;
var y = 1;

function selectCell(x, y) 
{
    selected.style.borderWidth = "1px";
    selected = selected.parentNode;
    selected = selected.parentNode;
    selected = selected.children[y-1];
    selected = selected.children[x-1];
    selected.style.borderWidth = "4px";
}

selectCell(x, y);

var upButton = document.createElement("button");
upButton.textContent = "Up";
var leftButton = document.createElement("button");
leftButton.textContent = "Left";
var rightButton = document.createElement("button");
rightButton.textContent = "Right";
var downButton = document.createElement("button");
downButton.textContent = "Down";
var markButton = document.createElement("button");
markButton.textContent = "Mark Cell";

var div2 = document.createElement("div");
document.body.appendChild(div2);
current = document.body.lastElementChild;
current.appendChild(upButton);
current.appendChild(leftButton);
current.appendChild(rightButton);
current.appendChild(downButton);
current.appendChild(markButton);

function moveUp()
{
   if (y > 1) {
       y--;
       selectCell(x, y);
   }
}

function moveLeft()
{
    if(x > 1) {
       x--;
       selectCell(x, y);
    }
}

function moveRight()
{
    if(x < 4) {
       x++;
       selectCell(x, y);
    }
}

function moveDown()
{
    if(y < 3) {
       y++;
       selectCell(x, y);
    }
}

function mark()
{
    selected.style.backgroundColor = "yellow";
}

current = current.children[0];
current.addEventListener("click", moveUp);
current = current.nextElementSibling;
current.addEventListener("click", moveLeft);
current = current.nextElementSibling;
current.addEventListener("click", moveRight);
current = current.nextElementSibling;
current.addEventListener("click", moveDown);
current = current.nextElementSibling;
current.addEventListener("click", mark);