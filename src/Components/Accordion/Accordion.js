import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ProjectGrid from "../Grid/Grid";

export default function BasicAccordian() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
        >
          <Typography>Project Title</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ProjectGrid />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
