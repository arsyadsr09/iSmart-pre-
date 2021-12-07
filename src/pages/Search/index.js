import React from "react"
import { Typography, Input } from "antd"

const { Title } = Typography
const { Search } = Input

export default function SearchPage() {
  const onSearch = (value) => console.log(value)

  return (
    <>
      <Title level={2}>Search Assets</Title>
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
    </>
  )
}
