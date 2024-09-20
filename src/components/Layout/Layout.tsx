import { decode } from "js-base64";
import { useEffect } from "react";
import { Outlet } from "react-router";
import { useNavigate, useSearchParams } from "react-router-dom";
import Cookies from "universal-cookie";

import { useAppDispatch } from "../../hooks/hooks";
import { useAuthStore } from "../../hooks/useAuthStore";
import { onLogin } from "../../store/slices/auth";
import { cifrar } from "../../utils";
import Navbar from "../navbar/Navbar";

const cookies = new Cookies();
export function Layout() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const codeSSO: string | null = searchParams.get("x");
  const { status } = useAuthStore();
  if (codeSSO) {
    const dataUser = JSON.parse(decode(codeSSO));
    const { email, id, session, username } = dataUser;

    // Cookies
    cookies.set("dn", cifrar(username), { maxAge: 3600 });
    cookies.set("e", cifrar(email), { maxAge: 3600 });
    cookies.set("u", cifrar(id), { maxAge: 3600 });
    cookies.set("JSESSIONID", session, { maxAge: 3600 });
    dispatch(onLogin(username));
  }

  useEffect(() => {
    // if (codeSSO && status === "authenticated") {
    navigate("/producto-supply-chain");
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return (
    <>
      <Navbar />
      <div className="mb-3">
        <Outlet />
      </div>
    </>
  );
}
