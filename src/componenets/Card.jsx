import { Link } from "react-router-dom";

const Card = ({ title, desc, cardlink, bg = "bg-gray-100" }) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md`}>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-2 mb-4">{desc}</p>
      <Link
        to={cardlink}
        className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
      >
        Browse Jobs
      </Link>
    </div>
  );
};

export default Card;
