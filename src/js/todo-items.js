// Factory for Todo Items
const TodoItem = () => {
	let title = null;
	let description = null;
	let dueDate = null;
	let creationDate = null;
	let priority = null;
	let category = 'Inbox';
	let note = null;
	let status = true;

	const getStatus = () => {
		return status;
	};
	const toggleStatus = () => {
		title = status === true ? false : true;
	};
	const getTitle = () => {
		return title;
	};
	const setTitle = (newTitle) => {
		title = newTitle;
	};
	const getDescription = () => {
		return description;
	};
	const setDescription = (newDescription) => {
		description = newDescription;
	};
	const getDueDate = () => {
		return dueDate;
	};
	const setDueDate = (newDueDate) => {
		dueDate = newDueDate;
	};
	const getCreationDate = () => {
		return creationDate;
	};
	const setCreationDate = (newCreationDate) => {
		creationDate = newCreationDate;
	};
	const getPriority = () => {
		return priority;
	};
	const setPriority = (newPriority) => {
		priority = newPriority;
	};

	// Tags
	const getTags = () => {
		return tags;
	};
	const setTags = (newTags) => {
		tags = newTags;
	};

	let tags = []
	const addTag = (input) => {
		tags.push(input);
	};
	const deleteTag = (tagIndex) => {
		for (let i = tags.length - 1; i >= 0; i--) {
			if (i === tagIndex) {
				tags.splice(i, 1);
			}
		}
	};

	// Category
	const getCategory = () => {
		return category;
	};
	const setCategory = (newCategory) => {
		category = newCategory;
	};
	const getNote = () => {
		return note;
	};
	const setNote = (newNote) => {
		note = newNote;
	};
	const getCheckLists = () => {
		return checkLists;
	};
	const setCheckLists = (newCheckLists) => {
		checkLists = newCheckLists;
	};

	// Create a list for checklist option inside each todo-item
	let checkLists = [];
	const addCheckList = (input) => {
		let checkList = {};
		checkList.description = input;
		checkList.status = true;
		checkLists.push(checkList);
	};
	const deleteCheckList = (checkListIndex) => {
		for (let i = checkLists.length - 1; i >= 0; i--) {
			if (i === checkListIndex) {
				checkLists.splice(i, 1);
			}
		}
	};

	return {
		getStatus,
		toggleStatus,
		getTitle,
		setTitle,
		getDescription,
		setDescription,
		getDueDate,
		setDueDate,
		getCreationDate,
		setCreationDate,
		getPriority,
		setPriority,
		getTags,
		setTags,
		addTag,
		deleteTag,
		getCategory,
		setCategory,
		getNote,
		setNote,
		getCheckLists,
		setCheckLists,
		addCheckList,
		deleteCheckList,
	};
};

// Create, get, set and delete todo-items
let todoItemList = [];
export default function todo() {
	const getTodoItemList = () => {
		return todoItemList;
	};
	const setTodoItemList = (newListArray) => {
		todoItemList = newListArray;
	};

	// Create todo-items and push to todo-list
	const createTodoItem = (itemData = {}) => {
		const newTodoItem = TodoItem();

		newTodoItem.setTitle(itemData.title);
		newTodoItem.setDescription(itemData.description);
		newTodoItem.setPriority(itemData.priority);
		newTodoItem.setCategory(itemData.category);
		newTodoItem.setDueDate(itemData.dueDate);
		newTodoItem.setCreationDate(itemData.creationDate);
		newTodoItem.setNote(itemData.note);
		newTodoItem.setCheckLists(itemData.checkLists);

		todoItemList.push(newTodoItem);
	};

	const deleteTodoItem = (todoItemIndex) => {
		// Iterate todo-list backward and delete the todo item
		for (let i = todoItemList.length - 1; i >= 0; i--) {
			if (i === todoItemIndex) {
				todoItemList.splice(i, 1);
			}
		}
	};

	return {
		getTodoItemList,
		setTodoItemList,
		createTodoItem,
		deleteTodoItem,
	};
}
