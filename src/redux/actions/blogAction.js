import Swal from 'sweetalert2';
import { db } from '../../firebase.config';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  getDoc,
  deleteDoc,
} from 'firebase/firestore';

const blogCollectionRef = collection(db, 'blogs');

export const getBlogsAction = () => {
  return async (dispatch) => {
    dispatch({
      type: 'FETCH_START',
    });
    try {
      const response = await getDocs(blogCollectionRef);
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

export const getBlogbyIdAction = (id) => {
  const docRef = doc(db, 'blogs', id);
  return async (dispatch) => {
    dispatch({
      type: 'FETCH_START',
    });
    try {
      const response = await getDoc(docRef);
      dispatch({
        type: 'FETCH_BLOG_BY_ID_SUCCESS',
        payload: response.data(),
      });
      console.log(response.data());
    } catch (err) {
      dispatch({
        type: 'FETCH_BLOG_BY_ID_FAILED',
        payload: err.message,
      });
    }
  };
};

export const createBlogAction = (data, navigate) => {
  return async (dispatch) => {
    dispatch({
      type: 'ACTION_START',
    });
    try {
      await addDoc(blogCollectionRef, data);
      dispatch({
        type: 'CREATE_BLOG_SUCCESS',
      });
      navigate('/soal-2');
    } catch (err) {
      dispatch({
        type: 'CREATE_BLOGS_FAILED',
        payload: err.message,
      });
    }
  };
};

export const editBlogAction = (id, data) => {
  const blogDoc = doc(db, 'blogs', id);

  return async (dispatch) => {
    dispatch({
      type: 'ACTION_START',
    });
    try {
      await updateDoc(blogDoc, data);
      dispatch({
        type: 'EDIT_BLOG_SUCCESS',
      });
      dispatch(getBlogsAction());
    } catch (err) {
      dispatch({
        type: 'EDIT_BLOG_FAILED',
        payload: err.message,
      });
    }
  };
};

export const deleteBlogbyIdAction = (id) => {
  const blogDoc = doc(db, 'blogs', id);

  return async (dispatch) => {
    dispatch({
      type: 'ACTION_START',
    });
    try {
      await deleteDoc(blogDoc);
      dispatch({
        type: 'DELETE_BLOG_SUCCESS',
      });
      Swal.fire('Deleted!', '', 'success');
    } catch (err) {
      dispatch({
        type: 'DELETE_BLOG_FAILED',
        payload: err.message,
      });
    }
  };
};
