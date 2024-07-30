import { ReactNode } from "react";

export interface DraggableProps {
  id: string;
  children: ReactNode;
}
export interface InputProps {
  onSubmit: (input: string) => void;
}

export interface TaskProps {
  id: number;
  title: string;
}

export interface ColumnProps {
  id: string;
  tasks: TaskProps[];
}

export interface DnDCards {
  title: string;
  id: number;
}
export interface CardsProps {
  id: string;
  tasks: DnDCards[];
}
