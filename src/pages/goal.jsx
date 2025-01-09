import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";

const GoalPage = () => {
  return (
    <MainLayout type="goal">
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card 
          title={<span className="text-black">Goals</span>} 
          variant="col-span-1" 
        />
        <Card
          variant="md:col-span-2 text-primary"
          title={<span>&nbsp;</span>}
          desc={<span className="text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque quam alias enim ullam deserunt ducimus consequatur cumque hic voluptatem totam ab quibusdam facilis distinctio ratione, sequi vel porro eum.</span>}
        />
        <Card 
          title={<span className="text-black">Expenses Goals by Category</span>} 
        />
        <Card 
          title={<span className="text-black">&nbsp;</span>} 
        />
        <Card
          title={<span className="text-black">&nbsp;</span>}
          desc={<span className="text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque quam alias enim ullam deserunt ducimus consequatur cumque hic voluptatem totam ab quibusdam facilis distinctio ratione, sequi vel porro eum.</span>}
        />
        <Card />
        <Card 
          desc={<span className="text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque quam alias enim ullam deserunt ducimus consequatur cumque hic voluptatem totam ab quibusdam facilis distinctio ratione, sequi vel porro eum.</span>} 
        />
        <Card />
      </div>
    </MainLayout>
  );
};

export default GoalPage;
