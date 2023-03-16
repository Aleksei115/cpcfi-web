import { UIProvider } from '../context/UI';
import { ModalProvider } from '../context/Modal';
import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "../utils/api";

import "../main.scss"

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (


    <SessionProvider session={session}>
      <UIProvider>
        <ModalProvider>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <Component {...pageProps} />
        </ModalProvider>
      </UIProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
