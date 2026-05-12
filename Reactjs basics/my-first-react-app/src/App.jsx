const App = () => {
  //!example basic jsx with example
  const name = "React Learner";
  const greeting = "welcome to jsx";
  //!example 2 jsx with expressions
  const num1 = 10;
  const num2 = 5;
  //!example 3 jsx with conditional rendering
  const isLoggedIn = true;
  //!example 4 :jsx with lists
  const fruit = ["apple", "banana", "cherry", "apple"];
  return (
    <div>
      <h1>JSX examples</h1>
      {/*example basic jsx with example*/}
      <section>
        <h2>1.Basic jsx with variables</h2>
        {greeting},{name}
        <p>
          JSX lets you insert javascript expressions inside curly braces{"{ }"}
        </p>
      </section>
      {/*example 2 jsx with expressions*/}
      <section>
        <h2>JSX with expressions</h2>
        {num1}+{num2}={num1 + num2}
      </section>
      {/* example 3 jsx with conditional rendering*/}
      <section>
        <h2> jsx with conditional rendering</h2>
        {/* <p>{isLoggedIn && <span>Welcome back!</span>}</p> */}
        <p>
          {isLoggedIn ? (
            <span>Welcome back!</span>
          ) : (
            <span>Please! log in again</span>
          )}
        </p>
      </section>
      <section>
        {/* example 4 jsx with lists */}
        <h1>JSX with lists</h1>
        <ol>
          {fruit.map((fruit, index) => {
            return <li key={index}>{fruit}</li>;
          })}
        </ol>
      </section>
    </div>
  );
};
export default App;
