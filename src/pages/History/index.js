import React, { useEffect } from "react"
import { Typography, Table, Tag } from "antd"
import dataExample from "../../constants/data.json"
import moment from "moment"
import { useSelector } from "react-redux"

const { Title } = Typography

export default function History() {
  const stateHistory = useSelector((state) => state.general.histories)

  const columns = [
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      width: 120,
      render: (type) => {
        let color = "success"

        if (type === "delete") {
          color = "volcano"
        }
        if (type === "transfer") {
          color = "blue"
        }
        if (type === "create") {
          color = "success"
        }
        return (
          <>
            <Tag className="tag-custom" color={color}>
              {type.toUpperCase()}
            </Tag>
          </>
        )
      },
    },
    {
      title: "Executor",
      dataIndex: "user",
      key: "user",
      width: 120,
      ellipsis: true,
    },
    {
      title: "Date & Time",
      dataIndex: "time",
      key: "time",
      ellipsis: true,
      width: 120,
      render: (date) => <>{moment(date).format("MM/DD/YYYY")}</>,
    },
    {
      title: "Message",
      dataIndex: "message",
      key: "message",
      ellipsis: true,
    },
  ]

  useEffect(() => {
    console.log(stateHistory)
  }, [])

  return (
    <>
      <Title level={2}>Assets History</Title>
      <Table dataSource={stateHistory} columns={columns} />
    </>
  )
}
