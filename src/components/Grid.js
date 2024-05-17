import React from "react";
import {Header} from "./Header"
import {Navbar} from "./Navbar"
import {Item} from "./Item"

export const Grid = ({lista, titulo}) =>{
  return (
    <main>
      <Header/>
      <Navbar/>
      <div id="content">
        <div className="row">
          <section  className="ps-4 container-fluid">
            <h1>{titulo}</h1>
            <div className="row">
              { lista.map( (programa, index) =>
                <Item key={index} itemParams={programa}/>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
};