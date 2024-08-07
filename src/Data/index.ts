import { IClass, IStudent, ITeacher } from "../Types";

function createClassData(
	id: number | string,
	name: string,
	teacherId: number
): IClass {
	return {
		id,
		name,
		teacherId,
	};
}
export const ClassData = [
	createClassData(1, "9-A", 1),
	createClassData(2, "9-B", 2),
	createClassData(3, "9-D", 3),
	createClassData(4, "10-A", 4),
	createClassData(5, "10-B", 5),
	createClassData(6, "10-D", 6),
	createClassData(7, "10-A", 7),
	createClassData(8, "10-B", 8),
	createClassData(9, "10-D", 9),
];

function createTeacherData(
	id: number | string,
	classId: number | string,
	firstName: string,
	lastName: string,
	subject: string,
	adress?: string,
	phone?: string,
	photo?: string
): ITeacher {
	return {
		id,
		firstName,
		lastName,
		classId,
		subject,
		adress,
		phone,
		photo,
	};
}

export const TeacherData = [
	createTeacherData(
		1,
		1,
		"John",
		"Doe",
		"Mathematics",
		"123 Main St",
		"123-456-7890",
		"photo1.jpg"
	),
	createTeacherData(
		2,
		2,
		"Jane",
		"Smith",
		"Physics",
		"456 Elm St",
		"234-567-8901",
		"photo2.jpg"
	),
	createTeacherData(
		3,
		3,
		"Michael",
		"Brown",
		"Chemistry",
		"789 Maple St",
		"345-678-9012",
		"photo3.jpg"
	),
	createTeacherData(
		4,
		4,
		"Emily",
		"Johnson",
		"Biology",
		"321 Oak St",
		"456-789-0123",
		"photo4.jpg"
	),
	createTeacherData(
		5,
		5,
		"Daniel",
		"Davis",
		"History",
		"654 Pine St",
		"567-890-1234",
		"photo5.jpg"
	),
	createTeacherData(
		6,
		6,
		"Sophia",
		"Wilson",
		"Geography",
		"987 Cedar St",
		"678-901-2345",
		"photo6.jpg"
	),
	createTeacherData(
		7,
		7,
		"James",
		"Miller",
		"English",
		"135 Walnut St",
		"789-012-3456",
		"photo7.jpg"
	),
	createTeacherData(
		8,
		8,
		"Olivia",
		"Taylor",
		"Art",
		"246 Birch St",
		"890-123-4567",
		"photo8.jpg"
	),
	createTeacherData(
		9,
		9,
		"William",
		"Anderson",
		"Physical Education",
		"357 Spruce St",
		"901-234-5678",
		"photo9.jpg"
	),
];

function createStudentData(
	id: number | string,
	classId: number | string,
	teacherId: number | string,
	firstName: string,
	lastName: string,
	adress: string,
	phone: string,
	photo: string
): IStudent {
	return {
		id,
		classId,
		teacherId,
		firstName,
		lastName,
		adress,
		phone,
		photo,
	};
}

