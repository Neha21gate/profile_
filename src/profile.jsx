import React, { useEffect } from 'react';
import './profilecard_css.css';
import simmi from './image/simmi.jpeg';
import RoomIcon from '@material-ui/icons/Room';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';  
import LinkedInIcon from '@material-ui/icons/LinkedIn'; 
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';






const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(1.5),
    
  },
  fine:
  {
    margin: theme.spacing(1.5), 
 },
  fine1:
  {
    margin: theme.spacing(1.5), 

  },
  fine2:
  {
    margin: theme.spacing(1.5), 
 },
 fine3:
  {
    margin: theme.spacing(1.5), 
 },
 fine4:
  {
    margin: theme.spacing(1.5), 
 },
 fine5:
 {
   margin: theme.spacing(1.5), 
},
fine6:
{
  margin: theme.spacing(1.5), 
},
button: {
    margin: theme.spacing(1),
  },

}));










const Prof =()=>{

    const classes = useStyles();

    useEffect(()=>{

    alert("Click Twice on OK button and hover on DP");

    });

    window.onload=function(){

        document.getElementById("loader").style.display ="none";          //need to correct these two lines
        
        document.getElementById("card").style.display="block";

    };

    
 

    return (
    <>


<div id="loader"> LOADING... </div>

    <div className="card" id="card">

        <div className="info">

            <div className="name"><b>Neha Choudhary</b></div>
           
            <div className="divide"></div>
            <div className="bio">
                Web Developer & <br/>
                Subject Matter Expert
            </div>

            <div className="divider"></div>
            
            <div className="menu">

            <Tooltip title="Gmail" aria-label="add">
        <Fab  className={classes.fine} href={"mailto: nehachoudhary0814@.com"} >
          <EmailIcon />
        </Fab>
      </Tooltip>

            <Tooltip title="Contact" aria-label="add">
       <Fab className={classes.fab} href={"tel:+6421-239-0100"}> 
          <AddIcCallIcon />
        
        </Fab>
      </Tooltip>
      
     
      <Tooltip title="Github" aria-label="add">
        <Fab  className={classes.fine2} href={"https://github.com/Neha21gate"}>
          <GitHubIcon  />
        </Fab>
      </Tooltip>
      <Tooltip title="LinkedIn" aria-label="add">
        <Fab className={classes.fine3} href={"https://www.linkedin.com/in/neha-2015-webdeveloper"}>
          <LinkedInIcon  />
        </Fab>
      </Tooltip>
      <Tooltip title="Facebook" aria-label="add">
        <Fab className={classes.fine4} href={"https://www.facebook.com/neha.choudhary.585559"}>
          <FacebookIcon   />
        </Fab>
      </Tooltip>
      <Tooltip title="Whatsapp" aria-label="add">
        <Fab  className={classes.fine1} href={"https://api.whatsapp.com/send?phone=+64212390100"}>
          <WhatsAppIcon />
        </Fab>
      </Tooltip>
      <Tooltip title="Instagram" aria-label="add">
        <Fab  className={classes.fine5} href={"https://www.instagram.com/nehachoudhary585559/"}>
          <InstagramIcon/>
        </Fab>
      </Tooltip>
      <Tooltip title="Address" aria-label="add">
        <Fab  className={classes.fine6} href={"http://maps.google.com/maps?q=61/51+Ireland Road+Mount Wellington,+Auckland+1060"}>
          <RoomIcon/>
        </Fab>
      </Tooltip>
      
      <div className="btn"><p>©️2020 <span style={{color:'#038a91'}}>CodeToShine</span> </p></div>
      

</div>
 

        </div>
       
       
        
        <div className="photo"><img className="header" src={simmi} width="360px" height="550px" alt="profile" /></div>
        
    </div>
    
    </>
    );
}
export default Prof;
