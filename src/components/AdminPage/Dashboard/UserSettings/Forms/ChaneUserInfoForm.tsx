import React, { useEffect, useState } from "react";
import HeadingH3 from "@/components/Typography/Headings/HeadingH3";
import Button from "@/components/UI/Button";
import { User } from "@/models/models";
import Warning from "@/components/Typography/Warning";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "@/redux/user-slice";
import { RootState } from "@/redux/store";
import { useUpdateUserInformationsMutation } from "@/redux/api/usersApiSlice";
import Spinner from "@/components/UI/Spinner";
import styles from "./ChangeUserInfo.module.scss";
import Success from "@/components/Typography/Success";
interface EditedUser extends User {
  confirmPassword: string;
}
const ChaneUserInfoForm = () => {
  const [updateUser, { isLoading, isSuccess }] =
    useUpdateUserInformationsMutation();
  const { email } = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();
  const [editedUser, setEditedUser] = useState<EditedUser>({
    email: email,
    phone: undefined,
    name: "",
    password: "",
    confirmPassword: "",
  });
  const [errorType, setErrorType] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  const submitChanges = (e: React.FormEvent<HTMLFormElement>) => {
    setErrorType("");
    e.preventDefault();
    if (editedUser.password.trim() !== "" && editedUser.password.length < 6) {
      setErrorType("New password is to short.");
    } else if (
      editedUser.phone !== null &&
      editedUser.phone?.toString().length < 9
    ) {
      setErrorType("Invalid phone number");
    } else {
      updateUser(editedUser)
        .unwrap()
        .then((data) => {
          dispatch(userActions.setUser(data.user));
        })
        .catch((error) => {
          setErrorType(error.data.message);
        });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setEditedUser({
        email: email,
        phone: undefined,
        name: "",
        password: "",
        confirmPassword: "",
      });
    }
  }, [isSuccess]);
  return (
    <form onSubmit={submitChanges}>
      <HeadingH3>Change your informations</HeadingH3>
      <label htmlFor="newPassword">New password</label>
      <input
        onChange={onChange}
        value={editedUser.password}
        type="text"
        id="newPassword"
        name="password"
      />
      <label htmlFor="newName">New name</label>
      <input
        onChange={onChange}
        value={editedUser.name}
        type="text"
        id="newName"
        name="name"
      />
      <label htmlFor="newPhone">New phone</label>
      <input
        onChange={onChange}
        value={editedUser.phone}
        type="tel"
        id="newPhone"
        name="phone"
      />
      <label htmlFor="confirmPassword">Confirm with password</label>
      <input
        onChange={onChange}
        value={editedUser.confirmPassword}
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        required
      />
      {errorType !== "" && <Warning>{errorType}</Warning>}
      {isSuccess && <Success>Informations updated.</Success>}
      <Button type="submit">Confirm</Button>{" "}
      {isLoading && (
        <div className={styles.loader}>
          <Spinner />
        </div>
      )}
    </form>
  );
};

export default ChaneUserInfoForm;
