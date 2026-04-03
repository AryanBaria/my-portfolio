import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 64px)",
        backgroundColor: "#0f172a",
        color: "white",
        padding: "100px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        textAlign: "center",
        boxSizing: "border-box"
      }}
    >
      <div style={{ maxWidth: "600px" }}>
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
          Contact
        </h1>

        <p
          style={{
            color: "#94a3b8",
            fontSize: "18px",
            marginBottom: "40px"
          }}
        >
          Feel free to reach out — whether it’s for opportunities, collaborations,
          or just to connect.
        </p>

        {/* Contact Links */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            marginBottom: "30px"
          }}
        >
          <a
            href="https://linkedin.com/in/aryanbaria"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <FaLinkedin size={40} />
          </a>

          <a
            href="https://github.com/AryanBaria"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <FaGithub size={40} />
          </a>
                    <a
            href="mailto:aryanbaria11@gmail.com"
            className="icon-link"
          >
            <MdEmail size={40} />
          </a>
        </div>

        {/* Email text */}
        <p style={{ color: "#cbd5e1" }}>
          aryanbaria11@gmail.com
        </p>
      </div>
    </div>
  );
}

export default Contact;