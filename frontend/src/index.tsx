import React, { useState } from "react";

const MyComponent: React.FC = () => {
  const [product, setProduct] = useState("Amazon Web Services");
  const [userInput, setUserInput] = useState("");
  const [domTree, setDomTree] = useState("");
  const [screenshot, setScreenshot] = useState<File | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!screenshot) return;

    const formData = new FormData();
    formData.append("user_input", userInput);
    // formData.append("product", product);
    // formData.append("dom_tree", domTree);
    // formData.append("screenshot", screenshot);

    const response = await fetch("http://localhost:8000/gandalf", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="User Input"
      />
    </form>
  );
};

export default MyComponent;
