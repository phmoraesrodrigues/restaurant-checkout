import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface CategoryProps {
  name: string;
  imageId: string;
}

const Category = (props: CategoryProps) => {
  const { name, imageId } = props;

  return (
    <>
      <Card elevation={0} sx={{ display: "flex", my: 3 }}>
        <CardMedia
          component="img"
          sx={{ width: 100, height: 80, borderRadius: 1 }}
          image={`/images/${imageId}.jpg`}
          alt={name}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardContent
            sx={{
              flex: "1 0 auto",
              display: "flex",
              justifyContent: "center",
              pt: 3,
            }}
          >
            <Typography component="div" variant="h5">
              Checkout our {name}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </>
  );
};

export default Category;
