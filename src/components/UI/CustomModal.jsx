import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { TextField } from "@material-ui/core";
import {
 MuiPickersUtilsProvider, KeyboardDatePicker, KeyboardTimePicker
} from '@material-ui/pickers';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { useDispatch } from "react-redux";
import { insertData, fetchData } from "../../redux/action/TaskAction";


export default function CustomModal(props) {
  const [Task, setTask] = useState("initialState")
  const dispatch = useDispatch();

 const onFormChange=(event)=>{
    setTask(event.target.value);
  }

  const onFormSubmit=()=>{
    const TaskData = {
      Task:Task,
    }
    dispatch(insertData("task/addtask",TaskData));    
  }
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add a Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Task" variant="outlined" fullWidth onChange={onFormChange}/>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={onFormSubmit}>Save</Button>
        <Button variant="outline-danger" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export function ScheduleModal(props) {
  const [Task, setTask] = useState("initialState")
  const [StartDate, setStartDate] = React.useState(new Date());
  const [EndDate, setEndDate] = React.useState(new Date());
  const [memoColor, setmemoColor] = React.useState("");
  const dispatch = useDispatch();

 const onFormChange=(event)=>{
    setTask(event.target.value);
  }
  const handleDateChange = (date) => {
    setStartDate(date);
  };

  const handleENDDateChange = (date) => {
    setEndDate(date);
  }

  const colorList = ["#64b5f6","#d1c4e9","#26c6da","#80cbc4","#ff8a65","#f48fb1"]

  const oncolorSelect=(event)=>{
    setmemoColor(event.target.name)
  }

  const onFormSubmit=()=>{
    console.log(Task,StartDate,EndDate);
    const TaskData = {
      Task:Task,
      startDate:StartDate,
      endDate:EndDate,
      color:memoColor
    }
    dispatch(insertData("Schedule/addtask",TaskData,"Schedule"));
 } 

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add a Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-md-12">
          <TextField id="outlined-basic" label="Task" variant="outlined" fullWidth onChange={onFormChange}/>
          </div>
         
          <div className="col-md-6 col-sm-6">
            <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Starting Date"
          format="dd/MM/yyyy"
          value={StartDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </div>
          <div className="col-md-6 col-sm-6">
          <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Starting Time"
          value={StartDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
          </div>

          <div className="col-md-6 col-sm-6">
            <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Ending Date"
          format="dd/MM/yyyy"
          value={EndDate}
          onChange={handleENDDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </div>
          <div className="col-md-6 col-sm-6">
          <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Ending Time"
          value={EndDate}
          onChange={handleENDDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
          </div>

 <div className="container">			
  <div className="well well-sm text-center">
    <div className="btn-group colorPicker" data-toggle="buttons">
     { 
     colorList.map((item) => { 
        return (
        <label className={ memoColor===item ? "btn active" : "btn" } style={{backgroundColor:item }}>
        <input type="radio" name={item} id="option2" autoComplete="off" onClick={oncolorSelect}/>
        <span className="material-icons">check</span>
      </label>
      )
        })}
    </div>
  </div>
</div>

        </div>
    </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={onFormSubmit}>Save</Button>
        <Button variant="outline-danger" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    </MuiPickersUtilsProvider>
  )
}

export function EventPopup(props){
  console.log(props)
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Your Task
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
          {props.Data.title}
          {/* {new Date(props.Data.startDate)} */}
          </div>
        </Modal.Body>
  
      </Modal>
    );
}