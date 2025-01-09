import accounts from "../../../data/accounts";
import Card from "../../Elements/Card";
import Stepper from "../../Elements/Stepper";
import { Link } from "react-router-dom";
import { Icon } from "../../Elements/Icon";
import { useContext } from "react";
import { ThemeContext } from "../../../context/themeContext";

const CardBalance = () => {
  const { theme } = useContext(ThemeContext);

  const balanceCard = accounts.map((account) => (
    <div key={account.id} className={`p-2 ${theme.name}`}>
      <div className="flex justify-between">
        <div className="text-2xl font-bold text-black">${account.balance}</div>
        <div>
          <Link to="/balance" className="text-primary">All account</Link>
        </div>
      </div>
      <div className="border-b-2 my-4 border-gray-05"></div>
      <div className="flex justify-between bg-primary text-white p-4 rounded-md">
        <div>
          <div className="text-black">Account Type</div>
          <span className="text-xl font-bold text-black">{account.accountType}</span>
          <br />
          <span className="text-black">{account.accountNumber}</span>
        </div>
        <div className="flex flex-col justify-between">
          {account.logo && (
            <img
              className="ms-auto"
              src={`/images/${account.logo}`}
              alt={`${account.accountType} logo`}
            />
          )}
          <div className="flex">
            <span className="text-xl font-bold text-black">${account.balance}</span>
            <div className="bg-white max-w-min rounded-full ps-1 pt-1 ms-4">
              <Icon.ArrowUpRight className="text-primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <Card title="Total Balance" desc={<Stepper desc={balanceCard} />} />
  );
};

export default CardBalance;
