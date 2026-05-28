// import './App.css'
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";

// import InfoBox from "./infoBox";
// import SearchBox from "./SearchBox";
import WeatherApp from "./WeatherApp";

// import DeleteIcon from "@mui/icons-material/Delete";
// import Fingerprint from "@mui/icons-material/Fingerprint";

function App() {
  // let handleClick = () => {
  //   console.log("button was clicked!");
  // };

  return (
    <>
      {/* <h1>This Is My Material Ui Demo</h1>
      <Button variant="contained" onClick={handleClick}>
        Click!
      </Button>

      <Button variant="contained" onClick={handleClick} disabled>
        disabled
      </Button>

      <Button variant="contained" onClick={handleClick} color="error">
        oops!
      </Button>

      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>

      <IconButton aria-label="fingerprint" color="secondary">
        <Fingerprint />
      </IconButton> */}
      
      <WeatherApp/>
    </>
  );
}

export default App;
