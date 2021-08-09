import React from "react";
import ReactDOM from "react-dom";

const Box = (props) => {

    // Joel
    // let type;
    // switch (props.type) {
    //   case "red":
    //     type = "danger";
    //     break;
    //   case "orange":
    //     type = "warning";
    //     break;
    //   default:
    //     type = "primary";
    // }

    // if (props.hide === true) {
    //   // return null;
    //   // return <></>
    //   // return <React.Fragment></React.Fragment>

    // }

  return (

    //  Joel:
    // <div className={`alert alert-${type}`} role="alert"> 
    // {props.message}
    // </div>

    // Milad: 
    <div className={`alert alert-${
        props.type === "blue" ? "primary" 
          : props.type === "red" ? "danger" 
          : props.type === "orange" ? "warning" 
          : null
        } ${props.message === "Hidden box" ? "d-none" : null}` 
      } role="alert" >
      <h1>{props.message}</h1>

    </div>
  )
  
};

// Do not edit below this line
const jsx = <>
  <Box type="blue" message="Blue box" />
  <Box type="red" message="Red box" />
  <Box type="orange" message="Orange box" />
  <Box hide type="red" message="Hidden box" />
</>;
const element = document.getElementById("target");

ReactDOM.render(jsx, element);
