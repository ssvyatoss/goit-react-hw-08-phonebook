import axios from 'axios';

const phonebookApi = axios.create({
  baseURL: 'https://64ad6b4ab470006a5ec5eee4.mockapi.io',
});

export const fetchContacts = async () => {
    const {data} = await phonebookApi.get('/contacts');
    return data;
};

export const addContact = async contact => {
    const {data} = await phonebookApi.post('/contacts', contact);
    return data;
}

export const deleteContact = (id) => phonebookApi.delete(`/contacts/${id}`);