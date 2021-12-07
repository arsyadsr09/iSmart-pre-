import React, { useState } from "react"
import { Modal, Typography, Button, Input } from "antd"
import sha256 from "crypto-js/sha256"

import { useDispatch } from "react-redux"
import { LoadingOutlined } from "@ant-design/icons"
import { ColCenter } from "../general_styled"

import { ContentStyled } from "./styled"
import { addData } from "../../modules/general/action"

const { Title, Text } = Typography

export default function ModalCreate(props) {
  const dispatch = useDispatch()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [matNo, setMatNo] = useState()
  const [nextMatNo, setNextMatNo] = useState()
  const [pointCd, setPointCd] = useState()
  const [nextPointCd, setNextPointCd] = useState()
  const [partNo, setPartNo] = useState()
  const [companyCd, setCompanyCd] = useState()

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
    setMatNo()
    setNextMatNo()
    setPointCd()
    setNextPointCd()
    setPartNo()
    setCompanyCd()
  }

  const getTimeStamp = () => {
    let unix_timestamp = 1549312452
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(unix_timestamp * 1000)
    // Hours part from the timestamp
    var hours = date.getHours()
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes()
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds()

    // Will display time in 10:30:23 format
    var formattedTime =
      hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2)

    return formattedTime
  }

  const onSubmit = () => {
    let data = {
      mat_no: matNo,
      point_cd: pointCd,
      process_id: "29750",
      part_id: partNo,
      part_no: "312500K26100",
      vin_no: "",
      katashiki_cd: "",
      company_cd: companyCd,
      input_dt: "11/30/2021 00:00:00",
      process_dt: "11/30/2021 00:00:00",
      wf_cd: "DISC_CLUTCH_AISIN_PLANT_43",
      next_mat_no: nextMatNo,
      next_point_cd: nextPointCd,
      deleted_flag: "0",
      created_client_id: "",
      created_by: "Dummy",
      created_dt: "12/02/2021 14:09:38",
      updated_client_id: "",
      changed_by: "",
      changed_dt: "",
      manifest_no: "",
      lot_no: "AISIST000000000000312500K26100LOTNOSRINT6002",
    }

    data.block_hash = "0x" + sha256(getTimeStamp() + data).toString()

    console.log("data", data)

    dispatch(addData(data))
    handleCancel()
  }

  const antIcon = (
    <LoadingOutlined style={{ fontSize: 20, color: "#fff" }} spin />
  )

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Create Assets
      </Button>

      <Modal visible={isModalVisible} onCancel={handleCancel} footer={null}>
        <ContentStyled>
          {/* onActivateAssets */}
          <ColCenter>
            <Title className="text-w700 gray-7 mb-0px" level={3}>
              Create Assets
            </Title>
            <Input
              className="mt-12px"
              rows={6}
              placeholder="Mat No"
              value={matNo}
              onChange={(e) => setMatNo(e.target.value)}
            />
            <Input
              className="mt-12px"
              rows={6}
              placeholder="Next Mat No"
              value={nextMatNo}
              onChange={(e) => setNextMatNo(e.target.value)}
            />
            <Input
              className="mt-12px"
              rows={6}
              placeholder="Point No"
              value={pointCd}
              onChange={(e) => setPointCd(e.target.value)}
            />
            <Input
              className="mt-12px"
              rows={6}
              placeholder="Next Point No"
              value={nextPointCd}
              onChange={(e) => setNextPointCd(e.target.value)}
            />
            <Input
              className="mt-12px"
              rows={6}
              placeholder="Part No"
              value={partNo}
              onChange={(e) => setPartNo(e.target.value)}
            />
            <Input
              className="mt-12px"
              rows={6}
              placeholder="Company"
              value={companyCd}
              onChange={(e) => setCompanyCd(e.target.value)}
            />
            <Button
              block
              disabled={
                !matNo &&
                !nextMatNo &&
                !pointCd &&
                !nextPointCd &&
                !partNo &&
                !companyCd
              }
              type="primary"
              className="mt-24px"
              onClick={() => onSubmit()}
            >
              {isLoading ? antIcon : "Submit"}
            </Button>
          </ColCenter>
        </ContentStyled>
      </Modal>
    </>
  )
}
