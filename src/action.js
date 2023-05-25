// actions.js
import axios from "axios";

export const getNotes = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:7000/notes")
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: "GET_NOTES",
          payload: response.data,
        });
      })
      .catch((error) => {
        // Xử lý lỗi
      });
  };
};

export const addNote = (note) => {
  return (dispatch) => {
    axios
      .post("http://localhost:7000/notes", note)
      .then((response) => {
        dispatch({
          type: "ADD_NOTE",
          payload: response.data,
        });
      })
      .catch((error) => {
        // Xử lý lỗi
      });
  };
};
