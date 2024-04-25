import ReactSelect from 'react-select';

type CustomFilterType = {
    title:string
}

const CustomFilter = ({title}:CustomFilterType) => {
  return (
    <div>
        <ReactSelect placeholder={title} className='text-black min-w-[120px]' />
    </div>
  )
}

export default CustomFilter