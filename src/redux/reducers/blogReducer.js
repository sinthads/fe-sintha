const INITIAL_STATE = {
  blogs: [],
  blogDetail: {},
  loading: false,
  error: '',
  message: '',
};

export const blogReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_START':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_BLOGS_SUCCESS':
      return {
        ...state,
        blogs: action.payload,
        loading: false,
      };
    case 'FETCH_BLOGS_FAILED':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'FETCH_BLOG_BY_ID_SUCCESS':
      return {
        ...state,
        blogDetail: action.payload,
        loading: false,
      };
    case 'FETCH_BLOG_BY_ID_FAILED':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'ACTION_START':
      return {
        loading: true,
      };
    case 'CREATE_BLOG_SUCCESS':
      return {
        loading: false,
        message: action.payload,
      };
    case 'CREATE_BLOG_FAILED':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'EDIT_BLOG_SUCCESS':
      return {
        loading: false,
        message: action.payload,
      };
    case 'EDIT_BLOG_FAILED':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'DELETE_BLOG_SUCCESS':
      return {
        loading: false,
        message: action.payload,
      };
    case 'DELETE_BLOG_FAILED':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
