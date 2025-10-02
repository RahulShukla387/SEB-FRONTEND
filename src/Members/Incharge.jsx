import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";

const members = [
  {
  name: "Devesh Yadav",
  designation: "President",
  Year: "Final Year",
  Branch: "MED",
  photo: "/images/deveshSirPresident.jpg",
  },
  {
    name: "Prince Yadav",
    designation: "Vice-President",
    Year: "Final Year",
    Branch: "ECED",
    photo: "/members/gallery3.JPG",
  },
{
name: "Bhavya Srivastava",
designation: "Secretery",
Year: "Final Year",
Branch: "CSE",
photo: "/members/IMG-20250906-WA0007 - Bhavya Srivastava (2).jpg",
},

];
function Incharge() {
    return (  
        <>
      <Typography
             variant="h4"
             component="h1"
             align="center"
             sx={{ fontFamily: 'serif', color: 'gray', mb: 1, mt: 4 }}
           >
             Our Teams
           </Typography>
     
           <Typography
             variant="h5"
             component="h2"
             align="center"
             sx={{ fontFamily: 'serif', color: 'gray', mb: 4 }}
           >
             Club Incharges
           </Typography> 

            <Grid container spacing={25} justifyContent="center" sx={{ mt: 2 }}>
              {members.map((member, index) => (
                <Grid item xs={12} sm={6} md={4} key={index} spacing={4} >
                  <Card 
                   className=''
                   sx={{
                        scale:0.9,
                     maxWidth: 500,
                     width: 300,
                     height: 480,
                     borderRadius: 3,
                     boxShadow: 3,
                     "&:hover": { boxShadow: 10 , scale:0.92 },
                     overflow: "hidden",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={member.photo}
                      // className='rounded-[9rem]'
                      // className='rounded-bl-[8rem] rounded-br-[8rem]'
                      alt={member.name}
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
                      <Typography variant="body3" color="text.secondary">
                        {member.designation}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {member.Year}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {member.Branch}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
        </>
     );
}

export default Incharge;