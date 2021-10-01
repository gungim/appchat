import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getToken } from "../../Utils/Common";
import Header from "../Header";
import ReactLoading from "react-loading";
import { Section, Article } from "../../generic";

function Task() {
  const [task, setTask] = useState(null);
  const location = useLocation().state;

  useEffect(() => {
    const token = getToken();
    axios
      .get(`http://localhost:3000/api/v1/tasks/${location._id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setTask(res.data.task);
      });
  }, []);
  if (task == null)
    return (
      <Section>
        <Article>
          <ReactLoading type="cubes" color="#fff" />
        </Article>
      </Section>
    );
  return (
    <>
      <Header />
      <div className="container">
        <h1>{task.name}</h1>
        <h2>
          {task.completed ? (
            <span>Đã xong </span>
          ) : (
            <span>Đang tiến hành làm</span>
          )}
        </h2>
      </div>
    </>
  );
}
export default Task;
