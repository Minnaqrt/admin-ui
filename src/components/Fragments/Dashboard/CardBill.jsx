import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../Elements/Card";

const CardBill = () => {
  const [bills, setBills] = useState([]);

  const getData = async () => {
    try {
      const refreshToken = localStorage.getItem("refreshToken");

      const response = await axios.get(
        "https://jwt-auth-eight-neon.vercel.app/bills",
        {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        }
      );

      console.log("Response data:", response.data);

      if (response.data && Array.isArray(response.data.data)) {
        setBills(response.data.data);
        console.log("Bills data set:", response.data.data);
      } else {
        console.error("Expected an array but received:", response.data.data);
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          console.error("Session Has Expired. Please Login.");
        } else {
          console.error(error.response);
        }
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const billCard = bills.length > 0 ? (
    bills.map((bill) => (
      <div key={bill.id} className="lg:flex justify-between pt-3 pb-3">
        <div className="flex">
          <div className="bg-special-bg me-3 px-4 rounded-lg flex place-content-center flex-col">
            <span className="text-xs text-black">{bill.month}</span>
            <span className="text-2xl font-bold text-black">{bill.date}</span>
          </div>
          <div className="">
            <img className="h-6" src={`/images/${bill.logo}`} alt={`${bill.name} logo`} />
            <span className="font-bold text-black">{bill.name}</span>
            <br />
            <span className="text-xs text-black">Last Charge - {bill.lastCharge}</span>
          </div>
        </div>
        <div className="flex place-content-center flex-col">
          <span className="p-2 border rounded-lg font-bold text-center text-black">
            ${bill.amount}
          </span>
        </div>
      </div>
    ))
  ) : (
    <div>No bills available</div>
  );

  return (
    <Card
      title="Upcoming Bill"
      desc={
        <div className="h-full flex flex-col justify-around">
          {billCard}
        </div>
      }
    />
  );
};

export default CardBill;
