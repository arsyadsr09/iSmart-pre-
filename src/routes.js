import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Layouts from "./layouts"

import Home from "./pages/Home"
import History from "./pages/History"
import SearchPage from "./pages/Search"

export const Routes = () => (
  <BrowserRouter>
    <Layouts>
      <Route path="/" exact component={Home} />
      <Route path="/home" exact component={Home} />
      <Route path="/history" exact component={History} />
      <Route path="/search" exact component={SearchPage} />
    </Layouts>
  </BrowserRouter>
)
