import React, { useEffect } from 'react'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../redux/action/TaskAction';
import BigCalendar from '../UI/BigCalendar';
import moment from 'moment';

function ScheduleTask() {
    const task = useSelector((state) => state.task);
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData("Schedule"));
  }, []);

  console.log(task);
  const myEventsList = task ? [ ] : null ;
  
  const data = task ? (
    task.map((item) => { 
        myEventsList.push({
            id: item.id,
            title: item.task.Task,
            color: item.task.color ? item.task.color : "",
            start: new Date(item.task.startDate),
            end: new Date(item.task.endDate),
        }) 
    })) : "";

    return (
        <div>
            <BigCalendar events={myEventsList}/>
        </div>
    )
}

export default ScheduleTask
