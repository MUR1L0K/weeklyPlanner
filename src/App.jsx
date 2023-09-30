import Day from "./component/Day";

const week = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sabado",
];

function App() {
  return (
    <main>
      <h1 id="title">Planner Semanal</h1>
      <div className="days">
        {week.map((day) => (
          <Day key={day} day={day} />
        ))}
      </div>
    </main>
  );
}

export default App;
