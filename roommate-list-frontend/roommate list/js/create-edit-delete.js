// import {roommate} from './roommate'
export function addListeners(){
	let newBox=document.querySelector('#new.item')
	let div = document.getElementById('background')
	let btn_close = document.getElementById('close-button')
	let form_create = document.querySelector('form.create')
	//let form_edit = document.querySelector('form.edit')

	form_create.addEventListener('submit',create)
	//form_edit.addEventListener('submit',edit)

	//if we have an array, loop through the array to add edit and del event listener to each roommate
	// demo for edit below

	// for(let roommate of roommates){
	// 	roommate.onclick=function displayForm(){
	// 		TODO: get the clicked roommate's data and display on the form
	// 		form.innerHTML=``//fill in
	// 		div.style.display = "block";//popup
	// 	}
	//  
	// }

	newBox.onclick=function show() {
		div.style.display = "block";
	}
	btn_close.onclick = function close() {
		div.style.display = "none";
	}
	function create(e){
		// let birthday = document.querySelector('form #birthday').value
		// TODO:create roommate element and save to backend
		e.preventDefault()//prevent page refreshing
		let formdata=new FormData(form_create);
		let data={}
		console.log(formdata.entries())
		for(let pair of formdata.entries())
			data[pair[0]]=pair[1]
		let roommate=document.createElement('room-mate')
		roommate.data=data
		// TODO:stringify and store to backend
		// below is directly inserting to DOM for showing how it works. 
		// Maybe we want all the to be in an array and display the array
		document.querySelector('.row').insertBefore(roommate,document.querySelector('#new'))
	}
	function edit(e){
		//TODO: read updated data from form submission
		// e.preventDefault()
		// let formdata=new FormData(form);
		//TODO: store updated data to backend
	}
	function del(e){

	}
}
 