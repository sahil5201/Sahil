import React, { useEffect } from "react";
import { Checkbox,CircularProgress } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { Check, fetchData } from "../../redux/action/TaskAction";
import Moment from "moment";
import CustomModal from "./CustomModal";

function Table(props) {
  const lg = "col-lg-" + props.lg;
  const data = props.Data;
  const dispatch = useDispatch();
  const currentDate = props.currentDate ? true : false;
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="row justify-content-lg-center col-lg-12">
      <CustomModal show={modalShow} onHide={() => setModalShow(false)} />

      <div className={lg}>
        <div className="card">
          <div className="card-header card-header-tabs card-header-primary">
            <div className="nav-tabs-navigation">
              <div className="nav-tabs-wrapper">
                <ul className="nav nav-tabs" data-tabs="tabs">
                <li className="nav-item">
                    <button
                      className="nav-link btn btn-link"
                      onClick={() => setModalShow(true)}
                      data-toggle="tab"
                    >
                      <i className="material-icons">add</i> Add
                      <div className="ripple-container" />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card-body">
            <div className="tab-content">
              <div className="tab-pane active" id="profile">
                <table className="table">
                  <tbody>
                    {data ? (
                      data.map((item) => {
                        if (
                          currentDate
                            ? Moment(item.task.Date).format("DD-MM-YYYY") ===
                              Moment().format("DD-MM-YYYY")
                            : true
                        ) {
                          const TaskDate = Moment(item.task.Date).format(
                            "DD-MM-YYYY"
                          );
                          const TaskTime = Moment(item.task.Date).format(
                            "hh:mm"
                          );
                          return (
                            <tr key={item.id}>
                              <td>
                                <Checkbox
                                  color="primary"
                                  checked={item.status}
                                  onChange={() => dispatch(Check())}
                                />
                              </td>
                              <td> {item.task.Task} </td>
                              <td> {TaskDate} </td>
                              <td> {TaskTime} </td>
                              <td className="td-actions text-right">
                                <button
                                  type="button"
                                  rel="tooltip"
                                  title="Edit Task"
                                  className="btn btn-primary btn-link btn-sm"
                                  onClick={() => {
                                    alert("EDIT", item.id);
                                    console.log(item);
                                  }}
                                >
                                  <i className="material-icons">edit</i>
                                </button>
                                <button
                                  type="button"
                                  rel="tooltip"
                                  title="Remove"
                                  className="btn btn-danger btn-link btn-sm"
                                  onClick={() => {
                                    alert("DELETE", item.id);
                                    console.log(item);
                                  }}
                                >
                                  <i className="material-icons">close</i>
                                </button>
                              </td>
                            </tr>
                          );
                        }
                      })
                    ) : (
                      <tr>
                        <td colSpan="5" style={{ textAlign: "center" }}>
                          <CircularProgress />
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
