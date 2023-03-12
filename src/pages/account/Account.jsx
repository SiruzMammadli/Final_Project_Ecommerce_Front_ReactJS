import React from "react";
import AccountSidebar from "./components/account-sidebar/AccountSidebar";
import "./styles/account.scss";
import AccountAuthor from "./components/accout-author/AccountAuthor";
import getCurrentUser from "../../common/hooks/getcurrentuser/getCurrentUser";
import AccountMain from "./components/account-main/AccountMain";

export default function Account() {
  const [userData, setUserData] = React.useState(null);

  React.useEffect(() => {
    const currentUser = async () => {
      const data = await getCurrentUser();
      setUserData(data);
    };
    currentUser();
  }, []);

  return (
    <section className="account">
      <div className="container">
        <div className="account_wrapper">
          {userData ? (
            <React.Fragment>
              <AccountAuthor user={userData} />
              <div className="account_main">
                <AccountSidebar />
                <AccountMain/>
              </div>
            </React.Fragment>
          ) : (
            <div className="loading">Loading...</div>
          )}
        </div>
      </div>
    </section>
  );
}
