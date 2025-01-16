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

const User = ({ img, name, age, isMarried, hobbies }) => {
  return (
    <section>
      <img src={img} alt={name} width={200} />
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
      <h3>Is married: {isMarried}</h3>
      <h4>Hobbies: {hobbies} </h4>
    </section>
  );
};

export default App;