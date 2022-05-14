import React, { Ref, useState } from "react";
import { PopoverMenu } from "./popover";
import { motion } from "framer-motion";

type Props = {
  clone?: any;
  remove?: any;
  styles?: React.CSSProperties;
  properties?: any;
};

const boxStyles: React.CSSProperties = {
  width: "w-[100px]",
  height: "h-[100px]",
  backgroundColor: "bg-[#f00]",
  borderRadius: "rounded-[5px]",
};

export const Box = (props: Props) => {
  const [label, setLabel] = useState(props?.properties?.label || "Bar");
  const [color, setColor] = useState(
    props?.properties?.color || boxStyles.backgroundColor
  );
  const [width, setWidth] = useState(
    props?.properties?.width || boxStyles.width
  );
  const [height, setHeight] = useState(
    props?.properties?.height || boxStyles.height
  );
  const [borderRadius, setBorderRadius] = useState(
    props?.properties?.shape || boxStyles.borderRadius
  );

  return (
    <motion.div
      className={`${width} ${height} ${color} ${borderRadius} flex items-center  transition-all`}
    >
      <input
        value={`${label.slice(0, 3)}`}
        readOnly
        type="text"
        className={`text-sm w-full bg-transparent pointer-events-none font-semibold p-1 absolute font-bold`}
      />

      <PopoverMenu
        setHeight={setHeight}
        setColor={setColor}
        setWidth={setWidth}
        setLabel={setLabel}
        setShape={setBorderRadius}
        properties={{
          label,
          color,
          width,
          height,
          shape: borderRadius,
        }}
        clone={props.clone}
        remove={props.remove}
      />
    </motion.div>
  );
};
