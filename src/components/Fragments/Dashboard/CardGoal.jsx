import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../Elements/Card";
import { Icon } from "../../Elements/Icon";
import CompositionExample from "../../Elements/GaugeChart";
import SimpleBackdrop from "../../Elements/Backdrop"; // Pastikan path-nya benar

const CardGoal = () => {
  const [goals, setGoals] = useState({ presentAmount: 0, targetAmount: 0 });
  const [isLoading, setIsLoading] = useState(true);

  const chartValue = goals.presentAmount * 100 / goals.targetAmount;

  const getData = async () => {
    try {
      const refreshToken = localStorage.getItem("refreshToken");

      const response = await axios.get(
        "https://jwt-auth-eight-neon.vercel.app/goals",
        {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        }
      );

      setGoals({
        presentAmount: response.data.data[0].present_amount,
        targetAmount: response.data.data[0].target_amount,
      });

      console.log(response);
      setIsLoading(false);
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          console.error("Session Has Expired. Please Login.");
          // Lakukan navigasi atau tindakan yang sesuai di sini
        } else {
          console.error(error.response);
        }
      }
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="relative">
      {isLoading && (
        <SimpleBackdrop isLoading={isLoading} setIsLoading={setIsLoading} />
      )}
      <Card
        title="Goals"
        desc={
          <div className="p-2">
            <div className="flex justify-between">
              <div className="flex">
                <span className="text-2xl font-bold me-4 self-center text-black">
                  ${goals.presentAmount}
                </span>
                <div className="p-2 bg-gray-05 rounded-md box-border">
                  <Icon.Edit className="text-black" />
                </div>
              </div>
              <div className="text-black">Nov, 2023</div>
            </div>
            <div className="border-b-2 my-4 border-gray-05 dark:border-dark"></div>
            <div className="flex justify-between">
              <div>
                <div className="flex mt-3 mb-10">
                  <div>
                    <Icon.Award className="text-black" />
                  </div>
                  <div className="ms-2">
                    <span className="text-black">Target Achieved</span>
                    <br />
                    <span className="font-bold text-xl text-black">
                      ${goals.targetAmount}
                    </span>
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <Icon.Target className="text-black" />
                  </div>
                  <div className="ms-2">
                    <span className="text-black">This Month Target</span>
                    <br />
                    <span className="font-bold text-xl text-black">
                      ${goals.presentAmount}
                    </span>
                  </div>
                </div>
              </div>
              <div className="ms-4 text-center">
                <CompositionExample desc={chartValue} />
                <div className="flex justify-between">
                  <span className="text-black">$0</span>
                  <span className="font-bold text-2xl text-black">12K</span>
                  <span className="text-black">$20K</span>
                </div>
                <div className="mt-2 text-black">Target vs Achievement</div>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default CardGoal;
