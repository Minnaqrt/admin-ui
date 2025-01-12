import { useContext } from "react";
import Header from "../Fragments/Header";
import Navbar from "../Fragments/Navbar";
import { ThemeContext } from "../../context/themeContext";
import SimpleBackdrop from "../Elements/Backdrop";
import CustomizedSnackbars from "../Elements/SnackBar";
import { NotifContext } from "../../context/notifContext";

const MainLayout = (props) => {
  const { children } = props;
  const { theme } = useContext(ThemeContext);
  const { msg, setMsg, open, setOpen, isLoading, setIsLoading } = useContext(NotifContext);

  return (
    <div className={`flex bg-special-mainBg w-screen min-h-screen max-w-full ${theme?.name}`}>
      {/* Navbar */}
      <Navbar />

      <div className="w-screen">
        {isLoading && (
          <SimpleBackdrop isLoading={isLoading} setIsLoading={setIsLoading} />
        )}
        {msg && (
          <CustomizedSnackbars
            severity={msg.severity}
            message={msg.desc}
            open={open}
            setOpen={setOpen}
          />
        )}

        {/* Header */}
        <Header />

        {/* Content */}
        <main className="px-6 py-4">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
