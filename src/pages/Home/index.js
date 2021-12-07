import React from "react"
import { Table, Button, Space, Typography } from "antd"
import { DeleteOutlined } from "@ant-design/icons"
import { RowEnd } from "../../components/general_styled"
import moment from "moment"
import ModalCreate from "../../components/ModalCreate"
import { useDispatch, useSelector } from "react-redux"
import { deleteData } from "../../modules/general/action"

const { Title } = Typography

export default function Home() {
  const stateData = useSelector((state) => state.general.data)
  const dispatch = useDispatch()

  const columns = [
    {
      title: "Block Hash",
      dataIndex: "block_hash",
      key: "block_hash",
      width: 130,
      render: (value) => (
        <>
          {value
            ? value.substring(0, 7) +
              "..." +
              value.substring(value.length - 7, value.length)
            : ""}
        </>
      ),
    },
    {
      title: "Mat No",
      dataIndex: "mat_no",
      key: "mat_no",
      ellipsis: true,
    },
    {
      title: "Next Mat No",
      dataIndex: "next_mat_no",
      key: "next_mat_no",
      ellipsis: true,
    },
    {
      title: "Point CD",
      dataIndex: "point_cd",
      key: "point_cd",
      ellipsis: true,
    },
    {
      title: "Next Point CD",
      dataIndex: "next_point_cd",
      key: "next_point_cd",
      ellipsis: true,
    },
    {
      title: "Part No",
      dataIndex: "part_no",
      key: "part_no",
      ellipsis: true,
    },
    {
      title: "Company CD",
      dataIndex: "company_cd",
      key: "company_cd",
      ellipsis: true,
    },
    {
      title: "Input Date",
      dataIndex: "input_dt",
      key: "input_dt",
      ellipsis: true,
      render: (date) => <>{moment(date).format("MM/DD/YYYY")}</>,
    },
    {
      title: "Actions",
      dataIndex: "action",
      key: "action",
      width: 100,
      render: (_, record) => (
        <Button
          danger
          style={{ width: 35, padding: 0 }}
          type="primary"
          onClick={() => onDelete(record.block_hash)}
        >
          <DeleteOutlined />
        </Button>
      ),
    },
  ]

  const onDelete = (block_hash) => {
    dispatch(deleteData(block_hash))
  }

  return (
    <>
      <Title level={2}>All Assets</Title>
      <RowEnd className="mb-16px mt-24px">
        <ModalCreate />
        {/* <Space>
          <Button>Transfer Asset</Button>
          <Button>Search Asset</Button>
        </Space> */}
      </RowEnd>
      <Table dataSource={stateData} columns={columns} />
    </>
  )
}
