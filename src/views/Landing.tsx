import Card from '../components/Card';
import { cardsInformation } from '../data/landing.json';

interface ICardInformation {
  id: string;
  title: string;
  caption: string;
  img: string;
  order: string;
  grid: { container?: string; title?: string; caption?: string; img?: string };
}

const Landing = () => {
  return (
    <section className='grid grid-cols-3 h-screen p-24 bg-[#E6E6FA]'>
      {cardsInformation.map(({ id, title, caption, img, order, grid }: ICardInformation, index) => {
        return order === 'card,number' ? (
          <div key={index + 1} id={id} className='h-[70%]'>
            <Card
              title={title}
              caption={caption}
              image={img}
              gridStyle={{
                grid_container: grid.container,
                grid_title: grid.title,
                grid_caption: grid.caption,
                grid_img: grid.img,
              }}
            />
            <h1 className='text-[#FFD700] text-[200px] font-[380] text-center'>
              {index + 1}
            </h1>
          </div>
        ) : (
          <div key={index + 1} id={id} className='h-[70%]'>
            <h1 className='text-[#FFD700] text-[200px] font-[380] text-center'>
              {index + 1}
            </h1>
            <Card
              title={title}
              caption={caption}
              image={img}
              gridStyle={{
                grid_container: grid.container,
                grid_title: grid.title,
                grid_caption: grid.caption,
                grid_img: grid.img,
              }}
            />
          </div>
        );
      })}
    </section>
  );
};

export default Landing;
