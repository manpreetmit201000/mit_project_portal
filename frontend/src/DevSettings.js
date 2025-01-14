import React from "react";
import { Radio } from "antd";

const DevSettings = props => {
  console.log(props.userType);
  return (
    <div>
      <Radio.Group
        onChange={props.onToggleSettings}
        defaultValue={props.userType || "staff"}
        buttonStyle="solid"
      >
        <Radio.Button value="student">Student</Radio.Button>
        <Radio.Button value="staff">Staff</Radio.Button>
        <Radio.Button value="industry_client">Industry Client</Radio.Button>
      </Radio.Group>
    </div>
  );
};

export default DevSettings;
