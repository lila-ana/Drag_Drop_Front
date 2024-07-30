import React, { ReactNode } from "react";
import { useDroppable } from "@dnd-kit/core";

interface DroppableProps {
  id: string;
  children: ReactNode;
}

const Droppable: React.FC<DroppableProps> = ({ id, children }) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  const style: React.CSSProperties = {
    color: isOver ? "green" : undefined,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
};

export default Droppable;
