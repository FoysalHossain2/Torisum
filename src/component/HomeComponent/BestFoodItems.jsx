import { foodItems } from "../../../data/Foodata";
import FoodCard from "../commonComponent/FoodCard";

const BestFoodItems = () => {
  return (
    <div className="bg-[#F4F1EA]  px-4">
      <div className=" pt-[90px] pb-8 px-4">
        <div className="flex flex-col justify-center ">
          <p className="text-base font-bold uppercase text-center text-seconderyColor font-Figtree">
            Best Food{" "}
          </p>
          <p className="font-bold text-[40px] text-center text-black">
            Popular Food Items
          </p>
        </div>
        <div className="pt-[150px] max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {foodItems.map((item, id) => (
            <FoodCard
              key={id}
              title={item.title}
              fee={item.fee}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestFoodItems;
