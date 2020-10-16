import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

export default class Ordering_6 extends Component {
    render() {
      
        return (
          <Container className="top-space">
                        <div className="bg-display">

            
            
<Form style={{marginLeft:'20px', marginRight:"20px", paddingTop:'10px', marginBottom:"-20px"}}>

  <Form.Row className="justify-content-md-center">
    <Form.Group as={Col} xs={7} controlId="formGridFirstName">
      <Form.Label className="a">Beneficiary First Name</Form.Label>
      <Form.Control type="text" placeholder="First Name" />
    </Form.Group>
  
    <Form.Group as={Col}  controlId="formGridLastName">
    <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" placeholder="Last Name" />
    </Form.Group>
  </Form.Row>

  <div className="w-50 d-inline-block">
  <Form.Group controlId="formGridDate">
    <Form.Label>Date of Service</Form.Label>
    <h6><i>The order must be placed at least 72 hours in advance to be considered.</i></h6>
    <Form.Control type="date" placeholder="1234 Main St" />
  </Form.Group>
  
  <Form.Group controlId="formGridTime">
    <Form.Label>Time of Service</Form.Label>
    <h6><i>Enter the time between 08:00 and 21:00 maximum</i></h6>
    <Form.Control type="time" placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group controlId="formGridHost">
    <Form.Label>Offered by</Form.Label>
    <Form.Control type="text" placeholder="Answer here" />
  </Form.Group>

  <Form.Group controlId="formGridPhone">
    <Form.Label>Contact Number</Form.Label>
    <h6><i>Please enter a canadian number</i> </h6>
    <Form.Control type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="012-345-6789" />
  </Form.Group>

  <Form.Group controlId="formGridEmail">
    <Form.Label>Email Address</Form.Label>
    <Form.Control placeholder="yourname@gmail.com" />
  </Form.Group>


  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address 1</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>
  </div>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>British Columbia</option>
        <option>Alberta</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridComment">
    <Form.Label>Additional Comments</Form.Label>
    <h6><i>Leave us a little comment that will help us better target the event and the artist.</i></h6>
    <Form.Control as="textarea" rows={3} placeholder="Anything you'd like us to know" />
  </Form.Group>
</Form>  
</div>
</Container>
      
            ); 
    }
}



// import React, { Component } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import { Form } from "react-bootstrap";
// import Container from "@material-ui/core/Container";
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button'
// import { ThemeProvider, makeStyles, createMuiTheme,} from '@material-ui/core/styles';
// import { grey } from '@material-ui/core/colors';
// import MuiPhoneNumber from 'material-ui-phone-number';




// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     width: '35ch',
//   },
//   margin: {
//     margin: theme.spacing(1),
//   },
// }));


// const theme = createMuiTheme({
//   palette: {
//     primary: grey,
//   },
// });

// export default class Ordering_6 extends Component {
//     render() {
//       const classes = useStyles();

//         return (

//     <div>
//       < br />
//     <Container maxWidth="sm" className="Container-one rounded" >

//     {/* <form className={classes.root} noValidate autoComplete="off">
//       <label>Enter Name of Beneficiary:</label> <br />
//       <TextField  InputLabelProps={{style: { color: '#fff' },}} id="outlined-basic" label="First Name" variant="outlined"/>
//       <TextField  InputLabelProps={{style: { color: '#fff' },}} id="outlined-basic" label="Last Name" variant="outlined" />
//     </form> */}

//         <form className={classes.root} noValidate>
//         <label>Enter Name of Beneficiary:</label>
//           <ThemeProvider theme={theme}>
//             <TextField
//               className={classes.margin}
//               InputLabelProps={{style: { color: 'grey' },}}
//               label="First Name"
//               variant="outlined"
//               id="mui-theme-provider-outlined-input"
//             />
            

//             <TextField
//               className={classes.margin}
//               InputLabelProps={{style: { color: 'grey' },}}
//               label="Last Name"
//               variant="outlined"
//               id="mui-theme-provider-outlined-input"
//             />

//             <label>Select a date and time:</label>
//             <span>Select between 8:00am to 9:00pm</span>
//             <TextField
//               id="datetime-local"
//               InputLabelProps={{ style: { color: 'grey'}, }}
//               label="Select booking date"
//               type="datetime-local"
//               defaultValue=""
//               variant="outlined"
//               className={classes.margin}
//               InputLabelProps={{
//                 shrink: true,
//               }} 
//             /> <br />

//             <label>Enter Address:</label>
//             <TextField
//               className={classes.margin}
//               InputLabelProps={{ style: { color: 'grey'}, }}
//               label="Address line 1"
//               variant="outlined"
//               id="mui-theme-provider-outlined-input"
//             />

//             <TextField
//               className={classes.margin}
//               InputLabelProps={{ style: { color: 'grey'}, }}
//               label="Address line 2"
//               variant="outlined"
//               id="mui-theme-provider-outlined-input"
//             />

//               <TextField
//               className={classes.margin}
//               InputLabelProps={{ style: { color: 'grey'}, }}
//               label="City"
//               variant="outlined"
//               id="mui-theme-provider-outlined-input"
//             />
//             <TextField
//               className={classes.margin}
//               InputLabelProps={{ style: { color: 'grey'}, }}
//               label="Postal Code"
//               variant="outlined"
//               id="mui-theme-provider-outlined-input"
//             />
//             <TextField
//               className={classes.margin}
//               InputLabelProps={{ style: { color: 'grey'}, }}
//               label="Province"
//               variant="outlined"
//               id="mui-theme-provider-outlined-input"
//             />

//             <label>Offered By:</label>
//             <TextField
//               className={classes.margin}
//               InputLabelProps={{ style: { color: 'grey'}, }}
//               label="Name"
//               variant="outlined"
//               id="mui-theme-provider-outlined-input"
//             />

//             <MuiPhoneNumber 
//               defaultCountry={'ca'} 
//               className={classes.margin}
//               InputLabelProps={{ style: { color: 'grey'}, }}
//               label="Phone"
//               variant="outlined"
//               id="mui-theme-provider-outlined-input"
//             />

//             <TextField
//               className={classes.margin}
//               InputLabelProps={{ style: { color: 'grey' }, }}
//               label="abc@email.com"
//               variant="outlined"
//               id="mui-theme-provider-outlined-input"
//             />


//             <label>Additional Comments:</label>
//             <TextField
//               className={classes.margin}
//               InputLabelProps={{ style: { color: 'grey' }, }}
//               label="Comments"
//               variant="outlined"
//               id="mui-theme-provider-outlined-input"
//               multiline
//               rows={5}
//             />
//           </ThemeProvider>

//           <Button variant="contained" color="secondary">
//             Submit
//           </Button>

//           <br />

          

          

//         </form>

//       </Container>

//     </div>
//   );
// }
// }
