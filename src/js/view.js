import UserImage from "../img/user.jpg";
import {
	createSvgIcon,
	overviewIcon,
	todayIcon,
	inboxIcon,
	projectIcon,
	tagIcon,
	settingsIcon,
	questionIcon,
	notificationIcon,
	searchIcon,
	arrowDownIcon,
	editIcon,
	flagIcon,
	deleteIcon,
	tickIcon,
	addIcon,
	plusIcon,
	plusCircleIcon,
	dotsHorizontal,
} from "./icons";
const body = document.querySelector("body");
body.classList.add('light')
const app = document.createElement("div");
app.className = "app";
app.id = "app";
body.appendChild(app);

// Aside Section
export function renderAside() {
	const aside = document.createElement("aside");
	aside.classList = "aside";

	// Logo div
	const logo = document.createElement("div");
	logo.className = "logo";
	const logoText = document.createElement("h1");
	logoText.textContent = ".dolist";
	logo.appendChild(logoText);

	// Nav menu
	const nav = document.createElement("nav");
	nav.classList = "nav";
	const menu = document.createElement("menu");
	nav.appendChild(menu);

	function createList(name, iconPath) {
		const i = document.createElement("li");
		i.classList = name.toLowerCase();
		i.id = name.toLowerCase();
		const iIcon = createSvgIcon(i, iconPath);
		iIcon.setAttribute("for", i.id);
		const iText = document.createElement("p");
		iText.textContent = name;
		i.append(iIcon, iText);
		return i;
	}

	const overview = createList("Overview", overviewIcon);
	const today = createList("Today", todayIcon);
	const inbox = createList("Inbox", inboxIcon);
	const project = createList("Projects", projectIcon);

	const projectUlContainer = document.createElement("li");
	projectUlContainer.classList = "project-ul-container";
	projectUlContainer.style.display = "none";
	const projectUl = document.createElement("ul");
	projectUl.classList = "project-ul";
	const addProjectBtn = document.createElement("div");
	addProjectBtn.classList = "add-project-btn flex";
	createSvgIcon(addProjectBtn, addIcon);

	const addProjectBtnText = document.createElement("input");
	addProjectBtnText.classList = "add-input";
	addProjectBtnText.placeholder = "Add New";

	const colorWrapper = document.createElement("div");
	colorWrapper.classList = "color-wrapper flex";
	const colorSelect = document.createElement("input");
	colorSelect.setAttribute("type", "color");
	colorSelect.classList = "color-selector";
	colorWrapper.appendChild(colorSelect);
	colorSelect.value = getRandomColor();
	function getRandomColor() {
		var letters = "0123456789ABCDEF".split("");
		var color = "#";
		for (var i = 0; i < 6; i++) {
			color += letters[Math.round(Math.random() * 15)];
		}
		return color;
	}

	// colorWrapper.style.backgroundColor = c

	const projectOkayBtn = document.createElement("button");
	createSvgIcon(projectOkayBtn, plusIcon);
	projectOkayBtn.classList = "project-okay-btn flex";
	// projectOkayBtn.style.display = 'flex'

	addProjectBtn.append(addProjectBtnText);
	addProjectBtn.append(colorWrapper);
	addProjectBtn.append(projectOkayBtn);

	projectUlContainer.append(projectUl, addProjectBtn);

	const tags = createList("Tags", tagIcon);
	const tagsUlContainer = document.createElement("li");
	tagsUlContainer.classList = "tag-ul-container";
	tagsUlContainer.style.display = "none";
	const tagsUl = document.createElement("ul");
	tagsUl.classList = "tag-ul flex";
	const addTagBtn = document.createElement("div");
	addTagBtn.classList = "add-tag-btn flex";
	createSvgIcon(addTagBtn, addIcon);

	const addTagBtnText = document.createElement("input");
	addTagBtnText.classList = "add-input";
	addTagBtnText.placeholder = "Add New";

	const tagOkayBtn = document.createElement("button");
	createSvgIcon(tagOkayBtn, plusIcon);
	tagOkayBtn.classList = "tag-okay-btn flex";
	// okayBtn.style.display = 'flex'

	addTagBtn.append(addTagBtnText);
	addTagBtn.append(tagOkayBtn);

	tagsUlContainer.append(tagsUl, addTagBtn);

	menu.append(
		overview,
		today,
		inbox,
		project,
		projectUlContainer,
		tags,
		tagsUlContainer
	);

	const extra = document.createElement("div");
	extra.className = "extra";

	const extraMenu = document.createElement("menu");
	extra.appendChild(extraMenu);

	const settings = createList("Settings", settingsIcon);
	extraMenu.appendChild(settings);

	aside.append(logo, nav, extra);
	return aside;
}

