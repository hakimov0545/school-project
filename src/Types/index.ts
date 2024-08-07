export interface IClass {
	id: number;
	name: string;
	teacher_id: number;
}

export interface ITeacher {
	id: number;
	firstName: string;
	lastName: string;
	address: string;
	subject: string;
	phone: string;
}

export interface IStudent {
	id: number;
	firstName: string;
	lastName: string;
	class_id: number;
	address: string;
	phone: string;
}

export interface IMark {
	id: number;
	mark: number | string;
	student_id: number;
}

export interface IMavzular {
	id: number;
	name: string;
	dars: IMark[];
	uy_vazifa: IMark[];
}
