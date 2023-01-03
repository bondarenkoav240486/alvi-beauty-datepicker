import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

const toolkitSlice = createSlice({
	name: "toolkit",
	initialState: {
		// visible: true,
		allNotes:  
			[
				{
					id: nanoid(8),
					date:'',
					notes:[],
					selectedDate:new Date().getDate() 
					+ '.' 
					+ new Date().getMonth()
					+ '.' 
					+ new Date().getFullYear(),
				},
			],
		dateNotes:[
   				// {id:'111', title:'dateNoteSTATE', body:''},
			],
		dateNote:{title:'',body:''},
		// save:true,
		modal:false,
		year:new Date().getFullYear(),
		month:new Date().getMonth(),
		dates:[],
	},
	reducers: {
		// setVisibleAction(state,action) {
		// 	state.visible =  action.payload
		// },
		setAllNotesAction(state,action) {
			state.allNotes = action.payload
		},
		setDateNotesAction(state,action) {
			state.dateNotes =  action.payload
		},
		// ....................................................
		setDateNoteAction(state,action) {
			state.dateNote =  action.payload
		},
		// setSaveAction(state,action) {
		// 	state.save =  action.payload
		// },
		// setFilterAction(state,action) {
		// 	state.filter =  action.payload
		// },
		setModalAction(state,action) {
			state.modal =  action.payload
		},
		saveChangesAction(state,action) {
			state.allNotes[0].notes =  action.payload
		},
		// ..................................................
		setYearAction(state,action) {
			state.year =  action.payload
		},
		setMonthAction(state,action) {
			state.month =  action.payload
		},
		setDatesAction(state,action) {
			state.dates =  action.payload
		},
		// .......................................................
		pushNewNotesDateAction(state,action) {
			state.allNotes.push(action.payload)
		},
		setallNotesDateIdAction(state,action) {
			state.allNotes[0].selectedDate = state.allNotes.find(elem=>elem.date==action.payload).date
		},
		setNotesOfThisDateAction(state,action) {
			state.dateNotes = 
				state.allNotes.find(elem=>elem.date==action.payload).notes  
		},
		setallNotesFindIdNotesAction(state,action) {
			state.allNotes.find(elem=>elem.date==action.payload).notes = state.dateNotes;
		},
		initSelectedDateAction(state,action) {
			state.allNotes[0].selectedDate = action.payload
		}
	}	
})

export default toolkitSlice.reducer

export const {	setallNotesFindIdNotesAction,
				setNotesOfThisDateAction, 
				setallNotesDateIdAction, 
				pushNewNotesDateAction, 
				setDatesAction, 
				setMonthAction, 
				setYearAction, 
				saveChangesAction, 
				setInitNotesAllStateAction, 
				setModalAction, 
				// setFilterAction, 
				// setSaveAction, 
				setDateNoteAction, 
				setDateNotesAction, 
				setAllNotesAction, 
				// setVisibleAction, 
				initSelectedDateAction,
			} = toolkitSlice.actions