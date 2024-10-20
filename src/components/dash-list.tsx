import Image from 'next/image';

interface ListItemProps {
  title: string;
  count: number;
  imageSrc: string;
  buttonText: string;
  onButtonClick: () => void;
}

const ListItem: React.FC<ListItemProps> = ({ title, count, imageSrc, buttonText, onButtonClick }) => {
  return (
    <li className="w-[320px] flex items-center justify-between bg-[#E0E1DB] rounded-[20px] p-1 boxShadow">
      <div className="w-[100%] flex items-center justify-between bg-[#E0E1DB] rounded-[20px] px-2 py-3 innerShadow">
        <div className="w-[110px] h-[110px] rounded-full flex justify-center items-center oShadow">
          <Image 
            src={imageSrc} 
            alt={title} 
            width={100} 
            height={100} 
            className="p-4 rounded-full ishadow"
          />
        </div>
        <div className="flex flex-col pr-4 justify-between h-[80px]">
          <h3 className="text-[#121212] font-bold">{title}</h3>
          <span>{count}</span>
          <button 
            className="bg-[#669192] text-[#d2e6e8] px-4 py-1 rounded-3xl text-xs oShadow2 hover:text-[#121212] hover:bg-[#64CBBE]"
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </li>
  );
};

export default ListItem;
