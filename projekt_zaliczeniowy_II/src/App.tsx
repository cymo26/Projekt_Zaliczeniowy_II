//import React from "react";
import '@mantine/core/styles.css'

import {Routing} from "./features/Routing.tsx";
import {BrowserRouter} from "react-router-dom";
import {createTheme, MantineProvider} from "@mantine/core";

const theme = createTheme({

});

function App() {
  return (
      <MantineProvider theme ={theme}>
            <BrowserRouter>
                    <Routing/>
            </BrowserRouter>
      </MantineProvider>
  );
}

export default App
