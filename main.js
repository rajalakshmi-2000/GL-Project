
function showt(id0, id1, id2) {
	document.getElementById(id0).style.visibility = 'visible';

	document.getElementById(id0).style.display = 'block';

	document.getElementById(id1).style.visibility = 'visible';
	document.getElementById(id1).style.display = 'block';

	document.getElementById(id2).style.visibility = 'visible';
	document.getElementById(id2).style.display = 'block';
}
function newElement(id6, m) {
	//adding element
	let task_list = document.getElementsByClassName(`task-list`)[m]
	let input_value = document.getElementById(id6).value
	let data = `<div class="task pointer">${input_value}
                <i class="task-edit fas fa-pencil-alt pointer"></i>
                </div>`

	let card_form = document.getElementsByClassName(`add-card-form`)[m]

	let card_form_data = nodeToString(card_form)

	if (input_value === '') {
		alert("You must write something!");
	}
	else {
		//removing card form 
		card_form.remove()
		task_list.innerHTML += data
		//adding card form at end
		task_list.innerHTML += card_form_data
	}



	//node to string
	function nodeToString(node) {
		var tmpNode = document.createElement("div");
		tmpNode.appendChild(node.cloneNode(true));
		var str = tmpNode.innerHTML;
		tmpNode = node = null; // prevent memory leaks in IE
		return str;
	}
}
function hideTextArea(id3, id4, id5) {
	document.getElementById(id3).style.display = 'none';
	document.getElementById(id4).style.display = 'none';
	document.getElementById(id5).style.display = 'none';
}

function showl(id7) {
	document.getElementById(id7).style.visibility = 'visible';

	document.getElementById(id7).style.display = 'block';  
}
function hidelist(id8) {
	document.getElementById(id8).style.display = 'none';
}
let new_list_count = 0
function newlist1(id9) {
	//adding element
	let board = document.getElementsByClassName(`board`)[0]
	let input_value = document.getElementById(id9).value

	let data = `<div class="task-list-wrapper">
      	    <div class="task-list">
      	        <div class="task-list-title-container">
      	            <h3 class="task-list-title">${input_value}</h3>
      	            <span class="task-list-more pointer">...</span>
      	        </div>
      	        <div class="add-card-form">
      	            <form name="textform">
      	                <input id="addbutton" type=button name=type value='+ Add another card'
      	                    onclick="showt('newsub${new_list_count}','newcardbutton${new_list_count}','newicon${new_list_count}')">
      	            </form>
      	            <textarea id="newsub${new_list_count}" rows="3" placeholder="Enter a title for this card..."
      	                class="full-width-input" style="visibility:hidden;"></textarea>

      	            <div class="add-card-form-actions">
      	                <button id="newcardbutton${new_list_count}" class="btn btn-inline btn-primary add-card-button pointer"
      	                    type="button" onclick="newElement('newsub${new_list_count}','${new_list_count+5}')" style="visibility:hidden;">Add
      	                    Card</button>

      	                <i id="newicon${new_list_count}" class="fas fa-2x fa-times add-card-cancel pointer" style="visibility:hidden;"
      	                    onclick="hideTextArea('newsub${new_list_count}','newcardbutton${new_list_count}','newicon${new_list_count++}')" ;></i>
      	                <!--    <input type="button" id="name" onClick="clearTextArea();" value="Clear TextArea"/>-->
      	            </div>
      	            <!--<<textarea rows="3" placeholder="Enter a title for this card..." class="full-width-input"></textarea>
      	                    div class="add-card-form-actions">
      	                        <button class="btn btn-inline btn-primary add-card-button pointer">Add Card</button>
      	                        <i class="fas fa-2x fa-times add-card-cancel pointer"></i>
      	                    </div>-->
      	        </div>
      	    </div>
      	</div>`

	//node to string
	function nodeToString(node) {
		var tmpNode = document.createElement("div");
		tmpNode.appendChild(node.cloneNode(true));
		var str = tmpNode.innerHTML;
		tmpNode = node = null; // prevent memory leaks in IE
		return str;
	}

	let newlist_data = nodeToString(newlist)
	let addlist_data = nodeToString(addlist)

	//* inserting data
	if (input_value === '') {
		alert("You must write something!");
	}
	else {
		//removing task list wrapper(s)
		let newlist = document.getElementById(`newlist`)
		let addlist = document.getElementById(`addlist`)
		newlist.remove()
		addlist.remove()
		board.innerHTML += data
		board.innerHTML += newlist_data
		board.innerHTML += addlist_data
	}
}







