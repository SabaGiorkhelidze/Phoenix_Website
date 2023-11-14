import Saba from "../assets/saba.jpg";
import Ana from "../assets/ana.jpg";
import toko from '../assets/toko.jpg'
type TeamDataType = {
  id: number;
  picture: string;
  Name: string;
  Position: string;
};

export const TeamData: Array<TeamDataType> = [
  {
    id: 1,
    picture: Saba,
    Name: "საბა",
    Position: "დეველოპერი",
  },
  {
    id: 2,
    picture: toko,
    Name: "თორნიკე",
    Position: "დეველოპერი/გეიმმასტერი",
  },
  {
    id: 3,
    picture: Ana,
    Name: "ანა",
    Position: "დიზაინერი",
  },
];
