import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";
import CardBalance from "../components/Fragments/Dashboard/CardBalance";
import CardStatistic from "../components/Fragments/Dashboard/CardStatistic";
import CardTransaction from "../components/Fragments/Dashboard/CardTransaction";
import CardExpenseBreakdown from "../components/Fragments/Dashboard/CardExpenseBreakdown";
import CardBill from "../components/Fragments/Dashboard/CardBill";
import CardGoal from "../components/Fragments/Dashboard/CardGoal";

const DashboardPage = () => {
  return (
    <MainLayout type="dashboard"> 
    {/* top content start*/} 
    <div className="md:grid md:grid-cols-3 md:gap-x-6"> 
      <CardBalance /> 
      <CardGoal />
      <CardBill />
    </div> 
    {/* top content end*/} 
    {/* bottom content start*/} 
    <div className="md:grid md:grid-cols-3 md:gap-x-6">
      <div className="md:col-span-1">
        <CardTransaction />
      </div>
      <div className="md:col-span-2 flex flex-col flex-1">
        <CardStatistic /> 
        <CardExpenseBreakdown />
      </div>
    </div> 
    {/* bottom content end*/} 
    </MainLayout>
  );
};

export default DashboardPage;