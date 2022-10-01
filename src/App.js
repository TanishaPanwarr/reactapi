/*import React from "react";
import Data from "./datacom/Datasys";
import { System } from "./datacom/system";
const App=()=>{
  return (
    <>
      <h1>App component is running</h1>
      {
        Data.map((t)=>{
          return (
            <>
              <System sysname={t.sysname} Price={t.Price} Ram={t.Ram} Warranty={t.Warranty}/>
            </>
          )
        }) 
      }
    </>
  )
}
export default App;*/





















import React from "react";
import { Data} from "./component/Data";
import Product from "./component/product";
const App=()=>{
  return (
    <>
      <h1> Product App component is Running</h1>
      <h1>Product List</h1>
      {
        Data.map((v)=>{
          return <Product pid={v.pid} pname={v.pname} cmp={v.cmp} ctg={v.ctg} wrnt={v.wrnt}/>
        }

        )
      }
    </>
  )
}
export default App;