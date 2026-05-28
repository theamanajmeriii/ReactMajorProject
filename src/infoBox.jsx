import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import "./infoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://imgs.search.brave.com/oqCLoe5keHzrRY6vl7CjKfe0WWN122pt_eywS0-uj1Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2NjE4MDkw/MTg3ODAtYjM1YzJj/NjEwNmM3P2ZtPWpw/ZyZxPTYwJnc9MzAw/MCZpeGxpYj1yYi00/LjEuMCZpeGlkPU0z/d3hNakEzZkRCOE1I/eHpaV0Z5WTJoOE1Y/eDhaSFZ6ZEhsOFpX/NThNSHg4TUh4OGZE/QT0";

  const HOT_URL =
    "https://imgs.search.brave.com/mYMtUc7NhTEoXOnD5cvUnrCOCzJCtx5cygfHPC6Hz5I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI3/MDYyMDY1MC9waG90/by9oZWF2ZW4tc2Nl/bnQuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPU5qRFo4NzBx/WFpuZ1FxMmNzMGZ6/Rkp1YW5lNFhTRzRk/eWV6MUctWldjVzg9"
  const COLD_URL =
     "https://imgs.search.brave.com/1NfWQF1ar9uFZNwUXlnBR4ReFuhHouEj3w2aI0scNEM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI4/NDAyODQ3MC9waG90/by9jb2xkLWFuZC1s/b25lbGluZXNzLW1h/bGUtaW4tZG93bi1j/b2F0LXdpdGgtZnVy/LWhvb2QtZmVlbC13/YXJtLWFuZC1jb21m/b3J0YWJsZS1mYXZv/cml0ZS1zZWFzb24u/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUtRcGdHSHozVGU0/eUNMd0ZGMFVmZTRC/MnZmcm15Nkh2M2Y1/QlFXQXloZnc9"
  const RAIN_URL =
     "https://imgs.search.brave.com/ykNHZHztRbXfDyF-rqbh-swXucWUixWh2YepusShvec/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvNDU5/NDUxL3BleGVscy1w/aG90by00NTk0NTEu/anBlZz9hdXRvPWNv/bXByZXNzJmNzPXRp/bnlzcmdiJmRwcj0x/Jnc9NTAw"

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={
                info.humidity > 80
                  ? RAIN_URL
                  : info.temp > 15
                    ? HOT_URL
                    : COLD_URL
              }
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {info.city} {
                info.humidity > 80
                  ? <ThunderstormIcon/>
                  : info.temp > 15
                    ? <SunnyIcon/>
                    : <AcUnitIcon/>
              }
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary" }}
                component={"span"}
              >
                <div>Temperature = {info.temp}&deg;C</div>
                <div>Humidity = {info.humidity}</div>
                <div>Min temp = {info.tempMin}&deg;C</div>
                <div>Max temp = {info.tempMax}&deg;C</div>
                <div>
                  the weather feels like "<i>{info.weather}</i>"{" "}
                  {info.feelsLike}&deg;C
                </div>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}
