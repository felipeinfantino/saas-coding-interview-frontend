import React from "react"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function NewsListEntry(props){
    return (
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><strong>{props.title}</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
              <div>Type: {props.type}</div>
              <div>by: {props.by}</div>
              <div style={{backgroundColor: 'lightgray', borderRadius: '10px', padding: '1rem', marginTop: '1rem'}}>
                <div dangerouslySetInnerHTML={{__html: props.text}} />
              </div>
          </div>
        </AccordionDetails>
      </Accordion>
    )
}