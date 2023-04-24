import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

interface GameCardSkeletonProps {}

const GameCardSkeleton = ({}: GameCardSkeletonProps) => {
  return (
    <Card>
      <Skeleton height='200px' />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
