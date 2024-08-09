import React, { useCallback, useMemo, useState } from "react";
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
import { ITeacher } from "../Types";
import { CiEdit } from "react-icons/ci";
import { LuTrash2 } from "react-icons/lu";
import { FaPlus } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

const { Option } = Select;

export const Teachers = () => {
	const { classes, teachers, setTeachers } = useRouteData();
	const [open, setOpen] = useState(false);
	const [form] = Form.useForm();
	const [editingTeacher, setEditingTeacher] =
		useState<ITeacher | null>(null);

	const onDelete = useCallback(
		(id: string | number) => {
			const filteredTeachers = teachers.filter(
				(t) => t.id !== id
			);
			setTeachers(filteredTeachers);
		},
		[teachers]
	);

	const columns = useMemo(
		() => [
			{
				title: "ID",
				dataIndex: "id",
				key: "id",
				render: (
					value: string,
					item: ITeacher,
					index: number
				) => index + 1,
			},
			{
				title: "First Name",
				dataIndex: "firstName",
				key: "firstName",
			},
			{
				title: "Last Name",
				dataIndex: "lastName",
				key: "lastName",
			},
			{
				title: "Adress",
				dataIndex: "adress",
				key: "adress",
			},
			{
				title: "Subject",
				dataIndex: "subject",
				key: "subject",
			},
			{
				title: "Phone",
				dataIndex: "phone",
				key: "phone",
			},
			{
				title: "Actions",
				dataIndex: "id",
				key: "id",
				render: (value: string, item: ITeacher) => {
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
		[onDelete]
	);

	const onFinish = (values: Omit<ITeacher, "id">) => {
		if (editingTeacher) {
			const updatedTeachers = teachers.map((t) =>
				t.id === editingTeacher.id ? { ...t, ...values } : t
			);
			setTeachers(updatedTeachers);
			message.success("Updated successfully");
		} else {
			setTeachers([...teachers, { ...values, id: uuidv4() }]);
			message.success("Created successfully");
		}
		form.resetFields();
		setEditingTeacher(null);
		setOpen(false);
	};

	const onEdit = (item: ITeacher) => {
		setEditingTeacher(item);
		form.setFieldsValue({
			firstName: item.firstName,
			lastName: item.lastName,
			subject: item.subject,
			adress: item.adress,
			phone: item.phone,
		});
		setOpen(true);
	};

	return (
		<>
			<div className="flex items-center justify-between mb-1">
				<Typography.Title level={3}>
					Teachers
				</Typography.Title>
				<Button
					type="text"
					onClick={() => {
						form.resetFields();
						setEditingTeacher(null);
						setOpen(true);
					}}
				>
					<FaPlus />
				</Button>
			</div>
			<Table
				columns={columns}
				dataSource={teachers}
				rowKey={"id"}
			/>
			<Drawer
				title={
					editingTeacher ? "Edit Teacher" : "Add Teacher"
				}
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
						label="First Name"
						name={"firstName"}
						rules={[{ required: true }]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						label="Last Name"
						name={"lastName"}
						rules={[{ required: true }]}
					>
						<Input />
					</Form.Item>
					<Form.Item label="Adress" name={"adress"}>
						<Input />
					</Form.Item>
					<Form.Item label="Subject" name={"subject"}>
						<Input />
					</Form.Item>
					<Form.Item label="Phone" name={"phone"}>
						<Input />
					</Form.Item>
				</Form>
			</Drawer>
		</>
	);
};
