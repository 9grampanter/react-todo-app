# useState


useState is used to handle reactive data that changes within the app

useState returns an array that can be destructured within the app.
It can for example be interpreted as the following: 
const [reactiveValue, setter] = useState(0)

Example usecase:
function App() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
};

__________________________

# useEffect


useEffect helps with handling logic such as mouted, updated and unmounted

useEffect will run when mounted or when state changes

that means it will first run once app is initialized and then again when state is changed

useEffect uses and array of dependencies "[]" that determins when as state is considered changed.

useEffect can be good for asyncronus fetching of data if the dependencies are setup right.

Example usecase:
function App() {
  const [count, setCount] = useState(0);

  useEffect(
    () => {
      fetch('myData').then(() => setLoaded(true))
    }, [count]
  );

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
};