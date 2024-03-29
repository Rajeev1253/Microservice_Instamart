import { Stack } from "@mui/material";
import { useState, CSSProperties } from "react";
import { HashLoader } from "react-spinners";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function SuspenseLoader() {
  let [loading, setLoading] = useState(true);


  return (
    <div className="sweet-loading">
     <Stack  height={"90vh"} justifyContent={"center"} alignItems={"center"}>

      <HashLoader
        loading={loading}
        size={150}

        color="pink"
      />
     </Stack>
      {/* <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> */}
    </div>
  );
}

export default SuspenseLoader;
