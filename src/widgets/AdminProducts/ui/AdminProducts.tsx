import { AdminProductsList } from '@/features/AdminProductsList';

export const AdminProducts = () => {
  return (
    <div className={'max-w-[600px] w-full gap-4 flex flex-col'}>
      <h2
        className={
          'createTitle font-black text-[25px] mb-[10px] text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 uppercase'
        }
      >
        Все товары
      </h2>
      <AdminProductsList />
    </div>
  );
};
