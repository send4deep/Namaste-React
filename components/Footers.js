import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footers = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <footer className="bg-gray-400 border-t px-3 fixed bottom-0 w-full">
      <ul className="flex justify-between items-center">
        <li className="py-2">Copyright @ Deepak Mishra</li>
        <li className="py-2">{loggedInUser}</li>
      </ul>
    </footer>
  );
};

export default Footers;
