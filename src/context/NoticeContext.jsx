import { createContext, useEffect, useState } from "react";
import noticeData from "../data/noticeData";

export const NoticeContext = createContext();

const NoticeProvider = ({ children }) => {

  const [notices, setNotices] = useState(() => {

    const saved = localStorage.getItem("notices");

    return saved ? JSON.parse(saved) : noticeData;

  });

  useEffect(() => {

    localStorage.setItem(
      "notices",
      JSON.stringify(notices)
    );

  }, [notices]);

  return (

    <NoticeContext.Provider
      value={{
        notices,
        setNotices,
      }}
    >

      {children}

    </NoticeContext.Provider>

  );

};

export default NoticeProvider;