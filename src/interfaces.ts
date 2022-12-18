export interface IJob {
	id: number;
	title: string;
	company: string;
	url: string;
	description: string;
	skillList: string;
	skills: ISkill[];
	todo: string;
	userIsEditing: boolean;
	editItem: IJobEditItem
}

export const addingJob: IJob = {
	id: 0,
	title: '',
	company: '',
	url: '',
	description: '',
	skillList: '',
	skills: [],
	todo: '',
	userIsEditing: false,
	editItem: {
		id: 0,
		title: '',
		company: '',
		url: '',
		description: '',
		skillList: '',
		todo: '',
		pin: ''
	}
}

export interface IBackendJob {
	id: number;
	title: string;
	company: string;
	url: string;
	description: string;
	skillList: string;
	skills: ISkill[];
	todo: string;
}

export interface IJobEditItem {
	id: number | string;
	title: string;
	company: string;
	url: string;
	description: string;
	skillList: string;
	todo: string;
	pin: string;
}

export interface ISkill {
	idCode: string;
	name: string;
	url: string;
	description: string;
}

export interface ITodo {
	todoText: string;
	company: string;
	title: string;
	url: string;
}

export interface ISkillTotal {
	skill: ISkill;
	total: number;
	isOpen: boolean;
	lookupInfoLink: string;
}

export enum FormAction {
	Edit = 'formActionEdit',
	Add = 'formActionAdd'
}