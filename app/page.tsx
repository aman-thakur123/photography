
import Header from "./homepage/Header";
import Bgimage from "./Bgimage";
import Grid from "./homepage/Grid";
import Carousel from "./homepage/Carousel";
import Copyright from "./homepage/Copyright";
 export default function Home() {
  return (
    <div>
      <Header></Header>
      <Bgimage></Bgimage>
      <Grid></Grid>
      <Carousel></Carousel>
      <Copyright></Copyright>
    </div>
  );
}
