const Card = ({ children }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "50px",
      }}
    >
      {children}
    </div>
  );
};
export default Card;
