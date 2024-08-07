export interface IClass {
	id: string | number;
	name: string;
	teacherId: string | number;
}

export interface ITeacher {
	id: string | number;
	firstName: string;
	lastName: string;
	adress?: string;
	subject?: string;
	phone?: string;
	classId: string | number;
	photo?: string;
}

export interface IStudent {
	id: string | number;
	firstName: string;
	lastName: string;
	classId: string | number;
	adress: string;
	phone: string;
	teacherId: number | string;
	photo: string;
}

export interface IMark {
	id: string | number;
	mark: number | string;
	studentId: string | number;
}

export interface IMavzular {
	id: string | number;
	name: string;
	dars: IMark[];
	uy_vazifa: IMark[];
}
