import React, { useEffect } from "react"
import { Layout, Breadcrumb } from "antd"
import Sidebar from "./Sidebar"
import { useDispatch } from "react-redux"
import dataExample from "../constants/data.json"
import { setData } from "../modules/general/action"

const { Header, Content, Footer } = Layout

export default function Layouts(props) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setData(dataExample))
  }, [])

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360, marginTop: 16 }}
          >
            {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>iSmart ©2021</Footer>
      </Layout>
    </Layout>
  )
}
