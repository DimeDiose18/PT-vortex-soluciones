interface ICard {
  title: string;
  caption: string;
  image: string;
  gridStyle: {
    grid_container?: string;
    grid_title?: string;
    grid_caption?: string;
    grid_img?: string;
  };
}

const Card = ({ title, caption, image, gridStyle }: ICard) => {
const { grid_container, grid_title, grid_caption, grid_img } = gridStyle;
  return (
    <div className={`bg-[#FFF] h-full w-full p-7 ${grid_container}`}>
      <h1 className={`text-[70px] font-[400] ${grid_title}`}>{title}</h1>
      <p className={`text-lg font-[400] ${grid_caption}`}>{caption}</p>
      <img src={image} alt='image' className={`${grid_img}`}/>
    </div>
  );
};

export default Card;