export const StudentData = [
	// 9-A Class students
	createStudentData(
		1,
		1,
		1,
		"Alice",
		"Johnson",
		"123 Main St",
		"123-456-7890",
		"photo1.jpg"
	),
	createStudentData(
		2,
		1,
		1,
		"Bob",
		"Smith",
		"124 Main St",
		"123-456-7891",
		"photo2.jpg"
	),
	createStudentData(
		3,
		1,
		1,
		"Charlie",
		"Brown",
		"125 Main St",
		"123-456-7892",
		"photo3.jpg"
	),
	createStudentData(
		4,
		1,
		1,
		"David",
		"Wilson",
		"126 Main St",
		"123-456-7893",
		"photo4.jpg"
	),
	createStudentData(
		5,
		1,
		1,
		"Eve",
		"Taylor",
		"127 Main St",
		"123-456-7894",
		"photo5.jpg"
	),
	createStudentData(
		6,
		1,
		1,
		"Frank",
		"Anderson",
		"128 Main St",
		"123-456-7895",
		"photo6.jpg"
	),
	createStudentData(
		7,
		1,
		1,
		"Grace",
		"Thomas",
		"129 Main St",
		"123-456-7896",
		"photo7.jpg"
	),
	createStudentData(
		8,
		1,
		1,
		"Hannah",
		"Martinez",
		"130 Main St",
		"123-456-7897",
		"photo8.jpg"
	),
	createStudentData(
		9,
		1,
		1,
		"Ian",
		"White",
		"131 Main St",
		"123-456-7898",
		"photo9.jpg"
	),
	createStudentData(
		10,
		1,
		1,
		"Jack",
		"Garcia",
		"132 Main St",
		"123-456-7899",
		"photo10.jpg"
	),

	// 9-B Class students
	createStudentData(
		11,
		2,
		2,
		"Kevin",
		"Miller",
		"133 Elm St",
		"123-456-7800",
		"photo11.jpg"
	),
	createStudentData(
		12,
		2,
		2,
		"Liam",
		"Davis",
		"134 Elm St",
		"123-456-7801",
		"photo12.jpg"
	),
	createStudentData(
		13,
		2,
		2,
		"Mason",
		"Rodriguez",
		"135 Elm St",
		"123-456-7802",
		"photo13.jpg"
	),
	createStudentData(
		14,
		2,
		2,
		"Noah",
		"Martinez",
		"136 Elm St",
		"123-456-7803",
		"photo14.jpg"
	),
	createStudentData(
		15,
		2,
		2,
		"Olivia",
		"Hernandez",
		"137 Elm St",
		"123-456-7804",
		"photo15.jpg"
	),
	createStudentData(
		16,
		2,
		2,
		"Pamela",
		"Lopez",
		"138 Elm St",
		"123-456-7805",
		"photo16.jpg"
	),
	createStudentData(
		17,
		2,
		2,
		"Quincy",
		"Gonzalez",
		"139 Elm St",
		"123-456-7806",
		"photo17.jpg"
	),
	createStudentData(
		18,
		2,
		2,
		"Rachel",
		"Wilson",
		"140 Elm St",
		"123-456-7807",
		"photo18.jpg"
	),
	createStudentData(
		19,
		2,
		2,
		"Samuel",
		"Anderson",
		"141 Elm St",
		"123-456-7808",
		"photo19.jpg"
	),
	createStudentData(
		20,
		2,
		2,
		"Tina",
		"Moore",
		"142 Elm St",
		"123-456-7809",
		"photo20.jpg"
	),

	// 9-D Class students
	createStudentData(
		21,
		3,
		3,
		"Ulysses",
		"Martin",
		"143 Maple St",
		"123-456-7810",
		"photo21.jpg"
	),
	createStudentData(
		22,
		3,
		3,
		"Victoria",
		"Lee",
		"144 Maple St",
		"123-456-7811",
		"photo22.jpg"
	),
	createStudentData(
		23,
		3,
		3,
		"Walter",
		"Perez",
		"145 Maple St",
		"123-456-7812",
		"photo23.jpg"
	),
	createStudentData(
		24,
		3,
		3,
		"Xander",
		"Thompson",
		"146 Maple St",
		"123-456-7813",
		"photo24.jpg"
	),
	createStudentData(
		25,
		3,
		3,
		"Yasmine",
		"Harris",
		"147 Maple St",
		"123-456-7814",
		"photo25.jpg"
	),
	createStudentData(
		26,
		3,
		3,
		"Zach",
		"Clark",
		"148 Maple St",
		"123-456-7815",
		"photo26.jpg"
	),
	createStudentData(
		27,
		3,
		3,
		"Amy",
		"Lewis",
		"149 Maple St",
		"123-456-7816",
		"photo27.jpg"
	),
	createStudentData(
		28,
		3,
		3,
		"Brian",
		"Robinson",
		"150 Maple St",
		"123-456-7817",
		"photo28.jpg"
	),
	createStudentData(
		29,
		3,
		3,
		"Cathy",
		"Walker",
		"151 Maple St",
		"123-456-7818",
		"photo29.jpg"
	),
	createStudentData(
		30,
		3,
		3,
		"Daniel",
		"Young",
		"152 Maple St",
		"123-456-7819",
		"photo30.jpg"
	),

	// 10-A Class students
	createStudentData(
		31,
		4,
		4,
		"Evelyn",
		"King",
		"153 Oak St",
		"123-456-7820",
		"photo31.jpg"
	),
	createStudentData(
		32,
		4,
		4,
		"Frank",
		"Scott",
		"154 Oak St",
		"123-456-7821",
		"photo32.jpg"
	),
	createStudentData(
		33,
		4,
		4,
		"Grace",
		"Green",
		"155 Oak St",
		"123-456-7822",
		"photo33.jpg"
	),
	createStudentData(
		34,
		4,
		4,
		"Hank",
		"Baker",
		"156 Oak St",
		"123-456-7823",
		"photo34.jpg"
	),
	createStudentData(
		35,
		4,
		4,
		"Ivy",
		"Nelson",
		"157 Oak St",
		"123-456-7824",
		"photo35.jpg"
	),
	createStudentData(
		36,
		4,
		4,
		"Jack",
		"Carter",
		"158 Oak St",
		"123-456-7825",
		"photo36.jpg"
	),
	createStudentData(
		37,
		4,
		4,
		"Kara",
		"Mitchell",
		"159 Oak St",
		"123-456-7826",
		"photo37.jpg"
	),
	createStudentData(
		38,
		4,
		4,
		"Leo",
		"Perez",
		"160 Oak St",
		"123-456-7827",
		"photo38.jpg"
	),
	createStudentData(
		39,
		4,
		4,
		"Mia",
		"Roberts",
		"161 Oak St",
		"123-456-7828",
		"photo39.jpg"
	),
	createStudentData(
		40,
		4,
		4,
		"Nate",
		"Turner",
		"162 Oak St",
		"123-456-7829",
		"photo40.jpg"
	),

	// 10-B Class students
	createStudentData(
		41,
		5,
		5,
		"Owen",
		"Phillips",
		"163 Pine St",
		"123-456-7830",
		"photo41.jpg"
	),
	createStudentData(
		42,
		5,
		5,
		"Penny",
		"Campbell",
		"164 Pine St",
		"123-456-7831",
		"photo42.jpg"
	),
	createStudentData(
		43,
		5,
		5,
		"Quinn",
		"Parker",
		"165 Pine St",
		"123-456-7832",
		"photo43.jpg"
	),
	createStudentData(
		44,
		5,
		5,
		"Rachel",
		"Evans",
		"166 Pine St",
		"123-456-7833",
		"photo44.jpg"
	),
	createStudentData(
		45,
		5,
		5,
		"Sam",
		"Edwards",
		"167 Pine St",
		"123-456-7834",
		"photo45.jpg"
	),
	createStudentData(
		46,
		5,
		5,
		"Tina",
		"Collins",
		"168 Pine St",
		"123-456-7835",
		"photo46.jpg"
	),
	createStudentData(
		47,
		5,
		5,
		"Uma",
		"Stewart",
		"169 Pine St",
		"123-456-7836",
		"photo47.jpg"
	),
	createStudentData(
		48,
		5,
		5,
		"Victor",
		"Sanchez",
		"170 Pine St",
		"123-456-7837",
		"photo48.jpg"
	),
	createStudentData(
		49,
		5,
		5,
		"Wendy",
		"Morris",
		"171 Pine St",
		"123-456-7838",
		"photo49.jpg"
	),
	createStudentData(
		50,
		5,
		5,
		"Xander",
		"Rogers",
		"172 Pine St",
		"123-456-7839",
		"photo50.jpg"
	),

	// 10-D Class students
	createStudentData(
		51,
		6,
		6,
		"Yara",
		"Reed",
		"173 Cedar St",
		"123-456-7840",
		"photo51.jpg"
	),
	createStudentData(
		52,
		6,
		6,
		"Zane",
		"Cook",
		"174 Cedar St",
		"123-456-7841",
		"photo52.jpg"
	),
	createStudentData(
		53,
		6,
		6,
		"Amy",
		"Morgan",
		"175 Cedar St",
		"123-456-7842",
		"photo53.jpg"
	),
	createStudentData(
		54,
		6,
		6,
		"Brian",
		"Bell",
		"176 Cedar St",
		"123-456-7843",
		"photo54.jpg"
	),
	createStudentData(
		55,
		6,
		6,
		"Cathy",
		"Murphy",
		"177 Cedar St",
		"123-456-7844",
		"photo55.jpg"
	),
	createStudentData(
		56,
		6,
		6,
		"David",
		"Bailey",
		"178 Cedar St",
		"123-456-7845",
		"photo56.jpg"
	),
	createStudentData(
		57,
		6,
		6,
		"Eva",
		"Rivera",
		"179 Cedar St",
		"123-456-7846",
		"photo57.jpg"
	),
	createStudentData(
		58,
		6,
		6,
		"Frank",
		"Cooper",
		"180 Cedar St",
		"123-456-7847",
		"photo58.jpg"
	),
	createStudentData(
		59,
		6,
		6,
		"Grace",
		"Richardson",
		"181 Cedar St",
		"123-456-7848",
		"photo59.jpg"
	),
	createStudentData(
		60,
		6,
		6,
		"Hank",
		"Kim",
		"182 Cedar St",
		"123-456-7849",
		"photo60.jpg"
	),

	// 11-A Class students
	createStudentData(
		61,
		7,
		7,
		"Ivy",
		"James",
		"183 Walnut St",
		"123-456-7850",
		"photo61.jpg"
	),
	createStudentData(
		62,
		7,
		7,
		"Jack",
		"Watson",
		"184 Walnut St",
		"123-456-7851",
		"photo62.jpg"
	),
	createStudentData(
		63,
		7,
		7,
		"Kara",
		"Brooks",
		"185 Walnut St",
		"123-456-7852",
		"photo63.jpg"
	),
	createStudentData(
		64,
		7,
		7,
		"Leo",
		"Sanders",
		"186 Walnut St",
		"123-456-7853",
		"photo64.jpg"
	),
	createStudentData(
		65,
		7,
		7,
		"Mia",
		"Price",
		"187 Walnut St",
		"123-456-7854",
		"photo65.jpg"
	),
	createStudentData(
		66,
		7,
		7,
		"Nate",
		"Bennett",
		"188 Walnut St",
		"123-456-7855",
		"photo66.jpg"
	),
	createStudentData(
		67,
		7,
		7,
		"Owen",
		"Wood",
		"189 Walnut St",
		"123-456-7856",
		"photo67.jpg"
	),
	createStudentData(
		68,
		7,
		7,
		"Penny",
		"Barnes",
		"190 Walnut St",
		"123-456-7857",
		"photo68.jpg"
	),
	createStudentData(
		69,
		7,
		7,
		"Quinn",
		"Ross",
		"191 Walnut St",
		"123-456-7858",
		"photo69.jpg"
	),
	createStudentData(
		70,
		7,
		7,
		"Rachel",
		"Henderson",
		"192 Walnut St",
		"123-456-7859",
		"photo70.jpg"
	),

	// 11-B Class students
	createStudentData(
		71,
		8,
		8,
		"Sam",
		"Coleman",
		"193 Birch St",
		"123-456-7860",
		"photo71.jpg"
	),
	createStudentData(
		72,
		8,
		8,
		"Tina",
		"Jenkins",
		"194 Birch St",
		"123-456-7861",
		"photo72.jpg"
	),
	createStudentData(
		73,
		8,
		8,
		"Uma",
		"Perry",
		"195 Birch St",
		"123-456-7862",
		"photo73.jpg"
	),
	createStudentData(
		74,
		8,
		8,
		"Victor",
		"Powell",
		"196 Birch St",
		"123-456-7863",
		"photo74.jpg"
	),
	createStudentData(
		75,
		8,
		8,
		"Wendy",
		"Long",
		"197 Birch St",
		"123-456-7864",
		"photo75.jpg"
	),
	createStudentData(
		76,
		8,
		8,
		"Xander",
		"Patterson",
		"198 Birch St",
		"123-456-7865",
		"photo76.jpg"
	),
	createStudentData(
		77,
		8,
		8,
		"Yara",
		"Hughes",
		"199 Birch St",
		"123-456-7866",
		"photo77.jpg"
	),
	createStudentData(
		78,
		8,
		8,
		"Zach",
		"Flores",
		"200 Birch St",
		"123-456-7867",
		"photo78.jpg"
	),
	createStudentData(
		79,
		8,
		8,
		"Amy",
		"Washington",
		"201 Birch St",
		"123-456-7868",
		"photo79.jpg"
	),
	createStudentData(
		80,
		8,
		8,
		"Brian",
		"Butler",
		"202 Birch St",
		"123-456-7869",
		"photo80.jpg"
	),

	// 11-D Class students
	createStudentData(
		81,
		9,
		9,
		"Cathy",
		"Simmons",
		"203 Aspen St",
		"123-456-7870",
		"photo81.jpg"
	),
	createStudentData(
		82,
		9,
		9,
		"David",
		"Foster",
		"204 Aspen St",
		"123-456-7871",
		"photo82.jpg"
	),
	createStudentData(
		83,
		9,
		9,
		"Eva",
		"Gonzales",
		"205 Aspen St",
		"123-456-7872",
		"photo83.jpg"
	),
	createStudentData(
		84,
		9,
		9,
		"Frank",
		"Bryant",
		"206 Aspen St",
		"123-456-7873",
		"photo84.jpg"
	),
	createStudentData(
		85,
		9,
		9,
		"Grace",
		"Alexander",
		"207 Aspen St",
		"123-456-7874",
		"photo85.jpg"
	),
	createStudentData(
		86,
		9,
		9,
		"Hank",
		"Hamilton",
		"208 Aspen St",
		"123-456-7875",
		"photo86.jpg"
	),
	createStudentData(
		87,
		9,
		9,
		"Ivy",
		"Graham",
		"209 Aspen St",
		"123-456-7876",
		"photo87.jpg"
	),
	createStudentData(
		88,
		9,
		9,
		"Jack",
		"Sullivan",
		"210 Aspen St",
		"123-456-7877",
		"photo88.jpg"
	),
	createStudentData(
		89,
		9,
		9,
		"Kara",
		"Wallace",
		"211 Aspen St",
		"123-456-7878",
		"photo89.jpg"
	),
	createStudentData(
		90,
		9,
		9,
		"Leo",
		"Woods",
		"212 Aspen St",
		"123-456-7879",
		"photo90.jpg"
	),
];
