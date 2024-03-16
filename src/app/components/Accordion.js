'use client'
import useToggle from "./useToggle";

export const Accordion = () => {

  const [expanded,toggle] = useToggle()



  return (
    <div>
      <button onClick={toggle}>
        Header <span>{expanded ? '-' : '+'}</span>
      </button>
      {expanded && <div>Content</div>}
    </div>
  );
};

export default Accordion;