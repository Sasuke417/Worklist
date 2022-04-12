let selectedCard = "card1";
let radioValue = "add";
let i=1;

function selectCard(card) {
  // code goes here to select a card
  selectedCard = card;
  let cardTitle=document.getElementById("cardTitle");
  if(selectedCard==="card1")cardTitle.value="Home";
  else if(selectedCard==="card2")cardTitle.value="Shopping";
  else if(selectedCard==="card3")cardTitle.value="Office";
  i=1;
  //console.log(card);
}

function addWork() {
  // code goes here for add work mode
  //console.log(selectedCard)
  

  let card = document.getElementById(`${selectedCard}list`);
  let input = document.getElementById("work").value;
  let li = document.createElement("li");
  let text = document.createTextNode(input);
  document.getElementById("work").value = "";
  if (input !== "") {
    let actualIndex=i++;
    let deleteButton = document.createElement('button');
   // deleteButton.style.display="none";
    deleteButton.id=`deleteBtn${String(actualIndex)}`
    deleteButton.value=String(`${selectedCard}li${actualIndex}`)
    deleteButton.addEventListener("click",deleteWork)
    

    li.id=`${selectedCard}li${actualIndex}`
    li.appendChild(deleteButton)
    li.appendChild(text);
    card.appendChild(li);
  }
}

function deleteWork() {
  // code goes here to delete a work in a card
  //console.log(this.value)
  document.getElementById(this.value).remove();
}

function update() {
  // code goes here to update card title
  let heading=document.getElementById(`${selectedCard}heading`);
  //console.log(heading)
  let input=document.getElementById("cardTitle").value;
  let text = document.createTextNode(input);
  if (input !== "") {
    //heading.value="Home";
    heading.innerHTML="";
    heading.appendChild(text);
    document.getElementById("cardTitle").value = "";
    document.getElementById("add").style.display="block";
    document.getElementById("edit").style.display="none"
  }
}

function clearWorkList() {
  //code goes here to clear workList
  
  document.getElementById('card1list').remove();
  document.getElementById('card2list').remove();
  document.getElementById('card3list').remove();
}

function changeMode() {
  // code goes here switch between add work, update card title and delete work
  radioValue = document.querySelector('input[name="mode"]:checked').value;
  // console.log("Radio Value:",radioValue)
  if(radioValue==='edit'){
    document.getElementById("add").style.display="none";
    document.getElementById("edit").style.display="block"
  }else if(radioValue==='add'){
    document.getElementById("add").style.display="block";
    document.getElementById("edit").style.display="none"
  }else if(radioValue==='delete'){
    document.getElementById("add").style.display="none";
    document.getElementById("edit").style.display="none";
    let lis=document.getElementsByClassName("deleteli")
    for(let i=0;i<lis.length;i++){
      lis[i].style="inline"
    }
  }
}

function deleteMode() {
  // code goes here for delete Mode
}
