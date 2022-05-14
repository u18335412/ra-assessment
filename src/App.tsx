import React, { useState } from "react";
import { Box } from "./components/Box";
import { useRef } from "react";
import { motion } from "framer-motion";

export const App = () => {
  const constraintsRef = useRef(null);

  const remove = (idx: number) => {
    setBoxes((boxes) => [
      ...boxes.filter((box) => box.props.properties.idx !== idx),
    ]);
  };

  const clone = (props: any) => {
    setBoxes((boxes) => {
      return [
        ...boxes,
        <Box
          properties={{ ...props.properties, idx: boxes.length }}
          clone={clone}
          remove={remove}
        />,
      ];
    });
  };

  const [boxes, setBoxes] = useState([
    <Box properties={{ idx: 0 }} remove={remove} clone={clone} />,
  ]);

  return (
    <motion.div
      ref={constraintsRef}
      className="min-h-screen h-full overflow-hidden w-screen bg-lime-50"
    >
      {boxes.map((box, idx) => {
        return (
          <motion.div
            className="h-24 w-24 bg-indogo-500"
            drag
            dragConstraints={constraintsRef}
            key={idx}
          >
            {box}
          </motion.div>
        );
      })}
    </motion.div>
  );
};
