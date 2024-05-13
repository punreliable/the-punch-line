import { Box, Heading } from "@chakra-ui/react"
import Head from "next/head"

import { SplashImage } from "@/components/home/SplashImage"

export default function Home(): React.ReactElement {
  return (
    <>
      <Head>
        <title>The Punch Line</title>
      </Head>
      <Box>
        <SplashImage />
        <Box
          maxWidth="450px"
          backgroundColor="rgba(20, 20, 20, 0.9)"
          borderRadius="10px"
          p={10}
          m={10}
          alignSelf="center"
        >
          <Heading textAlign="center" textColor="purple.100">
            Welcome to
            <br />
            The Punch Line
          </Heading>
        </Box>
      </Box>
    </>
  );
}
