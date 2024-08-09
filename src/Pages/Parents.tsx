import { Button, Flex, Typography } from "antd";
import React from "react";
import { PlusOutlined } from "@ant-design/icons";

export const Parents = () => {
  return (
    <React.Fragment>
      <Flex
        justify="space-between"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Typography.Title>Parents</Typography.Title>
        <Button>
          <PlusOutlined></PlusOutlined>
        </Button>
      </Flex>
    </React.Fragment>
  );
};
