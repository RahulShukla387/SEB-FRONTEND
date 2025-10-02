
import { Typography } from '@mui/material';
import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import { useNavigate } from 'react-router-dom';

function Event() {
    //todo for using navigate link
    const navigate = useNavigate();

    const events = [
{
name: "Drishyaa",
photo: "/images/DrishyaaLogo.png",
link: "/api/DrishyaaEvent",
},
{
name: "Dhishaan",
photo: "/images/DhishaanLogo.png",
link: "/api/DhishaanEvent"
},

];

    return ( <>
    <div className='mt-[5%]'>
     <div className='text-center item-center'  >
                <Typography
  className='text-center  mb-10  text-gray-500'
variant="h2"
sx={{
fontWeight: 800,
lineHeight: 1.05,
fontSize: { xs: "1rem", sm: "2.5rem", md: "3.5rem" },
// gradient text
background: "linear-gradient(90deg,rgba(89, 173, 89, 1),rgba(100, 23, 225, 1))",
WebkitBackgroundClip: "text",
WebkitTextFillColor: "transparent",
// subtle letter spacing for elegance
letterSpacing: "-0.5px",
}}
>

 Our Events <br />

</Typography>
      <h2  className=' text-center font-serif text-gray-500 ' >Events create a platform for ideas to connect, grow, and inspire change.  </h2>    
      <h3  className=' text-center font-serif text-gray-500 ' >The Social Engineer’s Board organizes various events throughout the year to make a real impact on students, <br /> and help them become well-rounded engineers. </h3>    


                    <Grid container spacing={25} justifyContent="center" sx={{ mt: 2 }}>
              {events.map((event, index) => (
                <Grid item sm={12} md={6} lg={6} key={index} spacing={4} >
                  <Card 
                  onClick={() => navigate(event.link)}
                   className=''
                   sx={{
                    cursor: "pointer",
                        scale:0.9,
                     maxWidth: 500,
                     width: 300,
                     height: 500,
                     borderRadius: 3,
                     boxShadow: 3,
                     "&:hover": { boxShadow: 10 , scale:0.92 },
                     overflow: "hidden",
                    }}
                  >
                    <CardContent sx={{ textAlign: "center" }}>
                      <Typography variant="h3" fontWeight="bold">
                        {event.name}
                      </Typography>
                    </CardContent>
                    <CardMedia
                      component="img"
                      image={event.photo}
                      className=''
                      alt={event.name}
                        sx={{
                        height: 350,        // fixed height
                        objectFit: "cover", // fills space without stretching
                        width: "100%",      // full card width
            }}
                    />
                      <CardContent sx={{ textAlign: "center" }}>
                      <Typography variant="h5" fontWeight="bold">
                        Know More
                      </Typography>
                    </CardContent>
                    
                  </Card>
                </Grid>
              ))}
            </Grid>
     </div>
    </div>
    </> );
}

export default Event;