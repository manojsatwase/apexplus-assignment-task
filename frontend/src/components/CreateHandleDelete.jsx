import { toast } from 'react-hot-toast';

const CreateHandleDelete = (deleteFunction, id) => async () => {
  try {
    const { data } = await deleteFunction(id);
    toast.success(data?.message);
  } catch (error) {
    toast.error(error?.data?.message || 'An error occurred while deleting');
  }
};

export default CreateHandleDelete;
