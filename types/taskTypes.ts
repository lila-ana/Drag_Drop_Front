export type TaskInputTypes = {
  id?: string;
  title: string;
  description: string;
  status: "To Do" | "In Progress" | "Done";
  priority: "Low" | "Medium" | "High";
  dueDate: Date | null;
  createdDate: Date;
  assignees?: string[];
  tags?: any[];
  subtasks?: any[];
  comments?: string[];
};
