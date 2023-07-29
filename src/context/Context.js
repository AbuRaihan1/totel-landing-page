import { createContext, useState } from "react";

const NotificationContext = createContext();
export const NotificationProvider = ({ children }) => {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <NotificationContext.Provider value={{ showDialog, setShowDialog }}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
