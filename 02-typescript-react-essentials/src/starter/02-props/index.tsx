import React from "react";

type ComponentProps={ name: string; id: number;children?:React.ReactNode };

function Component(props: ComponentProps){
  return (
    <div>
      <h2>Name : {props.name}</h2>
      <h2>ID : {props.id}</h2>
      {props.children}
    </div>
  );
}
export default Component;
