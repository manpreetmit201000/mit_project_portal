import React, { useState } from "react";
import { Space, Button, Drawer, Card } from "antd";
import { NotificationFilled } from "@ant-design/icons";
import styled from "styled-components";

import { hoverOver } from "../../utils/APP_FUNCTIONS";
import { hoverOut } from "../../utils/APP_FUNCTIONS";

const NOTIF_TITLE = styled.div`
  font-size: 14px;
  color: #ff4d4f;
`;

const NOTIF_DESCRIPTION = styled.div`
  font-size: 14px;
`;

const NotificationsDrawer = notifs => {
  const [visible, setVisible] = useState(false);

  const showNotifs = () => {
    setVisible(true);
    //console.log(notifs.notifs);
  };

  const closeNotifs = () => {
    setVisible(false);
  };

  return (
    <div>
      <NotificationFilled
        onMouseOver={hoverOver}
        onMouseOut={hoverOut}
        style={{ fontWeight: "lighter", fontSize: 22, color: "#ff4d4f" }}
        onClick={showNotifs}
      />
      <Drawer
        headerStyle={{ fontWeight: "bolder" }}
        placement="right"
        closable={false}
        onClose={closeNotifs}
        visible={visible}
        width={500}
      >
        {notifs.notifs.map(notif => (
          <Card key={notif.id} style={{ marginBottom: 20 }}>
            <NOTIF_TITLE>{notif.title}</NOTIF_TITLE>
            <NOTIF_DESCRIPTION>{notif.description}</NOTIF_DESCRIPTION>
            <Space style={{ marginTop: 10, marginLeft: 180 }}>
              <Button danger type="primary" size="small">
                Delete Notification
              </Button>
              <Button type="primary" size="small">
                View Project
              </Button>
            </Space>
          </Card>
        ))}
      </Drawer>
    </div>
  );
};

export default NotificationsDrawer;
