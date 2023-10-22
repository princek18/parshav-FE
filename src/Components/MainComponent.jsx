import { useEffect, useState } from "react";
import { Grid } from "../Sub-Components/Grid";
import { PopUpModal } from "./PopUpModal";
import { Header } from "./Header";
import axios from "axios";
import { baseURL } from "../App";

export const MainComponent = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const [dataSets, setDataSets] = useState([]);
  const getDataSets = () => {
    axios({
      method: "get",
      url: `${baseURL}getDockets`,
    })
      .then((res) => {
        setDataSets(res.data?.data);
      })
      .catch((err) => {
        console.log(err.response.data.error);
      });
  };

  useEffect(() => {
    getDataSets();
  }, []);
  return (
    <>
      <Header handleOpen={handleOpen} />
      <div style={{ height: "90vh", width: "90vw" }}>
        <Grid dataSets={dataSets} />
      </div>
      <PopUpModal
        open={open}
        handleClose={handleClose}
        getDataSets={getDataSets}
      />
    </>
  );
};
