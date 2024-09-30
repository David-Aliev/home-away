import { FaHeart } from "react-icons/fa";
import { Button } from "../ui/button";

function FavoriteToggleButton() {
  return (
    <Button size="icon" variant="outline" className="pt-1 cursor-pointer">
      <FaHeart />
    </Button>
  );
}

export default FavoriteToggleButton;
