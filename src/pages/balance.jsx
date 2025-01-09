import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";

const BalancePage = () => {
  return (
    <MainLayout type="balance">
      {/* top content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card title={<span className="text-black">Balances</span>} />
        <Card title={<span className="text-black">&nbsp;</span>} />
        <Card 
          title={<span className="text-black">&nbsp;</span>}
          desc={<span className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis possimus excepturi temporibus deserunt modi nam velit quos, ad facere dignissimos in accusamus, libero doloribus impedit ab. Culpa saepe dignissimos explicabo?</span>}
        />
      </div>
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card 
          desc={<span className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, eaque. Sed, voluptatibus officiis earum maxime deserunt quia eligendi, deleniti fugit vitae accusamus porro sequi. Debitis quos in ut? Provident, magni.</span>}
        />
        <Card />
        <Card />
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default BalancePage;
