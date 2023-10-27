import React from "react";
import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";

function Employer() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  //   useEffect(() => {
  //     setLoading(true);
  //     getInventory().then((res) => {
  //       setDataSource(res.products);
  //       setLoading(false);
  //     });
  //   }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Inventory</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "Comapny name",
            dataIndex: "thumbnail",
            render: (link) => {
              return <Avatar src={link} />;
            },
          },
          {
            title: "Location",
            dataIndex: "title",
          },
          {
            title: "Email",
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
export default Employer;
