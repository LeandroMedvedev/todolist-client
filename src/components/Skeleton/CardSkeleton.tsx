import { Box, Skeleton, SkeletonProps } from '@chakra-ui/react';

interface CardSkeletonProps extends SkeletonProps {
  repeatCount: number;
}

export const CardSkeleton = ({
  repeatCount = 1,
  ...rest
}: CardSkeletonProps) => {
  const howManyElements = Array.from(Array(repeatCount).keys());

  return (
    <>
      {howManyElements.map((_) => {
        return (
          <>
            <Skeleton
              speed={1}
              startColor="gray.50"
              endColor="gray.150"
              {...rest}
            >
              <Box p="7" w="300px" h="186px" bg="gray.300"></Box>
            </Skeleton>
          </>
        );
      })}
    </>
  );
};
