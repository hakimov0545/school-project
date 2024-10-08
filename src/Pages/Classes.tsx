import React, {
	useCallback,
	useEffect,
	useMemo,
	useState,
} from "react";
import { useRouteData } from "../Context";
import {
	Button,
	Drawer,
	Form,
	Input,
	message,
	Select,
	Table,
	Typography,
} from "antd";
import { IClass } from "../Types";
import { CiEdit } from "react-icons/ci";
import { LuTrash2 } from "react-icons/lu";
import { FaPlus } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

import { PlusOutlined } from "@ant-design/icons";

const { Option } = Select;

export const Classes = () => {
	const { classes, setClasses, teachers, students } =
		useRouteData();
	const [open, setOpen] = useState(false);
	const [form] = Form.useForm();
	const [editingClass, setEditingClass] = useState<IClass | null>(
		null
	);
	const onDelete = useCallback(
		(id: string | number) => {
			const filteredClasses = classes.filter(
				(cls) => cls.id !== id
			);
			setClasses(filteredClasses);
		},
		[classes]
	);

	const columns = useMemo(
		() => [
			{
				title: "ID",
				dataIndex: "id",
				key: "id",
				render: (
					value: string,
					item: IClass,
					index: number
				) => index + 1,
			},
			{
				title: "Name",
				dataIndex: "name",
				key: "name",
			},
			{
				title: "Students Count",
				dataIndex: "id",
				key: "id",
				render: (value: string | number) => {
					const student = students.filter(
						(s) => s.classId == value
					);
					return `${student.length}`;
				},
			},
			{
				title: "Teacher",
				dataIndex: "teacherId",
				key: "teacherId",
				render: (id: string) => {
					const teacher = teachers.find((t) => t.id === id);
					return teacher
						? `${teacher.firstName} ${teacher.lastName}`
						: " - ";
				},
			},
			{
				title: "Actions",
				dataIndex: "id",
				key: "teacherId",
				render: (value: string, item: IClass) => {
					return (
						<>
							<Button
								type="text"
								className="text-blue-500 text-xl"
								size="middle"
								onClick={() => onEdit(item)}
							>
								<CiEdit />
							</Button>
							<Button
								type="text"
								className="text-red-500 text-lg"
								size="middle"
								onClick={() => onDelete(item.id)}
							>
								<LuTrash2 />
							</Button>
						</>
					);
				},
			},
		],
		[onDelete, teachers]
	);

	useEffect(() => {
		console.log("columns ozgardi");
	}, [columns]);

	const onFinish = (values: Omit<IClass, "id">) => {
		if (editingClass) {
			const updatedClasses = classes.map((cls) =>
				cls.id === editingClass.id
					? { ...cls, ...values }
					: cls
			);
			setClasses(updatedClasses);
			message.success("Updated successfully");
		} else {
			setClasses([...classes, { ...values, id: uuidv4() }]);
			message.success("Created successfully");
		}
		form.resetFields();
		setEditingClass(null);
		setOpen(false);
	};

	const onEdit = (item: IClass) => {
		setEditingClass(item);
		form.setFieldsValue({
			name: item.name,
			teacherId: item.teacherId,
		});
		setOpen(true);
	};

	return (
		<>
			<div className="flex items-center justify-between mb-1">
				<Typography.Title level={3}>Classes</Typography.Title>
				<Button
					icon={<PlusOutlined></PlusOutlined>}
					type="primary"
					onClick={() => {
						form.resetFields();
						setEditingClass(null);
						setOpen(true);
					}}
				></Button>
			</div>
			<Table
				columns={columns}
				dataSource={classes}
				rowKey={"id"}
			/>
			<Drawer
				title={editingClass ? "Edit Class" : "Add Class"}
				open={open}
				onClose={() => setOpen(false)}
				extra={
					<Button
						type="primary"
						onClick={() => form.submit()}
					>
						Save
					</Button>
				}
			>
				<Form
					form={form}
					layout="vertical"
					onFinish={onFinish}
				>
					<Form.Item
						label="Name"
						name={"name"}
						rules={[
							{
								required: true,
								message: "Please enter class name",
							},
						]}
					>
						<Input />
					</Form.Item>
					<Form.Item label="Teacher" name={"teacherId"}>
						<Select>
							{teachers.map((t) => (
								<Option key={t.id} value={t.id}>
									{t.firstName} {t.lastName}
								</Option>
							))}
						</Select>
					</Form.Item>
				</Form>
			</Drawer>
		</>
	);
};
