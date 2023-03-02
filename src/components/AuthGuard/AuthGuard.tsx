import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { useGetLoggedUserQuery } from "@/redux/api/usersApiSlice";
import { userActions } from "@/redux/user-slice";
interface Props {
  children: React.ReactNode;
}
const AuthGuard = ({ children }: Props) => {
  const user = useSelector((state: RootState) => state.user.user);

  const shouldNotFetchData: boolean =
    typeof window !== "undefined" &&
    user === undefined &&
    localStorage.getItem("isLogged") === "true" &&
    localStorage.getItem("userId") !== null;

  const { data } = useGetLoggedUserQuery(
    typeof window !== "undefined" && localStorage.getItem("userId"),
    {
      skip: !shouldNotFetchData,
    }
  );

  return <>{children}</>;
};

export default AuthGuard;
