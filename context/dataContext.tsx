import React, { createContext, useContext } from "react";
import useSWR from "swr";
import { DataContextType, DataProviderProps } from "@/types/dataContextType";
import { fetcher } from "@/utils/apiFetchers";

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const {
    data: items,
    error: itemsError,
    mutate: mutateItems,
  } = useSWR("/api/items", fetcher);
  const {
    data: users,
    error: usersError,
    mutate: mutateUsers,
  } = useSWR("/api/users", fetcher);

  return (
    <DataContext.Provider
      value={{ items, itemsError, mutateItems, users, usersError, mutateUsers }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
