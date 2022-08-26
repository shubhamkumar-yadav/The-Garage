import { Button, Card, Grid, makeStyles, TextField, Typography } from "@material-ui/core";
import {React,useState} from "react";
import background from "../images/login-banner.png";
const useStyle = makeStyles({
    container: {
        marginTop:90
    },
    loginImg:{
        height:500,
        padding:100
    },
    loginForm:{
        paddingLeft:100,
        paddingTop:50
    },
    mainloginForm:{
        height:450,
        padding:50,
        width:450
    },
    loginHead:{
        fontSize:18,
        marginBottom:3,
        marginLeft:8,
        fontWeight:500,
        color:"#272b41",
        paddingBottom:15,
        fontFamily:"Poppins"
    },
    email:{
        margin:8,
        textAlign:"center"
    },
    loginBtn:{
        backgroundColor:"#ee344e",
        color:"white",
        fontWeight:600,
        textTransform:"capitalize",
        margin:8,
        fontSize:18,
        width:"100%",
        borderRadius:"0.3rem",
        cursor:"pointer",
        marginTop:15,
        '&:hover': {
            cursor: 'pointer',
            backgroundColor:"#0168b3"           
        },
    }
    
    
});
const Home = () => {
    const classes = useStyle();
    const [userData,setUserData] = useState({
        vName:"",
        vNumber:"",
        cInTime:"",
        cOutTime:""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(() => {
            return {
                ...userData, [name]: value
            }
        })
    }
    const loginData = async () => {
        const response = await fetch('', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        var data = await response.json();
        console.log(data); //here you can see the response object
        
        //as we know fetch return promise if we wanna handle the error the we can use .then and .then to handle both the promises returned
    };
    return (<>
        <Grid container className={classes.container}>
            <Grid item xs={6}>
                <img src={background} alt="login" className={classes.loginImg} />
            </Grid>
            <Grid item xs={6} className={classes.loginForm}>
                <form>
                    <Typography>Remaining Vehicle : <Button variant="contained" style={{backgroundColor:"green",color:"white"}}>20</Button></Typography>
                    <Card className={classes.mainloginForm}>
                        <Typography className={classes.loginHead}>The Garage</Typography>
                        <TextField label='Vehicle Name' type="text" name='vName' variant='outlined' fullWidth required className={classes.email} onChange={(e)=>handleChange(e)}/>
                        <TextField label='Vehicle Number' type="text" name='vNumber' variant='outlined' fullWidth required className={classes.email} onChange={(e)=>handleChange(e)}/>
                        <TextField label='Checkin Time ' type="time" name='cInTime' variant='outlined' fullWidth required className={classes.email} onChange={(e)=>handleChange(e)}/>
                        <TextField label='Checkout Time' type="time" name='cOutTime' variant='outlined' fullWidth required className={classes.email} onChange={(e)=>handleChange(e)}/>
                        <Button className={classes.loginBtn} onClick={() => loginData()}>Enter into Garage</Button>
                    </Card>
                </form>
            </Grid>
        </Grid>
    </>);
};
export { Home };
