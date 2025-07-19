import { useParams } from 'react-router-dom';

export default function Profile() {
  const { userId } = useParams();
  return <div className="text-center text-2xl font-bold">Profile Page of {userId}</div>;
}
