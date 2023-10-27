import React, { useState } from "react";
import { Avatar, Rate, Space, Table, Typography } from "antd";

function User() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Inventory</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "Name",
            dataIndex: "thumbnail",
            render: (link) => {
              return <Avatar src={link} />;
            },
          },
          {
            title: "Email",
            dataIndex: "title",
          },
          {
            title: "Phone",
            dataIndex: "price",
            render: (value) => <span>${value}</span>,
          },
          {
            title: "isActive",
            dataIndex: "rating",
            render: (rating) => {
              return <Rate value={rating} allowHalf disabled />;
            },
          },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space>
  );
}

export default User;
