import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";

const ExpensePage = () => {
  return (
    <MainLayout type="expense">
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card
          title="Expenses Comparison"
          variant="md:col-span-3"
          desc={<span className="text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque quam alias enim ullam deserunt ducimus consequatur cumque hic voluptatem totam ab quibusdam facilis distinctio ratione, sequi vel porro eum.</span>}
        />
        <Card title={<span className="text-primary">Expenses Breakdown</span>} />
        <Card
          title={<span>&nbsp;</span>}
          desc={<span className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque quam alias enim ullam deserunt ducimus consequatur cumque hic voluptatem totam ab quibusdam facilis distinctio ratione, sequi vel porro eum.</span>}
        />
        <Card title={<span>&nbsp;</span>} />
        <Card />
        <Card />
        <Card 
          desc={<span className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque quam alias enim ullam deserunt ducimus consequatur cumque hic voluptatem totam ab quibusdam facilis distinctio ratione, sequi vel porro eum.</span>}
        />
      </div>
    </MainLayout>
  );
};

export default ExpensePage;
