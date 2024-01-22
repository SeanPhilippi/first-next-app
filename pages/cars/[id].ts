import { useRouter } from 'next/router';

const Car = () => {
  const router = useRouter();
  const { id } = router.query;
}

export default Car;