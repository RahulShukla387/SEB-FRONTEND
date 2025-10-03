import React from 'react';
// import * as React from "react";
import Divider from "@mui/material/Divider";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
const members = [
{
name: "Dr. Shivam Singh",
designation: "Faculty Advisor",
photo: "/images/Shivam Sir Faculty Advisor.jpg",
},
{
name: "Dr. Rohit Babu ",
designation: "Faculty Advisor",
photo: "/images/Dr.RohitBabuFacultyAdvisor.jpg",
},

];
function Faculty() {
    return (<>
     <h2  className='text-center font-serif text-gray-500 ' >Members define the character of a community, <br /> together they create its strength</h2>          
   
        <Typography
               variant="h3"
               component="h1"
               align="center"
               sx={{ fontFamily: 'serif', color: 'gray', mb: 1, mt: 4 }}
             >
               Faculty Incharge
             </Typography>
       
             <Typography
               variant="h4"
               component="h2"
               align="center"
               sx={{ fontFamily: 'serif', color: 'gray', mb: 4 }}
             >
               Technical subcouncil
             </Typography> 
    <Grid container spacing={3} justifyContent="center" sx={{ mt: 2 }}>
  <Grid item xs={12} sm={6} md={4}>
   <Card
   className=''
  sx={{
    scale: 0.9,
    maxWidth: 500,
    width: 300,
    height: 450,
    borderRadius: 3,
    boxShadow: 3,
    "&:hover": { boxShadow: 10, scale:0.92 },
    overflow: "hidden", // ensures rounded corners apply to image
    
  }}
>
  <CardMedia
  // className='rounded-bl-[7rem] rounded-br-[7rem]'
    component="img"
    image="/images/PallavGuptaSir.jpg"
    alt="Shivam Sir"
    sx={{
      width: "100%",      // full card width
      height: 350,        // fixed height
      objectFit: "cover", // fills space without stretching
    }}
  />
  <CardContent sx={{ textAlign: "center" }}>
    <Typography variant="h6" fontWeight="bold">
      Dr. Pallav Gupta
    </Typography>
    <Typography variant="body3" color="text.secondary">
      Faculty Incharge 
    </Typography>
    <Typography variant="body2" color="text.secondary">
      Technical Subcouncil
    </Typography>
  </CardContent>
</Card>

  </Grid>
</Grid>
     <Typography
               variant="h3"
               component="h1"
               align="center"
               sx={{ fontFamily: 'serif', color: 'gray', mb: 1, mt: 4 }}
             >
               Faculty Advisors
             </Typography>  
     <Typography
               variant="h4"
               component="h1"
               align="center"
               sx={{ fontFamily: 'serif', color: 'gray', mb: 1, mt: 4 }}
             >
               The Social Engineers' Board
             </Typography>  
              {/* <h3  className='text-center font-serif text-gray-500 ' >The Social Engineers' Board </h3>   */}

    <Grid container spacing={25} justifyContent="center" sx={{ mt: 2 }}>
      {members.map((member, index) => (
        <Grid item xs={12} sm={6} md={4} key={index} spacing={4} >
          <Card 
           className=''
            sx={{
                scale:0.9,
             maxWidth: 500,
             width: 300,
             height: 450,
             borderRadius: 3,
             boxShadow: 3,
             "&:hover": { boxShadow: 10, scale:0.92},
             overflow: "hidden",
            }}
          >
            <CardMedia
              component="img"
              image={member.photo}
              alt={member.name}
              //  className='rounded-[9rem]'
                sx={{
                height: 350,        // fixed height
                objectFit: "cover", // fills space without stretching
                width: "100%",      // full card width
    }}
            />
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h6" fontWeight="bold">
                {member.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {member.designation}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  
      <Divider
      className='mx-[12%]'
      sx={{
        my: 4,
        height: 3,
        // border: "2px solid grey",
        borderRadius: 2,
        background: "linear-gradient(to right, #f9f4f9ff, #f9f4f9ff)",
        boxShadow: "0px 2px 8px rgba(160, 154, 154, 0.2)",
      }}
     />
    </>  );
}

export default Faculty;