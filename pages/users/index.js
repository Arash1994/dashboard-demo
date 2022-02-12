import Template from "../../components/Template"
import { Table } from 'antd';
import qs from 'qs';
import { useEffect, useState } from "react";

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    width: '20%',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    width: '20%',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
];

const fetchedData = [
  {
    name: "Arashdeep Singh",
    gender: "Male",
    email: "arashdeep@gmail.com",
  },{
    name: "Good Singh",
    gender: "Male",
    email: "arashdeep@gmail.com",
  },
  {
    name: "Good Singh",
    gender: "Male",
    email: "arashdeep@gmail.com",
  },
  {
    name: "Good Singh",
    gender: "Male",
    email: "arashdeep@gmail.com",
  },
  {
    name: "Good Singh",
    gender: "Male",
    email: "arashdeep@gmail.com",
  }
]

const Users = () => {
  const [data, setData] = useState(fetchedData)
  const [pagination, setPagination] = useState({ current: 1, pageSize: 10 })
  const [loading, setLoading] = useState(false)

  return (
    <Template>
      <h1>Users</h1>
      <Table
        columns={columns}
        rowKey={record => record.name}
        dataSource={data}
        pagination={pagination}
        loading={loading}
      />

    </Template>
  )
}

export default Users;