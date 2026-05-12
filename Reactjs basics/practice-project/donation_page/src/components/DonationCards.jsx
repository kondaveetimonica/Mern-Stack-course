const DonationCards = () => {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "row",
        padding: "2rem",
      }}
    >
      <div
        style={{ border: "1px solid #ccc", padding: "1rem", width: "100px" }}
      >
        <h3>Education</h3>
        <p>
          <p>Support school program and supplies</p>
          <button>Donate now </button>
        </p>
      </div>
      <div
        style={{ border: "1px solid #ccc", padding: "1rem", width: "100px" }}
      >
        <h3>Healthcare</h3>
        <p>
          <p>Provide medicines and care for families</p>
          <button>Donate now </button>
        </p>
      </div>
      <div
        style={{ border: "1px solid #ccc", padding: "1rem", width: "100px" }}
      >
        <h3> Food AID</h3>
        <p>
          <p>Deliver meals to those in need</p>
          <button>Donate now </button>
        </p>
      </div>
    </section>
  );
};
export default DonationCards;
