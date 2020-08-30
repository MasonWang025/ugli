import React from "react";
import ReactDOM from "react-dom";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { Checkbox, Input } from "@material-ui/core";
import { Input as AntdInput } from "antd";

import "../styles/pages/delivery.scss";


export default function Delivery() {
  const { control, handleSubmit } = useForm();

  const onSubmit = data => {
    alert(JSON.stringify(data));
  };

  return (
    <div><p>helloi</p></div>
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <label>First Name</label>
    //   <Controller
    //     as={Input}
    //     name="firstName"
    //     control={control}
    //     defaultValue=""
    //     className="materialUIInput"
    //   />
    //   <label>First Name</label>
    //   <Controller
    //     as={AntdInput}
    //     name="lastName"
    //     control={control}
    //     defaultValue=""
    //   />
    //   <label>Ice Cream Preference</label>
    //   <Controller
    //     name="iceCreamType"
    //     as={Select}
    //     options={[
    //       { value: "chocolate", label: "Chocolate" },
    //       { value: "strawberry", label: "Strawberry" },
    //       { value: "vanilla", label: "Vanilla" }
    //     ]}
    //     control={control}
    //     defaultValue=""
    //   />
    //   <Controller
    //     name="Checkbox"
    //     control={control}
    //     render={props => (
    //       <Checkbox
    //         onChange={e => props.onChange(e.target.checked)}
    //         checked={props.value}
    //       />
    //     )}
    //   />

    //   <input type="submit" />
    // </form>
  );
}
