import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function ContactInfo() {
  return (
    <div>
      <a href="https://github.com/procrastian" target="blank">
        <GitHubIcon />
      </a>
      <a href="https://www.linkedin.com/in/dev-ian-grantham" target="blank">
        <LinkedInIcon />
      </a>
      <p>
        <EmailIcon /> Email me at: <strong>dev.iangrantham@gmail.com</strong>
      </p>
    </div>
  );
}
