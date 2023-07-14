import axios from 'axios';

export const fetchContacts = async () => {
    const {data} = await axios.get('/contacts');
    return data;
};

export const addContact = async contact => {
    const {data} = await axios.post('/contacts', contact);
    return data;
}

export const deleteContact = (id) => axios.delete(`/contacts/${id}`);