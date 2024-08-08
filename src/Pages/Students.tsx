import React, { useContext, useState } from "react";
import { RouteData } from "../Context";
import { Typography } from "antd";
import { IStudent } from "../Types";
import { Table } from "antd";
import { Button } from "antd";
import { TableProps, Avatar, Flex, Modal } from "antd";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
const { Title } = Typography;

export const Students = () => {
  const { teachers, classes, students, setStudents } = useContext(RouteData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  function handleDelete(id: number | string) {
    const updateStudents = students.filter((t) => t.id !== id);
    setStudents(updateStudents);
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
      title: "Photo",
      dataIndex: "photo",
      key: "id",
      render: (values: string, item: IStudent) => {
        return <Avatar size={"large"}>{item.firstName[0]}</Avatar>;
      },
    },
    {
      title: "Actions",
      dataIndex: "id",
      key: "id",
      render: (values: string, item: IStudent) => {
        return (
          <React.Fragment>
            <Button
              onClick={showModal}
              style={{ color: "blue" }}
              type="text"
              size="small"
            >
              <EditOutlined />
            </Button>
            <Button
              onClick={() => handleDelete(item.id)}
              style={{ color: "red" }}
              type="text"
              size="small"
            >
              <DeleteOutlined />
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
          onClick={showModal}
        ></Button>
        <Modal
          title="Student"
          open={isModalOpen}
          onCancel={handleCancel}
          footer={null}
        >
          asdasdsada
        </Modal>
      </Flex>
      <Table
        columns={columns}
        dataSource={students}
        scroll={{ y: 440 }}
      ></Table>
    </>
  );
};
