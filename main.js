console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
    const node1 = document.getElementById(`node1`);
    node1.textContent = "I used the getElementById('node1') method to access this";


// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
    const node2 = document.getElementsByClassName(`node2`);
    node2[0].textContent = "I used the getElementByClassName('node2') method to access this";
    
// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */

    const h3 = document.getElementsByTagName(`h3`);
    for (let i = 0; i < h3.length; i++) {
        h3[i].textContent = "I used the getElementByTagName(h3) method to access all of these";
    }
    

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"

    const parentDiv = document.getElementById(`parent`)
    const newPara = document.createElement(`p`)
    newPara.textContent = "This node was created using the createElement() method";
// TODO: Append the created node to the parent node using the element.appendChild() method

   parentDiv.appendChild(newPara);

// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"

    const anchTag = document.createElement(`a`)
    anchTag.textContent = "I am a <a> tag";

// BONUS: Add a link href to the <a>
anchTag.title = `Google`;
anchTag.href = `https://www.google.com/`;

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method

    parentDiv.insertBefore(anchTag, newPara);

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"

    const exercise3Div = document.querySelector(`#exercise-container3`);
    const oldPara = document.querySelector(`#N1`);
    const newPara2 = document.createElement(`p`);
    newPara2.textContent = `new child node`;
    exercise3Div.replaceChild(newPara2, oldPara);

    console.log(`i swapped first node out`);


// TODO: Remove the "New Child Node"

setTimeout(()=> {newPara2.remove()
 console.log(`i removed the added node`)
}, 3000);

/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];


// TODO: Create an unordered list element

    const unordererdList = document.createElement(`ul`);

// TODO: Iterate over the array values, and create a list item element for each
    const liArray = [];
    for(let i = 0; i < list.length; i++) {
        let li = document.createElement(`li`);
        li.textContent = list[i];
        liArray.push(li);
    }

    console.log(liArray);

// TODO: Append the new list items to the unordered list element
    for (let i = 0; i < liArray.length; i++) {
        unordererdList.appendChild(liArray[i]);
    }

// TODO: Append the unordered list to the `div#container` under exercise 4 
    const exercise4Div = document.querySelector(`#container`);
    exercise4Div.appendChild(unordererdList);

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality

const  modalDiv = document.createElement(`div`);
modalDiv.id = `modal`;
const  modalCard = document.createElement(`div`);
modalCard.className = `modal-card`;
const removeModal = document.createElement(`button`);
removeModal.id = `removeModal`;
removeModal.textContent = "\327";
const modalPara = document.createElement(`p`);
modalPara.textContent = `I made a modal!`;

const exer5Div = document.querySelector(".exercise5");

exer5Div.appendChild(modalDiv);
modalDiv.appendChild(modalCard);
modalCard.appendChild(removeModal);
modalCard.appendChild(modalPara);



const modalButtonAppear = document.querySelector(`#btn`);
const removeModalAction = document.querySelector(`#removeModal`);
modalButtonAppear.addEventListener(`click`, show);
removeModalAction.addEventListener(`click`, hide);

function show(event) {
    document.getElementById(`modal`).style.display = `flex`;
}

function hide(event) {
    document.getElementById(`modal`).style.display= `none`;
}
