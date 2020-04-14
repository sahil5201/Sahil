import React from "react";

import { useSelector } from "react-redux";
import Table from "../UI/Table";

function TodayTask() {
  const task = useSelector((state) => state.Task.task);
  return (
    <div className="row">
      <Table lg="10" Data={task} currentDate={true} />
    </div>
  );
}

export default TodayTask;
