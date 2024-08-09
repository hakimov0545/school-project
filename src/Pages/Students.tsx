import React, { useContext, useState } from "react";
import { RouteData } from "../Context";
import { Typography } from "antd";
import { IStudent } from "../Types";
import { Table } from "antd";
import { TableProps, Flex, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { CiEdit } from "react-icons/ci";
import { LuTrash2 } from "react-icons/lu";
import { v4 as uuidv4 } from "uuid";
import { Button, Select, Form, Input } from "antd";

const { Title } = Typography;
const { Option } = Select;

export const Students = () => {
  const { teachers, classes, students, setStudents } = useContext(RouteData);
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [Edit, setEdit] = useState<IStudent | null>(null);

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  function handleDelete(id: number | string) {
    const updateStudents = students.filter((t) => t.id !== id);
    setStudents(updateStudents);
  }
  const handleClassChange = (value: number | string) => {
    const teacher = teachers.find((t) => t.classId === value);
    form.setFieldsValue({
      teacherId: teacher ? teacher.id : "",
      teacherName: teacher ? teacher.firstName : "",
    });
  };
  function handleAdd(
    values: Omit<IStudent, "id" | "teacherName"> & { teacherName?: string }
  ) {
    const { teacherName, ...other } = values;
    if (Edit === null) {
      const newStudent: IStudent = { ...other, id: uuidv4() };
      setStudents([...students, newStudent]);
      console.log(newStudent);
    } else {
      const updateStudent: IStudent[] = students.map((s) =>
        s.id === Edit.id ? { ...s, ...other } : s
      );
      setStudents(updateStudent);
    }
  }
  const columns: TableProps<IStudent>["columns"] = [
    {
      title: "ID",
      dataIndex: "name",
      key: "",
      render: (value: string, item: IStudent, index: number) => index + 1,
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
      title: "Class",
      dataIndex: "classId",
      key: "classId",
      render: (values: string, item: IStudent) => {
        const clas = classes.find((c) => c.id === item.classId);
        return <>{clas ? clas.name : "-"}</>;
      },
    },
    {
      title: "Teacher",
      dataIndex: "teacherId",
      key: "id",
      render: (values: string, item: IStudent) => {
        const teacher = teachers.find((t) => t.id === item.teacherId);
        return (
          <>{teacher ? `${teacher.firstName} ${teacher.lastName}` : "-"}</>
        );
      },
    },
    {
      title: "Adress",
      dataIndex: "adress",
      key: "id",
    },
    {
      title: "phone",
      dataIndex: "phone",
      key: "id",
    },
    {
      title: "Actions",
      dataIndex: "id",
      key: "id",
      render: (values: string, item: IStudent) => {
        return (
          <React.Fragment>
            <Button
              onClick={() => {
                setEdit(item);
                form.setFieldsValue({
                  teacherId: item.teacherId,
                  classId: item.classId,
                  firstName: item.firstName,
                  lastName: item.lastName,
                  adress: item.adress,
                  phone: item.phone,
                });
                setIsModalOpen(true);
              }}
              style={{ color: "blue" }}
              type="text"
              className="text-lg"
              size="middle"
            >
              <CiEdit></CiEdit>
            </Button>
            <Button
              onClick={() => handleDelete(item.id)}
              style={{ color: "red" }}
              className="text-lg"
              type="text"
              size="middle"
            >
              <LuTrash2></LuTrash2>
            </Button>
          </React.Fragment>
        );
      },
    },
  ];
  return (
    <>
      <Flex
        justify="space-between"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Title level={2}>Students</Title>
        <Button
          icon={<PlusOutlined></PlusOutlined>}
          type="primary"
          onClick={() => {
            form.resetFields();
            setEdit(null);
            setIsModalOpen(true);
          }}
        ></Button>
        <Modal
          title="Student"
          open={isModalOpen}
          onCancel={handleCancel}
          footer={null}
        >
          <Form
            style={{ height: 500, overflowY: "auto" }}
            form={form}
            layout="vertical"
            onFinish={handleAdd}
          >
            <Form.Item
              className="item"
              name={"firstName"}
              label="First Name"
              rules={[{ required: true }]}
            >
              <Input></Input>
            </Form.Item>
            <Form.Item
              className="item"
              name={"lastName"}
              label="Last Name"
              rules={[{ required: true }]}
            >
              <Input></Input>
            </Form.Item>
            <Form.Item
              label="Class"
              name={"classId"}
              rules={[{ required: true }]}
            >
              <Select onChange={handleClassChange}>
                {classes.map((c) => (
                  <Option key={c.id} value={c.id}>
                    {c.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item className="item" name="teacherName" label="Teacher">
              <Input disabled />
            </Form.Item>
            <Form.Item name="teacherId" hidden>
              <Input />
            </Form.Item>
            <Form.Item className="item" name={"adress"} label="Adress">
              <Input></Input>
            </Form.Item>
            <Form.Item className="item" name={"phone"} label="Phone">
              <Input></Input>
            </Form.Item>
            <Form.Item style={{ display: "flex", justifyContent: "end" }}>
              <Button
                style={{ marginRight: 4 }}
                type="primary"
                onClick={() => form.submit()}
              >
                {Edit === null ? "Add" : "Update"}
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </Flex>
      <Table columns={columns} dataSource={students}></Table>
      <Title level={3}>{`All student count: ${students.length}`}</Title>
    </>
  );
};
