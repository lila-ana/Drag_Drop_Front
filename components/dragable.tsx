import React, { ReactNode } from "react";
import { useDraggable } from "@dnd-kit/core";
import { DraggableProps } from "@/types/draggable";

const Draggable: React.FC<DraggableProps> = ({ id, children }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const style: React.CSSProperties = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  );
};

export default Draggable;
