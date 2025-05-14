import { useState } from 'react';

export function useAdminModalDelete() {
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);

  function handleDeleteModalClose(newState: boolean) {
    setDeleteModalOpen(newState);
  }

  return { deleteModalOpen, handleDeleteModalClose };
}