// MAIN
export function renderMain() {
	const main = document.createElement("main");
	main.classList = "main";

	// Header Area
	const header = document.createElement("header");
	header.classList = "header";

	const searchContainer = document.createElement("div");
	searchContainer.classList = "search-container flex";

	const searchLabel = document.createElement("label");
	searchLabel.setAttribute("for", "search");
	createSvgIcon(searchLabel, searchIcon);

	const searchInput = document.createElement("input");
	searchInput.setAttribute("type", "search");
	searchInput.setAttribute("name", "search");
	searchInput.setAttribute("id", "search");
	searchInput.setAttribute("placeholder", "Search");
	searchInput.id = "search-bar";

	searchContainer.append(searchLabel, searchInput);

	const question = document.createElement("div");
	question.classList = "question";
	createSvgIcon(question, questionIcon);

	const notification = document.createElement("div");
	notification.classList = "notification";
	createSvgIcon(notification, notificationIcon);
	// const notificationDot = document.createElement('span');
	// notificationDot.classList = 'notification-dot'
	// notification.appendChild(notificationDot)

	const userName = document.createElement("div");
	userName.classList = "user-name flex";
	const userNameText = document.createElement("p");
	userNameText.textContent = "Orobosa Ikpon";
	userName.appendChild(userNameText);
	createSvgIcon(userName, arrowDownIcon);

	const userPicture = document.createElement("div");
	userPicture.classList = "user-picture";
	const image = new Image();
	image.src = UserImage;
	image.alt = "User Image";
	userPicture.appendChild(image);

	header.append(searchContainer, question, notification, userName, userPicture);

	// Main Section
	const mainSection = document.createElement("section");
	mainSection.classList = "main-section";

	const titleContainer = document.createElement("div");
	titleContainer.classList = "title-container flex";
	const title = document.createElement("div");
	title.classList = "title";
	const titleText = document.createElement("h2");
	titleText.textContent = "Projects";
	title.appendChild(titleText);
	const sortTime = document.createElement("div");
	sortTime.classList = "sort-time flex";
	const sortTimeText = document.createElement("p");
	sortTimeText.textContent = "This Week";
	sortTime.appendChild(sortTimeText);
	createSvgIcon(sortTime, arrowDownIcon);

	// Task Lists
	const tasksList = document.createElement("div");
	tasksList.classList = "tasks-list";

	const heading = document.createElement("div");
	heading.classList = "list-heading flex";
	heading.textContent = "Tasks";
	const titleName = document.createElement("h3");
	const count = document.createElement("span");
	count.textContent = "2";
	heading.append(titleName, count);

	const addBtnDiv = document.createElement("div");
	addBtnDiv.classList = "btn-div";
	const addBtn = document.createElement("button");
	addBtn.classList = "btn btn-add";
	addBtn.textContent = "+";
	addBtnDiv.append(addBtn);
	tasksList.append(heading, addBtnDiv);
	tasksList.append(createTasksListContainer());

	titleContainer.append(title, sortTime);
	mainSection.append(titleContainer, tasksList);
	main.append(header, mainSection);

	return main;
}

// app.append(renderAside(), renderMain());

