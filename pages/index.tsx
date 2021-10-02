import { NextPage } from 'next';

import { Button } from '@/components/Button';

const Home: NextPage = () => {
  return (
    <div>
      <h1>Home</h1>
      <Button label="button" />
    </div>
  );
};

export default Home;
