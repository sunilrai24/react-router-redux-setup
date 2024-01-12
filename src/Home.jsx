import { useState } from "react";

function Home() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    exprience: [],
  });
  const inputHandler = (e) => {
    const { name, value, type, checked } = e.target;
    if (type !== "checkbox") {
      setFormData((preVal) => ({
        ...preVal,
        [name]: value,
      }));
    } else {
      setFormData((preVal) => {
        let newExp = [...preVal.exprience];
        if (checked) {
          newExp.push(name);
        } else {
          newExp = newExp.filter((v) => v !== name);
        }

        return {
          ...preVal,
          exprience: newExp,
        };
      });
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <label htmlFor="name">Name :</label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={inputHandler}
        />
        <br />
        <label htmlFor="address">Address :</label>
        <input
          type="text"
          name="address"
          id="address"
          value={formData.address}
          onChange={inputHandler}
        />
        <br />

        {/* <label htmlFor="">Exprience : </label>
        <input
          type="checkbox"
          id="react"
          name="reactjs"
          onChange={inputHandler}
          checked={formData.exprience === "react"}
        />
        <label htmlFor="react">React.js</label>
        <input
          type="checkbox"
          id="javascript"
          name="javascript"
          onChange={inputHandler}
          checked={formData.exprience === "javascript"}
        />
        <label htmlFor="javascript">Java-script</label> */}
        <label htmlFor="">Exprience : </label>
        <input
          type="checkbox"
          name="java"
          checked={formData.exprience.java}
          onChange={inputHandler}
        />
        <label htmlFor="">Java</label>
        <input
          type="checkbox"
          name="javascript"
          checked={formData.exprience.javascript}
          onChange={inputHandler}
        />
        <label htmlFor="">Java-script</label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Home;
