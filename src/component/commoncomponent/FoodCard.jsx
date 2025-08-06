// src/components/FoodCard.jsx
const FoodCard = ({ title, image, fee }) => {
  return (
    <div className="relative bg-gradient-to-b from-[#F4F1EA] to-white rounded-xl shadow-sm text-center p-5 w-full h-[230px] max-w-xs transition-all hover:shadow-md">
      <div className="flex justify-center">
        <div className="absolute -top-[80px] w-45 h-45 rounded-full border-2 border-dashed border-red-400 flex items-center justify-center overflow-hidden bg-white shadow-md">
          <img
            src={image}
            alt={title}
            className="w-40 h-40 object-cover rounded-full"
          />
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-800 mt-[90px]">{title}</h3>
      <p className="text-[16px] text-gray-500 py-1">The Registration Fee</p>
      <p className="text-red-600 font-bold text-lg mt-1">${fee}</p>
    </div>
  );
};

export default FoodCard;
