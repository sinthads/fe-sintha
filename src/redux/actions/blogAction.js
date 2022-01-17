import Swal from 'sweetalert2';
import { db } from '../../firebase.config';
import { collection, getDocs } from 'firebase/firestore';

export const getBlogsAction = () => {
  const userCollectionRef = collection(db, 'blogs');

  return async (dispatch) => {
    dispatch({
      type: 'FETCH_START',
    });
    try {
      const response = await getDocs(userCollectionRef);
      dispatch({
        type: 'FETCH_BLOGS_SUCCESS',
        payload: response.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
      });
    } catch (err) {
      dispatch({
        type: 'FETCH_BLOGS_FAILED',
        payload: err.message,
      });
      Swal.fire({
        title: 'Cannot get data',
        text: 'I will close in 2 seconds.',
        timer: 2000,
      });
    }
  };
};
