import { memo, useState } from 'react';
import {
  Button,
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
} from '@/shared/shadcn';
import { DeleteModalProps } from '../model';

export const DeletePopover = memo(function DeletePopover({
  productId,
  handleDelete,
}: DeleteModalProps) {
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);

  function onDelete(productId: number) {
    handleDelete({ productId });
    setDeleteModalOpen(false);
  }

  return (
    <Popover
      modal={true}
      open={deleteModalOpen}
      onOpenChange={setDeleteModalOpen}
    >
      <PopoverTrigger asChild className={'w-full'}>
        <Button variant={'outline'} className={'w-full'}>
          Удалить
        </Button>
      </PopoverTrigger>
      <PopoverAnchor />
      <PopoverContent>
        <div className={'flex flex-col gap-2'}>
          <span>Вы уверены, что хотите удалить товар?</span>
          <Button variant={'destructive'} onClick={() => onDelete(productId)}>
            Удалить
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
});
