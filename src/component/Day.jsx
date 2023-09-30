import { useState } from "react";
import Appointment from "./Appointment";

export default function Day(props) {
  const [appointments, setAppointments] = useState([]);

  const addAppointment = () => {
    const name = prompt("Informe o compromisso: ");
    if (name == "" || name == null) {
      window.alert("Error, Digite alguma coisa!");
    } else {
      const newAppointment = {
        id: Math.floor(100000 * (Math.random() + 1)),
        name,
        done: false,
      };
      setAppointments((currentState) => [...currentState, newAppointment]);
    }
  };

  const toggleDone = (appointmentId) => {
    setAppointments((currentState) =>
      currentState.map((appointment) => {
        if (appointment.id !== appointmentId) return appointment;
        else return { ...appointment, done: !appointment.done };
      })
    );
  };

  const removeAppointment = (appointmentId) => {
    setAppointments((currentState) =>
      currentState.filter((appointment) => appointmentId !== appointment.id)
    );
  };

  return (
    <div className="day">
      <h2>{props.day}</h2>
      <hr />
      <ul>
        {appointments.map((appointment) => (
          <Appointment
            key={appointment.id}
            appointment={appointment}
            toggleDone={toggleDone}
            removeAppointment={removeAppointment}
          />
        ))}
      </ul>
      <button onClick={addAppointment} className="buttons">
        Adicionar
      </button>
    </div>
  );
}
