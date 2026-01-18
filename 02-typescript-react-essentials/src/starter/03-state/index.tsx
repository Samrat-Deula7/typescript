import { useState } from "react";

type Link={
  id:number;
  url:string;
  text:string;
}
const navLinks=[
  {
    id:1,
    url:'some url',
    text:'some text',
  },
  {
    id:2,
    url:'some url',
    text:'some text',
  },
  {
    id:3,
    url:'some url',
    text:'some text',
  }
]

function Component() {
  const[text,setText]=useState('shakeAndBake')

  // Type script will infer this type to be never[] so we need to add generic
  const[list,setList]=useState<string[]>([]);
  const[links,setLinks]=useState<Link[]>(navLinks);
  return (
    <div>
      <h2 className="mb-1">React & Typescript</h2>
      <button className="btn btn-center" onClick={()=>{
        setText("samrat");
        setLinks([...links,{id:4,url:'hello',text:'hi'}])
      }}>Click me</button>
    </div>
  );
}
export default Component;
