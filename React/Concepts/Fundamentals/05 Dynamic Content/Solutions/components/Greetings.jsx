const Greetings = () => {
    const greet = "Hello";
    const date = new Date();
  
    return (
      <div>
        <h1>{greet}</h1>
        <p>Date: {date.getDate()}</p>
      </div>
    );
  };
  
  export default Greetings;