// import Card from "../components/Elements/Card";
// import MainLayout from "../components/Layouts/MainLayout";

// const DashboardPage = () => {
//   return (
//     <MainLayout type="dashboard">
//       {/* top content start*/}
//       <div className="mb-4 sm:flex sm:gap-6">
//                 <div className="mb-4 sm:w-1/3">
//                   <Card />
//                 </div>
//                 <div className="mb-4 sm:w-1/3">
//                   <Card />
//                 </div>
//                 <div className="mb-4 sm:w-1/3">
//                   <Card />
//                 </div>
//             </div>
//             {/* top content end*/}
//             {/* bottom content start*/}
//             <div className="sm:flex sm:gap-6">
//                 <div className="mb-4 sm:w-1/3">
//                   <Card />
//                 </div>
//                 <div className="sm:w-2/3">
//                 <div className="mb-4">
//                   <Card />
//                 </div>
//                 <div className="mb-4">
//                   <Card />
//                 </div>
//             </div>
//           </div>
//         {/* bottom content end*/}
//     </MainLayout>
//   );
// };

// export default DashboardPage;

import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";

const DashboardPage = () => {
  return (
    <MainLayout type="dashboard">
      {/* top content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card title="Total Balance" />
        <Card 
          title="Goals" 
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatum dolorem impedit quam hic dolore nam eos, corporis qui consectetur placeat id, vitae rem magni repudiandae reprehenderit maiores veniam saepe!"
        /> 
        <Card title="Upcoming Bill" />
      </div>
      {/* top content end*/}
      {/* bottom content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <div className="md:col-span-1">
          <Card 
            title="Recent Transaction"
            desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias obcaecati recusandae eveniet perspiciatis nesciunt iure doloribus, neque dolorum laudantium saepe repudiandae et illo nobis earum tempore ipsa ut ullam consequuntur?" 
          />
        </div>
        <div className="md:col-span-2 flex flex-col flex-1">
          <Card title="Statistics" />
          <Card title="Expenses Breakdown" />
        </div>
        </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default DashboardPage;