import { Avatar } from '@nextui-org/avatar';

const AddressBookPage: React.FC = () => {
  return (
    <section className='flex w-full flex-col items-center justify-center gap-4 md:py-10'>
      <div className='flex w-full flex-col gap-1'>
        <h1 className='mb-6 text-2xl font-semibold'>Address book</h1>

        <div className='flex w-full flex-col'>
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className='flex flex-row items-center justify-between gap-2'>
              <div className='flex flex-row items-center gap-2'>
                <Avatar src='https://i.pravatar.cc/150?u=a042581f4e29026024d' />

                <div className='flex flex-col'>
                  <div className='text-lg font-semibold'>John Doe</div>
                  <div className='text-sm text-gray-500'>+1 (234) 567-8901</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AddressBookPage;
