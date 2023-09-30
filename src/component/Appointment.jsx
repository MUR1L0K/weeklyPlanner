export default function Appointment(props) {
  return (
    <li className={props.appointment.done ? "done" : ""}>
      <div className="divLabel">
        <input
          type="checkbox"
          className="checkbox"
          name=""
          id={`appointment-${props.appointment.id}`}
          onChange={() => {
            props.toggleDone(props.appointment.id);
          }}
          checked={props.appointment.done}
        />
        <label
          htmlFor={`appointment-${props.appointment.id}`}
          className="label"
        >
          {props.appointment.name}
        </label>
      </div>
      <button
        className="removeButton"
        onClick={() => {
          props.removeAppointment(props.appointment.id);
        }}
      >
        Remover
      </button>
    </li>
  );
}
