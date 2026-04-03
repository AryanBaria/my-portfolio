import resumeImg from "../assets/resume.jpg";

function Resume() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0f172a",
        color: "white",
        padding: "100px 20px",
        boxSizing: "border-box",
        textAlign: "center"
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto"
        }}
      >
        {/* Title */}
        <h1
          style={{
            fontSize: "48px",
            marginBottom: "20px"
          }}
        >
          Resume
        </h1>

        {/* Subtitle */}
        <p
          style={{
            color: "#94a3b8",
            fontSize: "18px",
            marginBottom: "20px"
          }}
        >
          You can preview or download my resume below.
        </p>
                  {/* Download Button */}
        <a
          href="/resume.pdf"
          download
          style={{
            display: "inline-block",
            padding: "14px 28px",
            backgroundColor: "#2563eb",
            color: "white",
            textDecoration: "none",
            borderRadius: "10px",
            fontWeight: "600",
            transition: "0.3s",
            marginBottom: "20px"
          }}
        >
          Download Resume
        </a>
        {/* Resume Image */}
        <img
          src={resumeImg}
          alt="Resume"
          style={{
            width: "100%",
            borderRadius: "12px",
            marginBottom: "30px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
          }}
        />
      </div>
    </div>
  );
}

export default Resume;