import { IClass, IStudent, ITeacher } from "../Types";

export let classesData: IClass[] = [
	{
		id: 1,
		name: "11A",
		teacher_id: 1,
	},
	{
		id: 2,
		name: "11B",
		teacher_id: 2,
	},
	{
		id: 3,
		name: "11C",
		teacher_id: 3,
	},
];
export let teachersData: ITeacher[] = [
	{
		id: 1,
		firstName: "Baxrom",
		lastName: "Kambarov",
		address: "77 Main St",
		subject: "Maths",
		phone: "995462516",
	},
	{
		id: 2,
		firstName: "Sardor",
		lastName: "Jabborov",
		address: "58 Saint St",
		subject: "Russian",
		phone: "945876954",
	},
	{
		id: 3,
		firstName: "Abror",
		lastName: "Botirov",
		address: "98 Road St",
		subject: "English",
		phone: "902547865",
	},
];
export let studentsData: IStudent[] = [
	{
		id: 1,
		firstName: "Laziz",
		lastName: "Erkinjonov",
		class_id: 1,
		address: "16 Road St",
		phone: "330086929",
	},
	{
		id: 2,
		firstName: "Botir",
		lastName: "Akramov",
		class_id: 1,
		address: "54 Main St",
		phone: "955478695",
	},
	{
		id: 3,
		firstName: "Xusniddin",
		lastName: "Ortiqov",
		class_id: 1,
		address: "23 Main St",
		phone: "330096929",
	},
	{
		id: 4,
		firstName: "Javohir",
		lastName: "Muhiddinov",
		class_id: 2,
		address: "84 Saint St",
		phone: "945689547",
	},
	{
		id: 5,
		firstName: "Shaxzoda",
		lastName: "Rahimova",
		class_id: 2,
		address: "65 Road St",
		phone: "996587432",
	},
	{
		id: 6,
		firstName: "Malika",
		lastName: "Islomova",
		class_id: 3,
		address: "45 Main St",
		phone: "945687425",
	},
	{
		id: 7,
		firstName: "Asror",
		lastName: "Sobirov",
		class_id: 3,
		address: "26 Saint St",
		phone: "905214865",
	},
];
