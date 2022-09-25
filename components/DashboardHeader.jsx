import { FaBell, FaSignOutAlt } from "react-icons/fa";

export const DashboardHeader = (props) => {

  function logout() {
    localStorage.removeItem("user");
    router.replace("/");
  }

  return(
    <div className="flex items-center justify-between w-full px-[5%] mt-10 flex-col xs:flex-row">
          <div className="flex flex-row items-center gap-4">
            <div className="w-[80px] aspect-square rounded-full bg-white"></div>
            <div>
              <p>Hi there,</p>
              {props.user ? (
                <p className="text-2xl font-semibold">{props.user.displayName}</p>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="flex gap-2 xs:flex-col w-full xs:w-min justify-end">
            <FaBell
              className="text-3xl cursor-pointer mb-1"
              title="Notifications"
            />
            <FaSignOutAlt
              className="text-3xl cursor-pointer"
              onClick={() => {
                logout();
              }}
              title="Logout"
            />
          </div>
        </div>
  )
}