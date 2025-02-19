import { useState } from "react";

// import { Search, Home, User } from "lucide-react";

import TextInput from "./TextInput.jsx";

const IconExample = () => {
  
  const [text, setText] = useState("");
  return (
    <TextInput
    label="Enter This"
    placeholder="Type something..."
    value={text}
    onChange={(e) => setText(e.target.value)}
  />
  );
};

export default IconExample;
