import { UserOutlined } from "@ant-design/icons";
import { Card, Space, Statistic, Table, Typography } from "antd";
import { useEffect, useState } from "react";

import { allJobs } from "../../../features/axios/api/user/jobDetails";

function AdminDashboard() {
  const [employer, setEmployers] = useState(2);
  const [customers, setCustomers] = useState(2);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <Space direction="horizontal">
        <DashboardCard
          icon={
            <UserOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0,255,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Employer"}
          value={employer}
        />
        <DashboardCard
          icon={
            <UserOutlined
              style={{
                color: "blue",
                backgroundColor: "rgba(0,0,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Customers"}
          value={customers}
        />
      </Space>
      <Space>
        <RecentOrders />
        {/* <DashboardChart /> */}
      </Space>
    </Space>
  );
}

function DashboardCard({ title, value, icon }: any) {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}
function RecentOrders() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    allJobs().then((res) => {
      console.log(res?.allJobs);

      setJobs(res?.allJobs);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Typography.Text>Recent Jobs</Typography.Text>
      <Table
        columns={[
          {
            title: "Title",
            dataIndex: "title",
            key: "title",
          },
          {
            title: "Location",
            dataIndex: "location",
            key: "location",
          },
          {
            title: "No.of opens",
            dataIndex: "openings",
            key: "openings",
          },
          {
            title: "Salary",
            dataIndex: "salary",
            key: "salary",
          },
          {
            title: "Status",
            dataIndex: "status",
            key: "location",
            render: (status) => (
              <span style={{ color: status ? "green" : "red" }}>
                {status ? "Still Open" : "Closed"}
              </span>
            ),
          },
        ]}
        loading={loading}
        dataSource={jobs}
        pagination={false}
      ></Table>
    </>
  );
}

export default AdminDashboard;
