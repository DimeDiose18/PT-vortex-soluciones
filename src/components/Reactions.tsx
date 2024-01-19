import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import MoodIcon from '@mui/icons-material/Mood';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

const Reactions = () => {
  return (
    <div className='flex justify-between items-center w-[100%] my-4'>
      <div className='flex items-center gap-2 cursor-pointer'>
        <ThumbUpAltIcon />
        <p className='text-sm'>2</p>
      </div>
      <div className='flex items-center gap-2 cursor-pointer'>
        <MoodIcon />
        <p className='text-sm'>6</p>
      </div>
      <div className='flex items-center gap-2 cursor-pointer'>
        <FavoriteBorderIcon />
        <p className='text-sm'>20</p>
      </div>
      <div className='flex items-center gap-2 cursor-pointer'>
        <ThumbDownAltIcon />
        <p className='text-sm'>1</p>
      </div>
    </div>
    
  )
}

export  {Reactions}
