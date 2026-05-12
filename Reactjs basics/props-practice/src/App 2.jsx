import Greeting from "./components/Greeting";
import DonationButton from "./components/DonationButton";
const App = () => {
  const donateFn = () => {
    alert("thank you for donating");
  };
  return (
    <div>
      <Greeting name="john" message="good afternoon" />
      <DonationButton onDonate={donateFn} />
    </div>
  );
};
export default App;
