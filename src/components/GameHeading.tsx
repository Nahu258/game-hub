import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App"

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({gameQuery}: Props) => {
  // Games
  // Genre Games
  // Platform Games
  // Platform Genre Games
  const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`
  
  return (
    <Heading as='h1' marginY={3} fontSize='4xl'>{heading}</Heading>
  )
}

export default GameHeading