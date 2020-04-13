import React from "react";
import { LinearProgress } from "@material-ui/core";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { ScheduleModal, EventPopup } from "./CustomModal";

const localizer = momentLocalizer(moment);


function BigCalendar(props) {

<<<<<<< HEAD
    const eventStyleGetter = (events,color) => {
        var style = {
            backgroundColor: color,
            borderRadius: '0px',
            opacity: 0.8,
            color: 'black',
            border: '1px',
            borderRadius: "10px",
            display: 'block'
        };
        return {
            style: style
        };
    }

    console.log(props)
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className="card">
            <div className="card-header card-header-tabs card-header-info">
            <ScheduleModal show={modalShow} onHide={() => setModalShow(false)} />
            <div className="row">
                <div className="col-md-6 d-flex justify-content-start">
                <span className="btn btn-info disable"> Task </span>
                </div>
                
                <div className="col-md-6 d-flex justify-content-end">
                    <button className="btn btn-info" onClick={() => setModalShow(true)}> <i className="material-icons">add</i> Add</button>
                </div>

                </div>
            </div>
            <div className="card-body">
            { props.events ? <Calendar
      localizer={localizer}
      events={props.events}
      startAccessor="start"
      endAccessor="end"
      eventPropGetter={(eventStyleGetter)}
      style={{ height: "65vh" }}
    /> : <LinearProgress /> }
    </div>
=======
  const [modalShow, setModalShow] = React.useState(false);
  const [PopupShow, setPopupShow] = React.useState(false);
  const [PopupData, setPopupData] = React.useState([]);
  
  const eventColor = (event)=>{
      return {
        style : {
            backgroundColor: event.color,
            borderRadius: '0px',
            opacity: 0.8,
            color: 'black',
            border: '0px',
            padding: "4px 15px",
            borderRadius: "15px",
            display: 'block'
        }
      }
  }; //END

  const eventPopup =(event)=>{
    setPopupData(event)
    setPopupShow(true)
  }

  return (
    <div className="card">
      <div className="card-header card-header-tabs card-header-info">
        <ScheduleModal show={modalShow} onHide={() => setModalShow(false)} />
        <div className="row">
          <div className="col-md-6 d-flex justify-content-start">
            <span className="btn btn-info disable"> Task </span>
          </div>

          <div className="col-md-6 d-flex justify-content-end">
            <button className="btn btn-info" onClick={() => setModalShow(true)}>
              <i className="material-icons">add</i> Add
            </button>
          </div>
>>>>>>> 1e5efcc43a05acd00d794e722a5376258eeeac51
        </div>
      </div>
      <div className="card-body">
      <EventPopup show={PopupShow} onHide={() => setPopupShow(false)} Data={PopupData} />
        {props.events ? (
          <Calendar
            localizer={localizer}
            events={props.events}
            startAccessor="start"
            endAccessor="end"
            onSelectEvent={eventPopup}
            eventPropGetter = {eventColor}
            style={{ height: "70vh" }}
          />
        ) : (
          <LinearProgress />
        )}
      </div>
    </div>
  );
}

export default BigCalendar;
