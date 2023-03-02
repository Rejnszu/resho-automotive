import LoginForm from "@/components/AdminPage/LoginForm/LoginForm";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

const AdminPage = () => {
  const router = useRouter();
  let isLogged =
    typeof window !== "undefined" &&
    localStorage.getItem("isLogged") === "true";

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