// Task Card
export function createTaskCard(obj, colors) {
	const card = document.createElement("div");
	card.classList = "card flex";

	if (obj.getStatus() === "false") {
		card.classList.add("completed");
	} else card.classList.remove("completed");

	const cardAside = document.createElement("div");
	cardAside.classList = "card-aside flex";
	const cardMain = document.createElement("div");
	cardMain.classList = "card-main";

	// CheckBox button
	const outerCheck = document.createElement("div");
	outerCheck.classList = "outer-check";
	const innerCheck = document.createElement("div");
	innerCheck.classList = "inner-check";
	createSvgIcon(innerCheck, tickIcon);
	outerCheck.appendChild(innerCheck);
	cardAside.append(outerCheck);

	const cardTitle = document.createElement("h3");
	cardTitle.classList = "card__title";
	cardTitle.textContent = obj.getTitle() || "No Title";
	const cardDescription = document.createElement("p");
	cardDescription.classList = "card__description";
	cardDescription.textContent = obj.getDescription();
	const cardExtras = document.createElement("div");
	cardExtras.classList = "card__extras flex";

	const cardExtrasTags = document.createElement("span");
	cardExtrasTags.classList = "card__tags flex";
	createSvgIcon(cardExtrasTags, tagIcon);

	const tags = obj.getTags();
	// loop tags to render all tags
	for (let i = 0; i < tags.length; i++) {
		const element = tags[i];

		const tag = document.createElement("span");
		tag.classList = "card__tag";
		tag.textContent = element;

		if (i < 3) {
			cardExtrasTags.append(tag);
		} else if (i === 3) {
			const p = document.createElement("span");
			p.classList = "card__tag ellipsis";
			createSvgIcon(p, dotsHorizontal)
			cardExtrasTags.appendChild(p);
		}
	}

	// Priority
	const cardExtrasFlagContainer = document.createElement("div");
	cardExtrasFlagContainer.classList = "card__flag-container flex";
	createSvgIcon(cardExtrasFlagContainer, flagIcon);
	const cardExtrasFlag = document.createElement("span");
	let flag = obj.getPriority();
	cardExtrasFlag.textContent = flag;
	let flagColor;
	switch (flag) {
		case "high":
			flagColor = "high-priority";
			break;
		case "medium":
			flagColor = "medium-priority";
			break;
		case "low":
			flagColor = "low-priority";
			break;

		default:
			flagColor = "";
			break;
	}
	cardExtrasFlag.classList = `card__flag ${flagColor}`;
	cardExtrasFlagContainer.append(cardExtrasFlag);

	const cardExtrasProject = document.createElement("span");
	cardExtrasProject.classList = "card__project";
	cardExtrasProject.textContent = obj.getCategory();
	const projectColor = document.createElement("div");
	projectColor.classList = "card__project-color";
	projectColor.style.backgroundColor = colors[obj.getCategory()] || "#6aa7b3";

	cardExtras.append(
		cardExtrasTags,
		cardExtrasFlagContainer,
		cardExtrasProject,
		projectColor
	);

	cardMain.append(cardTitle, cardDescription, cardExtras);

	card.append(cardAside, cardMain);
	return card;
}

function createTasksListContainer() {
	const listCardContainer = document.createElement("div");
	listCardContainer.classList = "flex list-card-container";

	// Uncompleted Tasks
	const cardContainer = document.createElement("div");
	cardContainer.classList = "flex card-container";
	listCardContainer.appendChild(cardContainer);

	const uncompletedTasks = document.createElement("div");
	uncompletedTasks.classList = "uncompleted-tasks tasks";

	// Completed Tasks
	const completedTasksList = document.createElement("div");
	completedTasksList.classList = "completed-tasks-list flex";


	const completedTasksListHeading = document.createElement("div");
	completedTasksListHeading.classList = "list-heading flex";
	const completedTasksListTitle = document.createElement("h3");
	completedTasksListTitle.textContent = "Completed";
	const completedTasksListCount = document.createElement("span");
	completedTasksListCount.textContent = "0";

	const icon = document.createElement('div');
	icon.classList = 'completed-icon'
	createSvgIcon(icon, arrowDownIcon)

	completedTasksListHeading.append(
		completedTasksListTitle,
		completedTasksListCount,
		icon
	);

	const completedTasks = document.createElement('div');
	completedTasks.classList = 'completed-tasks tasks'


	completedTasksList.append(completedTasksListHeading, completedTasks);

	cardContainer.append(uncompletedTasks, completedTasksList);
	return listCardContainer;
}

