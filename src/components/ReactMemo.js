import React, { useState, memo } from "react";

const SkillItem = memo(({ skill }) => {
  console.log("Rendering skill:", skill);
  return <li id="item-jumbotron">{skill}</li>;
});

const ReactMemo = () => {
  const [input, setInput] = useState("");
  const [skills, setSkills] = useState([]);

  const handleInputValue = (event) => {
    setInput(event.target.value);
  };

  const handleAddSkill = () => {
    if (input.trim() !== "") {
      setSkills((prevSkills) => [...prevSkills, input]);
      setInput("");
    }
  };

  //JSX

  return (
    <div id="main">
      <hr />
      <hr />
      <h1>React.memo</h1>
      <input
        id="skill-input"
        type="text"
        value={input}
        onChange={handleInputValue}
      />
      <button id="skill-btn" onClick={handleAddSkill}>
        Add Skill
      </button>
      <ul>
        {skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </ul>
    </div>
  );
};

export default ReactMemo;
