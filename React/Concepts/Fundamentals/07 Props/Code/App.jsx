// React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.

const App = () => {
  return (
    <User
      img="https://i.pinimg.com/736x/cb/7f/2e/cb7f2e781cae3003c55652875c2350c3.jpg"
      name="Sambhav"
      age={18}
      isMarried={false}
      hobbies={["Coding", "Reading", "Sleeping"]}
    />
  );
};

const User = (props) => {
  return (
    <section>
      <img src={props.img} alt={props.name} width={200} />
      <h1>Name: {props.name}</h1>
      <h2>Age: {props.age}</h2>
      <h3>Is married: {props.isMarried}</h3>
      <h4>Hobbies: {props.hobbies} </h4>
    </section>
  );
};

export default App;