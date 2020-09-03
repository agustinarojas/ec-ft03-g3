const { Button } = require("@material-ui/core");

<Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
<AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
  <Typography>Pago facil</Typography>
</AccordionSummary>
<AccordionDetails>
  <Typography>
      <Button color = "primary" variant = "outlined">
        Comprar con Pago Facil
      </Button>
  </Typography>
</AccordionDetails>
</Accordion>

<Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
<AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
  <Typography>Rapipago</Typography>
</AccordionSummary>
<AccordionDetails>
  <Typography>
    <Button color = "primary" variant = "outlined">
        Comprar con Rapipago
    </Button>
  </Typography>
</AccordionDetails>
</Accordion>
 <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
 <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
   <Typography>
       Mercado Pago
   </Typography>
 </AccordionSummary>
 <AccordionDetails>
   <Typography>
    <Button color = "primary" variant = "outlined">
    Comprar con Mercado Pago
    </Button>
   </Typography>
 </AccordionDetails>
</Accordion>