import React, { useState } from "react"
import { Layout, Menu } from "antd"
import {
  HistoryOutlined,
  PieChartOutlined,
  SearchOutlined,
} from "@ant-design/icons"
import { useHistory } from "react-router"

const { Sider } = Layout

export default function Sidebar() {
  const history = useHistory()
  const [collapsed, setCollapsed] = useState(true)

  const onMovePage = (item) => {
    console.log(item.key)
    history.push(`/${item.key}`)
  }

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(v) => setCollapsed(v)}
    >
      <div id="logo-sidebar" />
      <Menu
        theme="dark"
        defaultSelectedKeys={["home"]}
        mode="inline"
        onClick={onMovePage}
      >
        <Menu.Item key="home" icon={<PieChartOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="history" icon={<HistoryOutlined />}>
          History
        </Menu.Item>
        {/* <Menu.Item key="search" icon={<SearchOutlined />}>
          Search
        </Menu.Item> */}
      </Menu>
    </Sider>
  )
}
