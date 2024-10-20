
import { MdInventory } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { CiDollar } from "react-icons/ci";
import { IconType } from "react-icons";
import { Separator } from "./ui/separator";

type ListItemProps = {
  title: string;
  link: string;
  icon: IconType;
};

const listData: ListItemProps[] = [
  { title: 'Dashboard', icon: MdInventory, link:"/" },
  { title: 'Purchase',  icon: CiDollar,link:"/purchase" },
];

const ListItem: React.FC<ListItemProps> = ({ title, link, icon: Icon }) => {
  return (
    <div className="">
      <li className="w-full flex items-center justify-between px-1">
        <a href={link} className="w-[100%]">
          <div className="w-[100%] flex items-center justify-between">
            <div className="">
              <Icon className="p-4 rounded-fullss w-[50px] h-[50px]" />
            </div>
              <h3 className="text-[#121212] font-bold">{title}</h3>
              <span className='block'><IoIosArrowForward className=""/></span>
          </div>
        </a>
      </li>
      <Separator className="w-[100%] bg-[#B7BCB8]" />
    </div>
  );
};

export default function SideBar() {
  return (
      <ul className="w-[100%]">
        {listData.map((item, index) => (
          <ListItem
            key={index} 
            title={item.title}
            link={item.link}
            icon={item.icon}
          />
        ))}
      </ul>
  );
}
