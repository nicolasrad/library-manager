import { Grid, Card, CardContent, Skeleton, Box } from "@mui/material";

const BookSkeleton = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={3}>
        {[...Array(6)].map((_, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <Skeleton variant="rectangular" width="100%" height={180} />
              <CardContent>
                <Skeleton width="60%" height={30} />
                <Skeleton width="80%" height={20} />
                <Skeleton width="40%" height={20} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BookSkeleton;
