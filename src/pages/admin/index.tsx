import LoginForm from "@/components/AdminPage/LoginForm";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

import Spinner from "@/components/UI/Spinner";
const AdminPage = () => {
  const router = useRouter();
  let isLogged =
    typeof window !== "undefined" &&
    sessionStorage.getItem("isLogged") === "true";

  if (isLogged) {
    router.push("/admin/dashboard");
  }

  return (
    <main>
      <LoginForm />
    </main>
  );
};

export default AdminPage;
