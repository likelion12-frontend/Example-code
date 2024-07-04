import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

// Mutation Function: 데이터를 생성하는 함수
const createUser = async (user) => {
  const { data } = await axios.post('주소', user);
  return data;
};

function CreateUser() {
  const queryClient = useQueryClient();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const mutation = useMutation(createUser, {
    onSuccess: () => {
      // 성공적으로 데이터를 생성한 후, 'users' query를 무효화하여 최신 데이터를 fetch
      queryClient.invalidateQueries(['users']);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ name, email });
  };

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <button type="submit">Create</button>
      </form>
      {mutation.isLoading && <div>Creating user...</div>}
      {mutation.isError && <div>Error: {mutation.error.message}</div>}
      {mutation.isSuccess && <div>User created successfully!</div>}
    </div>
  );
}

export default CreateUser;
