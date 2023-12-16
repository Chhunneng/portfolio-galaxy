import { Box } from "@mui/material";
import myCV from "../../assets/files/myCV.pdf";
import "./my-cv.scss";

export default function MyCV(): JSX.Element {
  return (
    <Box className="MyCV">
      <object data={myCV} aria-labelledby="pdf"></object>
    </Box>
  );
}
