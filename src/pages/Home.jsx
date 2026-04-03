import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import bgImage from "../assets/ivey.jpg";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "calc(100vh - 64px)",
        textAlign: "center",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white"
      }}
    >
        <div
            style={{
                backgroundColor: "rgba(18, 21, 63, 0.5)",
                padding: "40px",
                borderRadius: "16px",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(10px)",     // for Safari
                maxWidth: "800px"
            }}
        >
            <section>
                <h1 style={{ fontSize: "80px", marginTop: "20px", marginBottom: "10px" }}>
                Aryan Baria
                </h1>

                <p style={{ fontSize: "20px" }}>
                Computer Science Student | Software Developer | ML Enthusiast
                </p>

                <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "40px",
                    marginTop: "20px",
                    marginBottom: "20px"
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
            </section>
        </div>
    </div>
  );
}

export default Home;