import { useContext } from "react";

import { ISessionContext, SessionContext } from "@/context/session-context";

const useSession = () => {
  const sessionContext = useContext(SessionContext);

  return sessionContext as ISessionContext;
};

export default useSession;