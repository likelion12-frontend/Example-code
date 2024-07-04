import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchUsers = async () => {
  const { data } = await axios.get('주소');
  return data;
};

export default function Example() {
  // useQuery 훅: 첫 번째 파라미터는 쿼리 키, 두 번째 파라미터는 쿼리 함수, 세 번째 파라미터는 옵션 객체
  const { data, error, isLoading, isError } = useQuery(['users'], fetchUsers, {
    enabled: true, // 쿼리의 활성화 여부
    staleTime: 5000, // 데이터가 stale 상태로 간주되기 전까지의 시간 (5초)
    cacheTime: 10000, // 캐시된 데이터가 메모리에서 삭제되기 전까지의 시간 (10초)
    refetchOnWindowFocus: true, // 윈도우가 다시 포커스를 얻을 때 refetch 여부
    retry: 1, // 쿼리가 실패했을 때 재시도할 횟수
    onSuccess: (data) => {
      console.log('Fetched data:', data);
    },
    onError: (error) => {
      console.error('Error fetching data:', error);
    },
    select: (data) => data.slice(0, 5) // 데이터 변환: 첫 5개의 사용자만 반환
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {data.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
