export interface DeleteModalProps {
  productId: number;
  handleDelete: ({ productId }: { productId: number }) => void;
}
