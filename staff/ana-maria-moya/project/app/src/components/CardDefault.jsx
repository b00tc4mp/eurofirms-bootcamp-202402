import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
   
  export function CardDefault({title, description, image}) {
    return (
      <Card className=" bg-green-200 flex-grow flex-col mt-6 w-96">
       
        <CardHeader className="relative ">
          <img
            src={image}
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {title}
          </Typography>
          <Typography>
            {description}
          </Typography>
        </CardBody>
        
      </Card>
    );
  }
  
  export default CardDefault