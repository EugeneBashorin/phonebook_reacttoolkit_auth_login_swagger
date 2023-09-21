import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

//GET @/contacts
export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const res = await axios.get('/contacts');
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

//POST @/contacts
export const addTask = createAsyncThunk(
    'contacts/addUsers',
    async(text, thunkAPI)=>{
    try {
        const response = await axios.post('/contacts', {text});
        return response.data;
    } catch (error) {
        return thunkAPI.fulfillWithValue(error.message);
    }
  }
);

// DELETE @ /contacts/:id
export const deleteTask = createAsyncThunk(
    'contacts/deleteTask',
    async (contactId, thunkAPI) => {
      try {
        const response = await axios.delete(`/contacts/${contactId}`);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );