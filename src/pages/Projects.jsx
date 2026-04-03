function Projects() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0f172a",
        color: "white",
        padding: "100px 20px",
        boxSizing: "border-box"
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto"
        }}
      >
        {/* Title */}
        <h1
          style={{
            fontSize: "48px",
            textAlign: "center",
            marginBottom: "20px"
          }}
        >
          Projects
        </h1>

        {/* Subtitle */}
        <p
          style={{
            textAlign: "center",
            color: "#94a3b8",
            fontSize: "18px",
            maxWidth: "700px",
            margin: "0 auto 50px"
          }}
        >
          Here are a few projects that reflect my experience in full-stack development,
          machine learning, and object-oriented software design.
        </p>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "30px"
          }}
        >
          {/* Project 1 */}
          <div
            style={{
              backgroundColor: "#1e293b",
              padding: "30px",
              borderRadius: "16px"
            }}
          >
            <h2 style={{ marginBottom: "15px" }}>Product Catalogue System</h2>
            <p style={{ color: "#cbd5e1", lineHeight: "1.7", marginBottom: "20px" }}>
              Built a full-stack product catalogue application with search and filtering
              functionality, supporting thousands of products through a connected database
              and backend logic.
            </p>
            <p style={{ color: "#60a5fa", fontWeight: "600" }}>
              Python · JavaScript · HTML/CSS · Azure SQL
            </p>
          </div>

          {/* Project 2 */}
          <div
            style={{
              backgroundColor: "#1e293b",
              padding: "30px",
              borderRadius: "16px"
            }}
          >
            <h2 style={{ marginBottom: "15px" }}>Cervical Cancer Risk Prediction</h2>
            <p style={{ color: "#cbd5e1", lineHeight: "1.7", marginBottom: "20px" }}>
              Developed a machine learning pipeline to predict cervical cancer risk using
              preprocessing, class balancing, model training, and evaluation to improve
              predictive performance on imbalanced data.
            </p>
            <p style={{ color: "#60a5fa", fontWeight: "600" }}>
              Python · scikit-learn · XGBoost · Pandas · NumPy
            </p>
          </div>

          {/* Project 3 (centered) */}
          <div
            style={{
              backgroundColor: "#1e293b",
              padding: "30px",
              borderRadius: "16px",
            }}
          >
            <h2 style={{ marginBottom: "15px" }}>CityShield Simulation</h2>
            <p style={{ color: "#cbd5e1", lineHeight: "1.7", marginBottom: "20px" }}>
              Designed and built a turn-based emergency response simulation using object-oriented
              programming and design patterns to manage game logic, events, and system behavior.
            </p>
            <p style={{ color: "#60a5fa", fontWeight: "600" }}>
              C++ · Qt · OOP · Design Patterns
            </p>
          </div>
          {/* Project 4 */}
            <div
            style={{
                backgroundColor: "#1e293b",
                padding: "30px",
                borderRadius: "16px"
            }}
            >
            <h2 style={{ marginBottom: "15px" }}>Virtual Pet Game</h2>
            <p style={{ color: "#cbd5e1", lineHeight: "1.7", marginBottom: "20px" }}>
                Built a desktop virtual pet game with interactive gameplay mechanics, object-oriented design,
                and persistent data storage to manage user and game information across sessions.
            </p>
            <p style={{ color: "#60a5fa", fontWeight: "600" }}>
                Java · Swing · OOP · JSON
            </p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;