function expandCard(expandCardObj, colors) {
	const blur = document.createElement("div");
	blur.classList = "e-card-blur";

	const background = document.createElement("div");
	background.classList = "e-card-bg";

	blur.appendChild(background);

	const eCardTop = document.createElement("div");
	const eCardTopText = document.createElement("p");
	eCardTop.appendChild(eCardTopText);
	const eCardTopIcon = document.createElement("span");
	createSvgIcon(eCardTopIcon, arrowDownIcon);
	eCardTop.appendChild(eCardTopIcon);
	eCardTopText.textContent = expandCardObj.getCategory() || "Inbox";
	eCardTop.classList = "e-card__category dropdown-select dropdown";
	eCardTop.style.outlineColor =
		`${colors[expandCardObj.getCategory()]}` || "#6aa7b3";

	const eCardCategoryOpen = document.createElement("ul");
	eCardCategoryOpen.classList = "e-card__category-container";
	eCardTop.appendChild(eCardCategoryOpen);

	const eCardClose = document.createElement("div");
	eCardClose.classList = "e-card__close btn";
	const eCardCloseIcon = "M6 18L18 6M6 6l12 12";
	createSvgIcon(eCardClose, eCardCloseIcon);

	const eCardHead = document.createElement("div");
	eCardHead.classList = "e-card__header flex";
	const eCardTitle = document.createElement("textarea");
	eCardTitle.setAttribute("maxlength", "60");

	eCardTitle.value = expandCardObj.getTitle() || "";
	eCardTitle.placeholder = "Add Title";
	eCardTitle.classList = "e-card__title";
	const eCardEdit = document.createElement("div");

	createSvgIcon(eCardEdit, editIcon);
	eCardEdit.classList = "e-card__edit btn";
	const eCardDelete = document.createElement("div");

	createSvgIcon(eCardDelete, deleteIcon);
	eCardDelete.classList = "e-card__delete btn";
	eCardHead.append(eCardTitle, eCardEdit, eCardDelete);

	const eCardStatus = document.createElement("div");
	eCardStatus.classList = "e-card__status flex";
	const eCardStatusName = document.createElement("p");
	eCardStatusName.textContent = "Status";
	eCardStatusName.classList = "e-card__status-name";
	const eCardStatusValue = document.createElement("select");
	const statusOpt0 = document.createElement("option");
	statusOpt0.textContent = "Pending";
	statusOpt0.setAttribute("value", "true");
	const statusOpt1 = document.createElement("option");
	statusOpt1.textContent = "Completed";
	statusOpt1.setAttribute("value", "false");

	eCardStatusValue.append(statusOpt0, statusOpt1);
	eCardStatusValue.className = "e-card__status-value";
	eCardStatusValue.value = expandCardObj.getStatus();

	eCardStatus.append(eCardStatusName, eCardStatusValue);

	const eCardDate = document.createElement("div");
	eCardDate.classList = "e-card__date flex";
	const eCardDateName = document.createElement("p");
	eCardDateName.textContent = "Date";
	eCardDateName.classList = "e-card__date-name";
	const eCardDateValue = document.createElement("input");
	eCardDateValue.setAttribute("type", "date");
	eCardDateValue.value = expandCardObj.getDueDate();

	eCardDateValue.classList = "e-card__date-value";
	eCardDate.append(eCardDateName, eCardDateValue);

	const eCardTag = document.createElement("div");
	eCardTag.classList = "e-card__tag flex";
	const eCardTagName = document.createElement("p");
	eCardTagName.textContent = "Tags";
	eCardTagName.classList = "e-card__tag-name";
	const eCardTagValue = document.createElement("div");
	eCardTagValue.classList = "e-card__tag-value flex";

	const tags = expandCardObj.getTags();
	// loop tags to render all tags
	for (let i = 0; i < tags.length; i++) {
		const element = tags[i];

		const tag = document.createElement("span");
		tag.classList = "e-card__tag-item";
		tag.textContent = element;

		if (i < 5) {
			eCardTagValue.append(tag);
		} else if (i === 5) {
			const p = document.createElement("span");
			p.classList = "expand-tags ellipsis";
			createSvgIcon(p, dotsHorizontal);
			eCardTagValue.appendChild(p);
		}
	}
	const eCardTagBtn = document.createElement("div");
	eCardTagBtn.classList = "tag-list-btn dropdown flex";
	createSvgIcon(eCardTagBtn, plusCircleIcon);

	const eCardTagOpen = document.createElement("ul");
	eCardTagOpen.classList = "e-card__tag-container";
	eCardTagBtn.appendChild(eCardTagOpen);

	eCardTag.append(eCardTagName, eCardTagValue, eCardTagBtn);

	const eCardPriority = document.createElement("div");
	eCardPriority.classList = "e-card__priority flex";
	const eCardPriorityName = document.createElement("p");
	eCardPriorityName.textContent = "Priority";
	eCardPriorityName.classList = "e-card__priority-name";
	const eCardPriorityValue = document.createElement("select");

	const priOpt0 = document.createElement("option");
	priOpt0.textContent = "None";
	priOpt0.setAttribute("value", "");
	const priOpt1 = document.createElement("option");
	priOpt1.textContent = "Low";
	priOpt1.setAttribute("value", "low");
	const priOpt2 = document.createElement("option");
	priOpt2.textContent = "Medium";
	priOpt2.setAttribute("value", "medium");
	const priOpt3 = document.createElement("option");
	priOpt3.textContent = "High";
	priOpt3.setAttribute("value", "high");

	eCardPriorityValue.append(priOpt0, priOpt1, priOpt2, priOpt3);

	eCardPriorityValue.value = expandCardObj.getPriority();
	eCardPriorityValue.classList = "e-card__priority-value";
	eCardPriority.append(eCardPriorityName, eCardPriorityValue);

	const eCardDescription = document.createElement("h2");
	eCardDescription.textContent = "Description";
	eCardDescription.classList = "e-card__description-title";
	const eCardDescriptionArea = document.createElement("div");
	eCardDescriptionArea.classList = "e-card__description-area";
	const eCardDescriptionText = document.createElement("textarea");
	eCardDescriptionText.value = expandCardObj.getDescription() || "";
	eCardDescriptionText.placeholder = "Add description";
	eCardDescriptionArea.appendChild(eCardDescriptionText);

	// Expanded Card Checklist
	const eCardTodo = document.createElement("h2");
	eCardTodo.textContent = "Check List";
	eCardTodo.classList = "e-card__todo-title";

	const eCardTodoAdd = document.createElement("button");
	eCardTodoAdd.textContent = "Add";
	eCardTodoAdd.classList = "e-card__todo-add";

	const eCardTodoList = document.createElement("div");
	eCardTodoList.classList = "e-card__todo-list";

	// let objCheckList = expandCardObj.checkLists;
	// Call check list items
	console.log(expandCardObj.getCheckLists());
	renderCheckList(expandCardObj.getCheckLists());
	function renderCheckList(obj) {
		for (let i = obj.length - 1; i >= 0; i--) {
			const element = obj[i];
			eCardTodoList.appendChild(expandedCardCheckListItem(element));
		}
	}

	const eCardFooter = document.createElement("div");
	eCardFooter.classList = "e-card__footer flex";
	const eCardProject = document.createElement("div");
	eCardProject.textContent = expandCardObj.getCreationDate();
	eCardProject.classList = "e-card__project";
	const eCardCancel = document.createElement("button");
	eCardCancel.textContent = "Cancel";
	eCardCancel.classList = "e-card__cancel btn";
	const eCardSave = document.createElement("button");
	eCardSave.textContent = "Save";
	eCardSave.classList = "e-card__save btn";
	eCardFooter.append(eCardProject, eCardCancel, eCardSave);

	background.append(
		eCardTop,
		eCardClose,
		eCardHead,
		eCardStatus,
		eCardDate,
		eCardTag,
		eCardPriority,
		eCardDescription,
		eCardDescriptionArea,
		eCardTodo,
		eCardTodoAdd,
		eCardTodoList,
		eCardFooter
	);

	return blur;
}
// Expanded Card Checklist Item
function expandedCardCheckListItem(obj) {
	const eCardTodoItem = document.createElement("div");
	eCardTodoItem.classList = "e-card__todo-item flex";
	eCardTodoItem.setAttribute("data-pos", `${obj.uniqueId}`);

	if (obj.status === false) {
		eCardTodoItem.classList.add("completed");
	} else eCardTodoItem.classList.remove("completed");

	// Check button
	const eCardTodoItemCheck = document.createElement("div");
	eCardTodoItemCheck.classList = "e-card__todo-check";
	const eCardTodoItemCheckOuter = document.createElement("div");
	eCardTodoItemCheckOuter.classList = "e-card__todo-check-outer";
	const eCardTodoItemCheckInner = document.createElement("div");
	eCardTodoItemCheckInner.classList = "e-card__todo-check-inner checklist-done";
	createSvgIcon(eCardTodoItemCheckInner, tickIcon);

	eCardTodoItemCheckOuter.appendChild(eCardTodoItemCheckInner);

	eCardTodoItemCheck.appendChild(eCardTodoItemCheckOuter);

	// Check list text
	const eCardTodoItemText = document.createElement("input");
	eCardTodoItemText.setAttribute("maxlength", "40");
	eCardTodoItemText.value = obj.description || "";
	eCardTodoItemText.classList = "e-card__todo-text";
	const eCardTodoItemDelete = document.createElement("div");
	// Check list delete icon
	eCardTodoItemDelete.classList = "e-card__todo-delete";
	createSvgIcon(eCardTodoItemDelete, deleteIcon);

	eCardTodoItem.append(
		eCardTodoItemCheck,
		eCardTodoItemText,
		eCardTodoItemDelete
	);
	return eCardTodoItem;
}

const unCompletedList = document.querySelector(".uncompleted-tasks");

const completedList = document.querySelector(".completed-tasks");

export { expandCard, expandedCardCheckListItem };
