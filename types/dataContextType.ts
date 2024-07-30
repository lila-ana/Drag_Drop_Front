import { ReactNode } from "react";

export interface DataContextType {
  items: any[] | undefined;
  itemsError: any;
  mutateItems: () => void;
  users: any[] | undefined;
  usersError: any;
  mutateUsers: () => void;
}

export interface DataProviderProps {
  children: ReactNode;
}
