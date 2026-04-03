function About() {
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
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            marginBottom: "15px",
            textAlign: "center",
          }}
        >
          About Me
        </h1>

        <p
          style={{
            fontSize: "20px",
            lineHeight: "1.8",
            color: "#94a3b8",
            marginBottom: "15px",
            textAlign: "center",
          }}
        >
          My name is Aryan and I am a Computer Science student at the University of Western Ontario. 
          I am interested in full-stack software development and machine learning. 
          I enjoy building applications, learning new technologies, and solving real-world problems through software.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "30px",
            marginTop: "10px",
          }}
        >
          <div
            style={{
              backgroundColor: "#1e293b",
              padding: "25px",
              borderRadius: "12px",
            }}
          >
            <h2 style={{ marginBottom: "15px" }}>What I’m Focused On</h2>
            <p style={{ color: "#cbd5e1", lineHeight: "1.7" }}>
              I’m focused on growing as a developer through projects and
              internships involving software engineering, web development,
              databases, and machine learning. I like work that combines
              technical problem solving with real-world impacts.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#1e293b",
              padding: "25px",
              borderRadius: "12px",
            }}
          >
            <h2 style={{ marginBottom: "15px" }}>Experience I Have</h2>
            <p style={{ color: "#cbd5e1", lineHeight: "1.7" }}>     
                I have experience in full-stack development through internships and projects, 
                building applications that integrate backend systems, databases, 
                and frontend interfaces. I have also worked on machine learning projects 
                involving data preprocessing, model training, 
                and evaluation to solve real-world problems.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#1e293b",
              padding: "25px",
              borderRadius: "12px",
            }}
          >
            <h2 style={{ marginBottom: "15px" }}>Technologies I Use</h2>
            <p style={{ color: "#cbd5e1", lineHeight: "1.7" }}>
              The main technologies that I use include Python, Java, C++, 
              JavaScript, HTML/CSS, SQL, React, Git, Azure
              SQL, and machine learning tools like scikit-learn, XGBoost,
              Pandas, and NumPy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;